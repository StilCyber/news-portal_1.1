import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'Entities/Country';
import { Currency } from 'Entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

const data = {
   username: 'admin',
   age: 22,
   lastname: 'chan',
   first: 'Stil',
   city: 'afd',
   country: Country.Netherlands,
   currency: Currency.EUR,
};

describe('updateProfileData.test', () => {
   test('success', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: data,
         },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ data }));
      const result = await thunk.callThunk();

      expect(thunk.api.put).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(result.payload).toEqual(data);
   });

   test('error', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: data,
         },
      });
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
   });

   test('validate error', async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
         profile: {
            form: { ...data, lastname: '' },
         },
      });

      const result = await thunk.callThunk();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(result.payload).toEqual([
         ValidateProfileErrors.INCORRECT_USER_DATA,
      ]);
   });
});

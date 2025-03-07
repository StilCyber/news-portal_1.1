import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
   test('should return form', () => {
      const form = {
         username: 'admin',
         age: 22,
         lastname: 'chan',
         first: 'Stil',
         city: 'afd',
      };
      const state: DeepPartial<StateSchema> = {
         profile: {
            form,
         },
      };
      expect(getProfileForm(state as StateSchema)).toEqual(form);
   });

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileForm(state as StateSchema)).toEqual(undefined);
   });
});

import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
   test('should return data', () => {
      const data = {
         username: 'admin',
         age: 22,
         lastname: 'chan',
         first: 'Stil',
         city: 'afd',
      };
      const state: DeepPartial<StateSchema> = {
         profile: {
            data,
         },
      };
      expect(getProfileData(state as StateSchema)).toEqual(data);
   });

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileData(state as StateSchema)).toEqual(undefined);
   });
});

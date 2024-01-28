import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
   test('should return true', () => {
      const isLoading = true;
      const state: DeepPartial<StateSchema> = {
         profile: {
            isLoading
         },
      };
      expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
   });

   test('should return false', () => {
    const isLoading = false;
    const state: DeepPartial<StateSchema> = {
       profile: {
          isLoading
       },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
 });

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
   });
});

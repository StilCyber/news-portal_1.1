import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly} from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
   test('should return true', () => {
      const readonly = true;
      const state: DeepPartial<StateSchema> = {
         profile: {
            readonly
         },
      };
      expect(getProfileReadonly(state as StateSchema)).toEqual(readonly);
   });

   test('should return false', () => {
    const readonly = false;
    const state: DeepPartial<StateSchema> = {
       profile: {
          readonly
       },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(readonly);
 });

   

   test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
   });
});
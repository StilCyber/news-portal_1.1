import { CounterSchema } from 'Entities/Counter';
import { UserSchema } from 'Entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

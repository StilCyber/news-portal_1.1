import { User } from 'Entities/User';

export interface Comment {
   id: string;
   user: User;
   text: string;
}

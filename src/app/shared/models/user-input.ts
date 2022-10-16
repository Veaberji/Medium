import CurrentUser from './current-user';

export default interface UserInput extends CurrentUser {
  password: string;
}

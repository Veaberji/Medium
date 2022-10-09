import CurrentUser from 'src/app/shared/models/current-user';

export default interface AuthResponse {
  user: CurrentUser;
}

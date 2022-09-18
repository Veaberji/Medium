import CurrentUser from 'src/app/shared/models/currentUser';

export default interface AuthResponse {
  user: CurrentUser;
}

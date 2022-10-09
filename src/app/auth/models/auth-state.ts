import BackendErrors from 'src/app/shared/models/backend-errors';
import CurrentUser from 'src/app/shared/models/current-user';

export default interface AuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrors | null;
}

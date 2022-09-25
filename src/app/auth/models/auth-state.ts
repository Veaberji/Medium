import BackendErrors from 'src/app/shared/models/backendErrors';
import CurrentUser from 'src/app/shared/models/currentUser';

export default interface AuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrors | null;
}

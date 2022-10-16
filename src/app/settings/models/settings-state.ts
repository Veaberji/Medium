import BackendErrors from 'src/app/shared/models/backend-errors';

export default interface SettingsState {
  isSubmitting: boolean;
  errors: BackendErrors | null;
}

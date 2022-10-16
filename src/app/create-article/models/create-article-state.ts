import BackendErrors from 'src/app/shared/models/backend-errors';

export default interface CreateArticleState {
  isSubmitting: boolean;
  errors: BackendErrors | null;
}

import BackendErrors from 'src/app/shared/models/backend-errors';

export interface CreateArticleState {
  isSubmitting: boolean;
  errors: BackendErrors | null;
}

import Article from 'src/app/shared/models/article';
import BackendErrors from 'src/app/shared/models/backend-errors';

export default interface EditArticleState {
  isLoading: boolean;
  article: Article | null;
  isSubmitting: boolean;
  errors: BackendErrors | null;
}

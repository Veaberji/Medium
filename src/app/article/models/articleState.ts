import Article from 'src/app/shared/models/article';

export default interface ArticleState {
  isLoading: boolean;
  data: Article | null;
  error: string | null;
}

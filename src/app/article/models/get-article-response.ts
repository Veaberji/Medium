import Article from 'src/app/shared/models/article';

export default interface GetFeedResponse {
  articles: Article[];
  articlesCount: number;
}

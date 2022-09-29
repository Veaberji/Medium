import Article from '../../../models/article';

export default interface GetFeedResponse {
  articles: Article[];
  articlesCount: number;
}

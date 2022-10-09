import GetFeedResponse from './get-feed-response';

export default interface FeedState {
  isLoading: boolean;
  data: GetFeedResponse | null;
  error: string | null;
}

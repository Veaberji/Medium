import GetFeedResponse from './getFeedResponse';

export default interface FeedState {
  isLoading: boolean;
  data: GetFeedResponse | null;
  error: string | null;
}

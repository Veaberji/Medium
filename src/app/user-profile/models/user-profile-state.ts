import Profile from 'src/app/shared/models/profile';

export default interface UserProfileState {
  isLoading: boolean;
  data: Profile | null;
  error: string | null;
}

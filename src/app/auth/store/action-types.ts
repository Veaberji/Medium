export enum ActionType {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register success',
  RegisterFailure = '[Auth] Register failure',

  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login success',
  LoginFailure = '[Auth] Login failure',

  GetCurrentUser = '[Auth] Get current user',
  GetCurrentUserSuccess = '[Auth] Get current user success',
  GetCurrentUserFailure = '[Auth] Get current user failure',
}

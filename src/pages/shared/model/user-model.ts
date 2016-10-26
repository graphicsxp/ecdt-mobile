export interface IUser {
  id: number;
  fullName: string;
  account: {
    email: string;
    username: string;
    password: string;
    confirm: string;
  }
}

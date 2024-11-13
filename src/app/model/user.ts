import { Usertype } from './usertype';

export class User {
  public idUser!: number;
  public name: string = '';
  public email: string = '';
  public username: string = '';
  public password: string = '';
  public userType: Usertype = new Usertype();
}

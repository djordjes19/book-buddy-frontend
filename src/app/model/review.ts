import { User } from "./user";

export class Review {
    
  idReview!:number
  text!: string;
  daterev!:Date;
  public user: User = new User();
}

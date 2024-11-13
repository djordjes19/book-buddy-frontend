import { Review } from "./review";

export class Book {

    idBook!: number;
    public title: string = '';
    public photo: string = '';
    public author:string = '';
    public publishedYear: number=0;
    public rating: number=0.0;
    public reviews!: Review[];

}

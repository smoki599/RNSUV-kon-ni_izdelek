import { Vsebina } from "./vsebina";

export class Knjiga extends Vsebina{
    author: string;
    pages: number;
  
    constructor(
      id: number,
      title: string,
      description: string,
      srcImg: string,
      author: string,
      pages: number
    ) {
      super(id, title, description,srcImg);
      this.id = id;
      this.author = author;
      this.pages = pages;
      this.srcImg = srcImg;
    }
}
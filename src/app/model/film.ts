import { Vsebina } from "./vsebina";

export class Film extends Vsebina {
    director: string;
    releaseYear: number;
  
    constructor(
      id: number,
      title: string,
      description: string,
      srcImg: string,
      director: string,
      releaseYear: number
    ) {
      super(id, title, description,srcImg);
      this.id = id;
      this.director = director;
      this.releaseYear = releaseYear;
      this.srcImg = srcImg;
    }
  }
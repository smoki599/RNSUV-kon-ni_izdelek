export class Vsebina {
    id: number;
    title: string;
    description: string;
    srcImg: string;
  
    constructor(id: number, title: string, description: string, img:string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.srcImg = img;
    }
  }
  
  
  
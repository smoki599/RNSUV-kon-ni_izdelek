export class Review {
    id!: number;
    type!: string;
    vsebinaId!: number;
    userId!: string;
    rating!: number;
    comment!: string;

    constructor(id: number, type: string,  vsebinaId: number, userId: string,rating: number, comment:string) {
        this.id = id;
        this.type = type;
        this.vsebinaId = vsebinaId;
        this.userId = userId;
        this.rating = rating;
        this.comment = comment;

      }
  }
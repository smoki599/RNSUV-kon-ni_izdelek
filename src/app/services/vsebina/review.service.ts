import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = '/api/review/';

  constructor(private http: HttpClient) {}

  // Get reviews for a specific class (based on class ID or type)
  getReviewsForVsebina(vsebinaId: number, type: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl, {
          params: { 
            id: vsebinaId,
            type: type
          }
        });
  }

  addReview(review: Review): Observable<any> {
    return this.http.post(this.apiUrl, review);
  }
  getReview():Observable<Review[]>{
    return this.http.get<Review[]>(this.apiUrl);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../services/vsebina/review.service';
import { Review } from '../../model/review';

@Component({
  selector: 'app-review-list',
  standalone: false,
  
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent implements OnInit {
  @Input() vsebinaId!: number; // ID of the class
  @Input() type!: string;

  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviewsForVsebina(this.vsebinaId, this.type).subscribe(
      (productsFromBackend)=>{ this.reviews = productsFromBackend;console.log(this.reviews) }
    );
  }

  loadReviews(): void {
    // this.reviewService.getReviewsForVsebina(this.vsebinaId).subscribe({
    //   next: (reviews) => {
    //     this.reviews = reviews;
    //   },
    //   error: (error) => {
    //     console.error('Error loading reviews:', error);
    //   },
    //   complete: () => {
    //     console.log('Reviews loading completed.');
    //   }
    // });
    
  }
}
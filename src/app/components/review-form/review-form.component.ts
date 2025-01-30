import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReviewService } from '../../services/vsebina/review.service';
import { AuthService } from '../../services/auth/auth.service';
import { Review } from '../../model/review';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-review-form',
  standalone: false,
  
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {
  @Input() vsebinaId!: number;
  @Input() type!: string;

  review!: Review;

  constructor(private reviewService: ReviewService, private authService: AuthService,private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    //this.vsebinaId = this.route.snapshot.paramMap.get('vsebinaId') || '';
    this.review = new Review(1000,this.type,this.vsebinaId,this.authService.getUsername()?? "",0,"");
  }

  setRating(rating: number): void {
    this.review.rating = rating;
  }

  submitReview(): void {
    this.reviewService.addReview(this.review).subscribe({
      next: (message) => {
        this.review.id++;
        this.review.userId = "";
        this.review.comment = '';
        this.review.rating = 0; 
        this.router.navigate(['/index'])
      },
      error: (error) => {
        console.error('Error submitting review:', error);
      },
      complete: () => {
        console.log('Review submission complete');
      },
    });
    
  }
}
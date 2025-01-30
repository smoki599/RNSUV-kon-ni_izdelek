import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../model/review';
import { ReviewService } from '../../services/vsebina/review.service';
import { VsebinaService } from '../../services/vsebina/vsebina.service';

@Component({
  selector: 'app-review',
  standalone: false,
  
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  vsebinaIdString!: string;
  vsebinaId!: number;
  type!: string;
  vsebina!: any; // Item details

  constructor(
    private route: ActivatedRoute,
    private reviewServices: ReviewService,
    private vsebinaServices: VsebinaService

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vsebinaIdString = params.get('vsebinaId') || '';
      this.type = params.get('type') || '';
    });

    // Fetch item details
    const vsebinaIdNumber = parseInt(this.vsebinaIdString, 10);

    if (isNaN(vsebinaIdNumber)) {
      console.error('Invalid vsebinaId:', this.vsebinaId);
      return; // Exit if vsebinaId is not a valid number
    }
    this.vsebinaId = vsebinaIdNumber;
    switch (this.type) {
      case 'knjiga':
        this.vsebinaServices.getKnjigeById(vsebinaIdNumber).subscribe((data) => {
          this.vsebina = data;
        });
        break;
      case 'film':
        this.vsebinaServices.getFilmById(vsebinaIdNumber).subscribe((data) => {
          this.vsebina = data;
          // console.log("->",this.vsebina)
        });
        break;
      default:
        console.error('Invalid type:', this.type);
    }
  }
}

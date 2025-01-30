import { Component, OnInit, HostListener } from '@angular/core';
import { Knjiga } from '../../model/knjiga';
import { VsebinaService } from '../../services/vsebina/vsebina.service';

@Component({
  standalone: false,
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css'],
})
export class knjigaComponent implements OnInit {
  // bookList!: Array<Knjiga>;
  bookList: Knjiga[] = [];

  private scrollTimeout: any = null;

  constructor(private knjigaService:  VsebinaService) {}

  ngOnInit(): void {
    this.knjigaService.getKnjige().subscribe(
      (productsFromBackend)=>{ this.bookList = productsFromBackend;console.log(this.bookList) }
    );
  }

  onWheel(event: WheelEvent): void {
    // Only apply scroll if scrolling horizontally
    if (event.deltaX === 0) {
      //console.log("here")
      // Prevent vertical scroll
      event.preventDefault();
      const scrollContainer = event.currentTarget as HTMLElement;
      //console.log(event.deltaY)
      // Scroll horizontally based on the wheel delta

      scrollContainer.scrollLeft += event.deltaY/2; // Scroll by the amount of horizontal wheel movement

    }
  }


}

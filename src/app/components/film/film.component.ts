import { Component, OnInit } from '@angular/core';
import { Film } from '../../model/film';
import { VsebinaComponent } from '../vsebina/vsebina.component';
import { VsebinaService } from '../../services/vsebina/vsebina.service';

@Component({
  standalone: false,
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class filmComponent implements OnInit {
  filmList: Film[] = [];

  constructor(private filmService: VsebinaService) {}

  ngOnInit(): void {
    this.filmService.getFilm().subscribe(
      (productsFromBackend)=>{ this.filmList = productsFromBackend; }
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

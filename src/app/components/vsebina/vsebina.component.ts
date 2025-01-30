import { Component, OnInit } from '@angular/core';
import { VsebinaService } from '../../services/vsebina/vsebina.service';
import { Vsebina } from '../../model/vsebina';
import { Film } from '../../model/film';
import { Knjiga } from '../../model/knjiga';

@Component({
  standalone: false,
  selector: 'app-vsebina',
  templateUrl: './vsebina.component.html',
  styleUrls: ['./vsebina.component.css'],
})
export class VsebinaComponent implements OnInit {
  vsebine: Vsebina[] = [];

  constructor(private vsebinaService: VsebinaService) {}

  ngOnInit(): void {
    
  }
}

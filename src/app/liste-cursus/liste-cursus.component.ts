import { Component, OnInit } from '@angular/core';
import { LCursus } from '../mock-cursus';
import {Cursus} from '../cursus';

@Component({
  selector: 'app-liste-cursus',
  templateUrl: './liste-cursus.component.html',
  styleUrls: ['./liste-cursus.component.css']
})
export class ListeCursusComponent implements OnInit {
lcursus=LCursus;
selectedCursus?: Cursus;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(cursus: Cursus): void {
    this.selectedCursus = cursus;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent implements OnInit {
  color: string = '#000000';
  size: number = 12;
  family: string = 'Arial';

  constructor() {}

  ngOnInit(): void {}
}

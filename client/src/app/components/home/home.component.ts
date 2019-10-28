import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startGame = false;

  constructor() { }

  ngOnInit() {
  }

  actionStartGame() {
    return this.startGame = !this.startGame;
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiClientService, API_URI_POKEMONS } from './../../api-client/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  attackSp: number;
  turns: any;
  monsterHealth: number;
  setHealth: number;
  playerHealth: number;
  gameIsRunning: boolean;
  startGame: boolean;

  constructor(public apiClientService: ApiClientService) { }

  ngOnInit() {

  }

  actionStartGame() {
    this.startGame = !this.startGame;
    this.playerHealth = 100;
    this.monsterHealth = 100;
    this.turns = [];
    this.attackSp = 5;
    this.setHealth = 3;
  }

}

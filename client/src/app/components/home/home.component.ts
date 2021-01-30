import { Component, OnInit } from '@angular/core';
import { ApiClientService, API_URI_POKEMONS, API_URI_USER } from './../../api-client/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  attackSp: number;
  monsterHealth: number;
  playerHealth: number;
  gameIsRunning: boolean;
  startGame: boolean;
  user: any;

  constructor(public apiClientService: ApiClientService) { }

  ngOnInit() {
    this.apiClientService.get(API_URI_USER + '/' + '5e35d09d7b213e1ea002948a').toPromise().then(data => {
      console.log('data USER : ', data);
      this.user = data;
    });
  }

  actionStartGame() {
    this.startGame = !this.startGame;
    this.playerHealth = this.user.pokemon.pv;
    this.monsterHealth = 100;
    this.attackSp = this.user.pokemon.attack_spe;
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiClientService, API_URI_POKEMONS } from './../../api-client/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startGame = false;

  constructor(public apiClientService: ApiClientService) { }

  ngOnInit() {

  }

  actionStartGame() {
    return this.startGame = !this.startGame;
  }

}

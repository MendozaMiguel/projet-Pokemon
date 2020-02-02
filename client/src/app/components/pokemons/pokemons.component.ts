import { Component, OnInit } from '@angular/core';
import { API_URI_POKEMONS, ApiClientService } from 'src/app/api-client/api-client.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: any;
  constructor(public apiClientService: ApiClientService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    return this.apiClientService.get(API_URI_POKEMONS).toPromise().then(pokemons => {
      console.log('this.pokemons : ', pokemons);
      this.pokemons = pokemons;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { JsonConImagen } from 'src/app/models/jsonconImagen';
import { Poke } from 'src/app/models/poke';
import { Pokemons } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  public pokemons: JsonConImagen[]=[]
  public page = 1;
  public pageSize = 10;
  public collectionSize!: number;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    //recolecto el primer json
    this.pokemonService.getPokemons()
    .subscribe((pokemons:Pokemons)=> {
      this.collectionSize=pokemons.results.length;
      //por cada pokemon en result busco en la url
      pokemons.results.forEach((pokemon: Poke) =>{
        this.pokemonService.getJsonConImagen(pokemon.url!)
        //por cada consultado solo guardamos name y sprites que nos llega a la url
        .subscribe((jsonConImagen:JsonConImagen)=>{
          this.pokemons.push(jsonConImagen);
        });
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  public pokemons?: Pokemons;
  public urlImagen?: string="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  public page = 1;
  public pageSize = 10;
  public collectionSize!: number;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe( pokemos =>{
      this.pokemons = pokemos;
      this.collectionSize= pokemos.results.length;
    });
  }

  imagen(urlImagen: string): string{
    let temp=urlImagen.split("/");
    return this.urlImagen+temp[temp.length-2]+".svg";
  }

}

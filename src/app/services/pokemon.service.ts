import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Pokemons } from '../models/pokemon';
import { JsonConImagen } from '../models/jsonconImagen';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint : string = environment.url;
  constructor(private http: HttpClient) { }

  //obtener pokemones
  getPokemons(): Observable<Pokemons>{
    return this.http.get(this.urlEndPoint).pipe(
      map ((resp) => resp as Pokemons)
    );
  }
  //obtener Json con la url
  getJsonConImagen(url: string): Observable <JsonConImagen>{
    return this.http.get(url).pipe(
      map ((resp) => 
        resp as JsonConImagen
      )
    );
  }
}

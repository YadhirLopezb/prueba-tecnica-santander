import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Pokemons } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint : string = environment.url;
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemons>{
    return this.http.get(this.urlEndPoint).pipe(
      map ((resp) => resp as Pokemons)
    );
    }
}

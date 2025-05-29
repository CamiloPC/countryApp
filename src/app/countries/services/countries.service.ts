import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  constructor(private http: HttpClient) {
    if(typeof window !== 'undefined') {
      this.loadFromLocalStorage();
    }
  }

  private saveToLocalStorage () {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ) );
  }

  private loadFromLocalStorage () {

    if( localStorage.getItem( 'cacheStore' ) ){
      this.cacheStore = JSON.parse( localStorage.getItem( 'cacheStore' )! );
    }
    else return;
  }

  private getCountriesRequest ( url: string ): Observable<Country[]> {
    return this.http.get<Country[]>( url ).
      pipe( catchError( error => of([]) ),
      delay(1500) );
  }

  searchCountryByAlphaCode ( code: string ): Observable<Country | null> {
    const url = `${ this.apiURL }/alpha/${ code }`;
    return this.http.get<Country[]>( url ).
      pipe(
        map( countries => countries.length>0 ? countries[0]: null ),
        catchError( error => of(null) ) );
  }

  searchCapital ( _term: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ _term }`;
    return this.getCountriesRequest(url).
      pipe(
        tap( _countries => {
          this.cacheStore.byCapital = {
            term : _term,
            countries : _countries
          }
        } ),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchCountry ( _term: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/name/${ _term }`;
    return this.getCountriesRequest(url).
      pipe(
        tap( _countries => {
          this.cacheStore.byCountry = {
            term : _term,
            countries : _countries
          }
        } ),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchRegion ( _region: Region ): Observable<Country[]> {

    const url = `${ this.apiURL }/region/${ _region }`;
    return this.getCountriesRequest(url).
      pipe(
        tap( _countries => {
          this.cacheStore.byRegion = {
            region : _region,
            countries : _countries
          }
        } ),
        tap( () => this.saveToLocalStorage() )
      );
  }

}

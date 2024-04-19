import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit{

  public _countries: Country[] = [];
  public isLoading: boolean = false;
  public initValue: string = "";

  constructor ( private countriesService : CountriesService ) {}


  searchByCountry (term: string): void {

    this.isLoading = true;

    this.countriesService.searchCountry( term ).subscribe( countries => {
      this._countries = countries;
      this.isLoading = false;
    } );
  }

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCountry.countries;
    this.initValue = this.countriesService.cacheStore.byCountry.term;
  }
 }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {

  public _countries: Country[] = [];

  constructor ( private countriesService : CountriesService ) {}

  searchByCapital (term: string): void {
    this.countriesService.searchCapital( term ).subscribe( countries => {
      this._countries = countries;
    } );
  }

 }

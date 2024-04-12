import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {

  public _countries: Country[] = [];

  constructor ( private countriesService : CountriesService ) {}

  searchByCountry (term: string): void {
    this.countriesService.searchCountry( term ).subscribe( countries => {
      this._countries = countries;
    } );
  }
 }

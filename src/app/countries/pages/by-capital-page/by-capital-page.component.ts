import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {

  public _countries: Country[] = [];
  public isLoading: boolean = false;
  public initValue: string = "";

  constructor ( private countriesService : CountriesService ) {}

  searchByCapital (term: string): void {

    this.isLoading = true;

    this.countriesService.searchCapital( term ).subscribe( countries => {
      this._countries = countries;
      this.isLoading = false;
    } );
  }

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCapital.countries;
    this.initValue = this.countriesService.cacheStore.byCapital.term;
  }

 }

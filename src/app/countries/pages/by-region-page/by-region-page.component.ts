import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent {

  public _countries: Country[] = [];

  constructor ( private countriesService : CountriesService ) {}

  searchByRegion (region: string): void {
    this.countriesService.searchRegion( region ).subscribe( countries => {
      this._countries = countries;
    } );
  }
 }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {

  public _country?: Country;
  public isLoading: boolean = false;

  constructor(
     private activatedRoute: ActivatedRoute,
     private countriesService: CountriesService,
     private router: Router
    ) {

  }

  ngOnInit(): void {

    this.isLoading = true;

    this.activatedRoute.params.
      pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode( id ) )
      ).
      subscribe( country => {
        if(!country){ return this.router.navigateByUrl(''); }

        this.isLoading = false;
        return this._country = country;
      } );
  }


 }

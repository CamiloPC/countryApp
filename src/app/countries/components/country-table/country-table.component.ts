import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

 }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent { }

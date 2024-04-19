import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent { }

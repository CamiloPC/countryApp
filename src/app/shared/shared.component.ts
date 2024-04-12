import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent { }

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchboxComponent {

  @Input()
  public placeholder: string = "";

  @Output()
  public onValue = new EventEmitter <string> ();

  emitValue ( value: string ): void {
    this.onValue.emit( value );
  }
 }

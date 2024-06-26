import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchboxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = "";

  @Input()
  public initialValue: string = "";

  @Output()
  public onValue = new EventEmitter <string> ();

  @Output()
  public onDebounce = new EventEmitter <string> ();


  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(1000) )
    .subscribe( value => {
      this.onDebounce.emit( value )
    } );
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue ( value: string ): void {
    this.onValue.emit( value );
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next( searchTerm );
  }

 }

import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from "@angular/core";
import {ChangeDetectorRef, AfterContentChecked} from '@angular/core';

@Component({
  selector: "app-decide-move",
  templateUrl: "./decide-move.component.html",
  styleUrls: ["./decide-move.component.css"]
})
export class DecideMoveComponent implements OnInit, AfterContentChecked {
  @Input() possibleScore: any;
  @Input() score: any;
  @Output() newScore = new EventEmitter();

  constructor(private cdref: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }


  ngOnInit() {

  }

  handleClick(event){
    this.score[event] = this.possibleScore[event];
    this.newScore.emit(this.score);
  }
}

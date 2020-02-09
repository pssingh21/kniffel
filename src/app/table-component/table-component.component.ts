import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit, OnChanges {

  displayedColumns: string[] = [
    'game',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'totalScore',
    'bonus',
    'upperSectionTotal',
    'threeOfAKind',
    'fourOfAKind',
    'fullHouse',
    'smStraight',
    'lgStraight',
    'yahtzee',
    'yahtzeeBonus',
    'chance',
    'lowerSectionTotal',
    'combinedTotal'
  ];

  @Input() tableValues: any[];


  ngOnChanges(changes: SimpleChanges) {
  }

  constructor() { }

  ngOnInit() {
  }

}

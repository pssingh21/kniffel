import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-dice",
  templateUrl: "./dice.component.html",
  styleUrls: ["./dice.component.css"]
})
export class DiceComponent implements OnInit, AfterViewInit {
  @ViewChild("dice") dice: ElementRef;
  @Input() diceNum: number;
  @Input() shouldDiceRoll: boolean;
  canSelect: boolean = false;
  roll: number;

  @Output() diceResult = new EventEmitter<{
    diceNum: number;
    result: number;
    isSelected: boolean;
  }>();

  constructor() {}

  selectDice() {
    if (this.canSelect) {
      this.dice.nativeElement.classList.add("diceSelected");
      this.diceResult.emit({
        diceNum: this.diceNum,
        result: this.roll,
        isSelected: true
      });
      this.canSelect = false;
    }
  }

  unselectDice() {
    this.dice.nativeElement.classList.remove("diceSelected");
    this.diceResult.emit({
      diceNum: this.diceNum,
      result: this.roll,
      isSelected: false
    });
  }

  ngAfterViewInit() {
    let delay = Math.random() * 1000;
    setTimeout(() => {
      // this.rollAll();
    }, delay);
  }

  ngOnInit() {}

  rollDice() {
    if (!this.shouldDiceRoll) {
      return;
    }

    this.roll = Math.floor(Math.random() * 6 + 1);
    this.dice.nativeElement.classList = [];
    this.dice.nativeElement.classList.add("dice");
    setTimeout(() => {
      this.dice.nativeElement.classList.add("roll-" + this.roll);
      this.diceResult.emit({
        diceNum: this.diceNum,
        result: this.roll,
        isSelected: false
      });
      this.canSelect = true;
    }, 1);
  }

  rollAll() {
    this.shouldDiceRoll = true;
    this.canSelect = true;
    this.rollDice();
  }
}

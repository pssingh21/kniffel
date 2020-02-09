import { Component, ViewChild, ViewChildren } from "@angular/core";
import { DiceComponent } from "./dice/dice.component";
import { QueryList } from "@angular/core/src/render3";
import { element } from "protractor";
import { NumberSymbol, JsonPipe } from "@angular/common";
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChildren("child") diceChildren: any;

  title = "Kniffel";

  attempts: number;
  computing: boolean = false;
  possibleArrayDefined: boolean = false;
  round: number = 1;
  allScores: any[] = [];

  dice: {
    num: number;
    result: number;
    rollDice: boolean;
  }[];

  score: {
    one: number | null;
    two: number | null;
    three: number | null;
    four: number | null;
    five: number | null;
    six: number | null;
    totalScore: number | null;
    bonus: number;
    upperSectionTotal: number | null;
    threeOfAKind: number | null;
    fourOfAKind: number | null;
    fullHouse: 25 | null;
    smStraight: 30 | null;
    lgStraight: 40 | null;
    yahtzee: 50 | null;
    yahtzeeBonus: number;
    chance: number;
    lowerSectionTotal: number;
    combinedTotal: number;
    game: number;
  };

  possibleScore;

  constructor(private toastr: ToastrService) {
    this.restartGame();
  }

  handleResult(event) {
    this.dice[event.diceNum - 1].result = event.result;
    this.dice[event.diceNum - 1].rollDice = !event.isSelected;
    this.dice.filter(elem => {
      return elem.rollDice === true;
    }).length === 0 && this.attempts != 3
      ? this.compute()
      : null;
  }

  rollRemaining() {
    if (this.attempts > 4) {
      return;
    }
    this.attempts++;
    this.diceChildren.toArray().forEach(element => {
      if (element.shouldDiceRoll) {
        element.rollDice();
      }
    });
    if (this.attempts === 3) {
      this.diceChildren.toArray().forEach(element => {
        if (element.canSelect && element.shouldDiceRoll) {
          element.selectDice();
        }
      });
      this.compute();
    }
  }

  // reloadAll() {
  //   this.diceChildren.toArray().forEach(element => {
  //     element.rollAll();
  //   });
  // }

  compute() {
    this.computing = true;

    let numbers = this.dice.map(item => {
      return item.result;
    });

    this.populatePossibleArray(numbers);
    //------------------------------------------------------------------//

    // setTimeout(() => {
    //   this.attempts = 0;
    //   console.log(this.diceChildren.toArray());
    //   this.diceChildren.toArray().forEach(element => {
    //     element.canSelect = false;
    //     element.shouldDiceRoll = true;
    //     element.unselectDice();
    //     this.computing = false;
    //     this.possibleArrayDefined = false;
    //   });
    // }, 5000);

    // this.computing = false;
  }

  initializeScore() {
    this.score = {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      totalScore: null,
      bonus: 0,
      upperSectionTotal: 0,
      threeOfAKind: null,
      fourOfAKind: null,
      fullHouse: null,
      smStraight: null,
      lgStraight: null,
      yahtzee: null,
      yahtzeeBonus: 0,
      chance: null,
      lowerSectionTotal: 0,
      combinedTotal: 0,
      game: 0
    };
    this.score.game = this.allScores.length + 1;
    this.allScores.push(this.score);
    this.allScores = this.allScores.slice();
  }

  initializePossibleScore(){
    this.possibleScore = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      totalScore: 0,
      bonus: 0,
      upperSectionTotal: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smStraight: 0,
      lgStraight: 0,
      yahtzee: 0,
      yahtzeeBonus: 0,
      chance: 0,
      lowerSectionTotal: 0,
      combinedTotal: 0
    };
  }

  populatePossibleArray(numbers: number[]) {
    // numbers = [1,1,1,1,1];
    numbers.sort();
    console.log('dice roll', numbers);


    //Yatzee condition
    if (new Set(numbers).size == 1) {
      if(this.score.yahtzee === 50){
        if(this.score.yahtzeeBonus){
          this.possibleScore.yahtzeeBonus = this.score.yahtzeeBonus + 100;
        }else{
          this.possibleScore.yahtzeeBonus = 100;
        }
      }else{
        this.possibleScore.yahtzee = 50;
        this.possibleScore.yahtzeeBonus = null;
      }
    }

    //long straight condition
    let longStraight = JSON.stringify(numbers) === JSON.stringify([1,2,3,4,5]) || JSON.stringify(numbers) === JSON.stringify([2,3,4,5,6]);
    if(longStraight){
      if(!this.score.lgStraight){
        this.possibleScore.lgStraight = 40;
      }
    }

    //short straight condition
    let s1 = new Set(numbers);
    if(longStraight || _.isEqual(s1, new Set([1,2,3,4])) || _.isEqual(s1, new Set([2,3,4,5])) || _.isEqual(s1, new Set([3,4,5,6])) || _.isEqual(s1, new Set([1,2,3,4,6])) || _.isEqual(s1, new Set([1,3,4,5,6]))){
      if(!this.score.smStraight){
        this.possibleScore.smStraight = 30;
      }
    }

    //fullhouse condition
    if((numbers[0] == numbers[1] && numbers[1] == numbers[2] && numbers[3] == numbers[4]) || (numbers[0] == numbers[1] && numbers[2] == numbers[3] && numbers[3] == numbers[4]) ){
      if(!this.score.fullHouse){
        this.possibleScore.fullHouse = 25;
      }
    }

    //four of a kind condition
    if((numbers[0] == numbers[1] && numbers[1] == numbers[2] && numbers[2] == numbers[3]) || (numbers[1] == numbers[2] && numbers[2] == numbers[3] && numbers[3] == numbers[4])){
      if(!this.score.fourOfAKind){
        this.possibleScore.fourOfAKind = numbers.reduce((a,b) => a+b, 0);
      }
    }

    //three of a kind condition
    if((numbers[0] == numbers[1] && numbers[1] == numbers[2]) || (numbers[1] == numbers[2] && numbers[2] == numbers[3]) || (numbers[2] == numbers[3] && numbers[3] == numbers[4])){
      if(!this.score.threeOfAKind){
        this.possibleScore.threeOfAKind = numbers.reduce((a,b) => a+b, 0);
      }
    }

    //count and add six
    if(!this.score.six){
      this.possibleScore.six = numbers.filter(x => x == 6).reduce((a,b) => a+b, 0);
    }

    //count and add five
    if(!this.score.five){
      this.possibleScore.five = numbers.filter(x => x == 5).reduce((a,b) => a+b, 0);
    }

    //count and add six
    if(!this.score.four){
      this.possibleScore.four = numbers.filter(x => x == 4).reduce((a,b) => a+b, 0);
    }

    //count and add six
    if(!this.score.three){
      this.possibleScore.three = numbers.filter(x => x == 3).reduce((a,b) => a+b, 0);
    }

    //count and add six
    if(!this.score.two){
      this.possibleScore.two = numbers.filter(x => x == 2).reduce((a,b) => a+b, 0);
    }

    //count and add six
    if(!this.score.one){
      this.possibleScore.one = numbers.filter(x => x == 1).reduce((a,b) => a+b, 0);
    }

    //chance condition
    if(!this.score.chance){
      this.possibleScore.chance = numbers.reduce((a,b) => a+b, 0);
    }

    this.possibleArrayDefined = true;

  }

  handleNewScore(event){
    this.score = event;

    this.calculateTotalAndBonus();

    this.round++;

    //gameover condition
    if(this.round > 13){
      console.log('restarting');
      this.gameover();
      this.restartGame();
      return;
    }

    this.initializePossibleScore();
    this.attempts = 0;
    this.diceChildren.toArray().forEach(element => {
      element.canSelect = false;
      element.shouldDiceRoll = true;
      element.unselectDice();
      this.computing = false;
      this.possibleArrayDefined = false;
    });
  }

  calculateTotalAndBonus() {

    //total of upper section
    this.score.totalScore = this.score.one +
    this.score.two +
    this.score.three +
    this.score.four +
    this.score.five +
    this.score.six;

    //bonus condition
    if (this.score.totalScore > 63) {
      this.score.bonus = 35;
    }

    //grand sum of upper section with bonus
    this.score.upperSectionTotal = this.score.totalScore + this.score.bonus;

    //lower section total
    this.score.lowerSectionTotal = this.score.threeOfAKind +
    this.score.fourOfAKind +
    this.score.fullHouse +
    this.score.smStraight +
    this.score.lgStraight +
    this.score.yahtzee +
    this.score.chance +
    this.score.yahtzeeBonus;

    //grand total
    this.score.combinedTotal = this.score.upperSectionTotal + this.score.lowerSectionTotal;

    console.log('new score ', this.score);
    this.updateTable();

  }

  restartGame() {
    this.dice = [
      {
        num: 1,
        result: 1,
        rollDice: true
      },
      {
        num: 2,
        result: 1,
        rollDice: true
      },
      {
        num: 3,
        result: 1,
        rollDice: true
      },
      {
        num: 4,
        result: 1,
        rollDice: true
      },
      {
        num: 5,
        result: 1,
        rollDice: true
      }
    ];
    this.attempts = 0;
    this.initializeScore();
    this.initializePossibleScore();
    this.round = 1;
    this.computing = false;
    this.possibleArrayDefined = false;
  }

  updateTable() {
    this.allScores[this.allScores.length - 1] = this.score;
    console.log(this.allScores);
  }

  gameover() {
    this.toastr.success(this.score.combinedTotal.toString(), 'Score');
    this.toastr.warning('Game Over');
    this.toastr.info('Starting new Game');
  }
}

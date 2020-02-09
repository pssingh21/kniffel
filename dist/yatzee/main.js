(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attempt{\n  color: #fff;\n}\n\n.diceRoll{\n  width: 150px;\n  display: flex;\n  justify-content: center;\n  margin: 20px;\n}\n\n.btnWrapper{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0dGVtcHR7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGljZVJvbGx7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmJ0bldyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let dataEntry of dice\" >\n  <app-dice [diceNum]=\"dataEntry.num\" [shouldDiceRoll]=\"dataEntry.rollDice\" (diceResult)=\"handleResult($event)\" #child></app-dice>\n</span>\n<div class=\"btnWrapper\">\n  <!-- <h1 class=\"attempt\" [hidden]=\"attempts==0\" >Attempt: {{attempts}} </h1> -->\n  <button mat-raised-button ripple=\"true\" (click)=\"rollRemaining()\" *ngIf=\"!possibleArrayDefined\" [matBadge]=\"attempts\" matBadgeDescription=\"adasdasd\" matBadgeSize=\"large\" matBadgePosition=\"above after\" matBadgeColor=\"primary\" [matBadgeHidden]=\"attempts==0\" [disabled]=\"computing\" class=\"diceRoll\">Dice Roll</button>\n  <app-decide-move [possibleScore]=\"possibleScore\" [score]=\"score\" *ngIf=\"possibleArrayDefined\" (newScore)=\"handleNewScore($event)\" ></app-decide-move>\n</div>\n\n<app-table-component [(tableValues)]=\"allScores\" ></app-table-component>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(toastr) {
        this.toastr = toastr;
        this.title = "Kniffel";
        this.computing = false;
        this.possibleArrayDefined = false;
        this.round = 1;
        this.allScores = [];
        this.restartGame();
    }
    AppComponent.prototype.handleResult = function (event) {
        this.dice[event.diceNum - 1].result = event.result;
        this.dice[event.diceNum - 1].rollDice = !event.isSelected;
        this.dice.filter(function (elem) {
            return elem.rollDice === true;
        }).length === 0 && this.attempts != 3
            ? this.compute()
            : null;
    };
    AppComponent.prototype.rollRemaining = function () {
        if (this.attempts > 4) {
            return;
        }
        this.attempts++;
        this.diceChildren.toArray().forEach(function (element) {
            if (element.shouldDiceRoll) {
                element.rollDice();
            }
        });
        if (this.attempts === 3) {
            this.diceChildren.toArray().forEach(function (element) {
                if (element.canSelect && element.shouldDiceRoll) {
                    element.selectDice();
                }
            });
            this.compute();
        }
    };
    // reloadAll() {
    //   this.diceChildren.toArray().forEach(element => {
    //     element.rollAll();
    //   });
    // }
    AppComponent.prototype.compute = function () {
        this.computing = true;
        var numbers = this.dice.map(function (item) {
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
    };
    AppComponent.prototype.initializeScore = function () {
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
    };
    AppComponent.prototype.initializePossibleScore = function () {
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
    };
    AppComponent.prototype.populatePossibleArray = function (numbers) {
        // numbers = [1,1,1,1,1];
        numbers.sort();
        console.log('dice roll', numbers);
        //Yatzee condition
        if (new Set(numbers).size == 1) {
            if (this.score.yahtzee === 50) {
                if (this.score.yahtzeeBonus) {
                    this.possibleScore.yahtzeeBonus = this.score.yahtzeeBonus + 100;
                }
                else {
                    this.possibleScore.yahtzeeBonus = 100;
                }
            }
            else {
                this.possibleScore.yahtzee = 50;
                this.possibleScore.yahtzeeBonus = null;
            }
        }
        //long straight condition
        var longStraight = JSON.stringify(numbers) === JSON.stringify([1, 2, 3, 4, 5]) || JSON.stringify(numbers) === JSON.stringify([2, 3, 4, 5, 6]);
        if (longStraight) {
            if (!this.score.lgStraight) {
                this.possibleScore.lgStraight = 40;
            }
        }
        //short straight condition
        var s1 = new Set(numbers);
        if (longStraight || lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](s1, new Set([1, 2, 3, 4])) || lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](s1, new Set([2, 3, 4, 5])) || lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](s1, new Set([3, 4, 5, 6])) || lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](s1, new Set([1, 2, 3, 4, 6])) || lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](s1, new Set([1, 3, 4, 5, 6]))) {
            if (!this.score.smStraight) {
                this.possibleScore.smStraight = 30;
            }
        }
        //fullhouse condition
        if ((numbers[0] == numbers[1] && numbers[1] == numbers[2] && numbers[3] == numbers[4]) || (numbers[0] == numbers[1] && numbers[2] == numbers[3] && numbers[3] == numbers[4])) {
            if (!this.score.fullHouse) {
                this.possibleScore.fullHouse = 25;
            }
        }
        //four of a kind condition
        if ((numbers[0] == numbers[1] && numbers[1] == numbers[2] && numbers[2] == numbers[3]) || (numbers[1] == numbers[2] && numbers[2] == numbers[3] && numbers[3] == numbers[4])) {
            if (!this.score.fourOfAKind) {
                this.possibleScore.fourOfAKind = numbers.reduce(function (a, b) { return a + b; }, 0);
            }
        }
        //three of a kind condition
        if ((numbers[0] == numbers[1] && numbers[1] == numbers[2]) || (numbers[1] == numbers[2] && numbers[2] == numbers[3]) || (numbers[2] == numbers[3] && numbers[3] == numbers[4])) {
            if (!this.score.threeOfAKind) {
                this.possibleScore.threeOfAKind = numbers.reduce(function (a, b) { return a + b; }, 0);
            }
        }
        //count and add six
        if (!this.score.six) {
            this.possibleScore.six = numbers.filter(function (x) { return x == 6; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //count and add five
        if (!this.score.five) {
            this.possibleScore.five = numbers.filter(function (x) { return x == 5; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //count and add six
        if (!this.score.four) {
            this.possibleScore.four = numbers.filter(function (x) { return x == 4; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //count and add six
        if (!this.score.three) {
            this.possibleScore.three = numbers.filter(function (x) { return x == 3; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //count and add six
        if (!this.score.two) {
            this.possibleScore.two = numbers.filter(function (x) { return x == 2; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //count and add six
        if (!this.score.one) {
            this.possibleScore.one = numbers.filter(function (x) { return x == 1; }).reduce(function (a, b) { return a + b; }, 0);
        }
        //chance condition
        if (!this.score.chance) {
            this.possibleScore.chance = numbers.reduce(function (a, b) { return a + b; }, 0);
        }
        this.possibleArrayDefined = true;
    };
    AppComponent.prototype.handleNewScore = function (event) {
        var _this = this;
        this.score = event;
        this.calculateTotalAndBonus();
        this.round++;
        //gameover condition
        if (this.round > 13) {
            console.log('restarting');
            this.gameover();
            this.restartGame();
            return;
        }
        this.initializePossibleScore();
        this.attempts = 0;
        this.diceChildren.toArray().forEach(function (element) {
            element.canSelect = false;
            element.shouldDiceRoll = true;
            element.unselectDice();
            _this.computing = false;
            _this.possibleArrayDefined = false;
        });
    };
    AppComponent.prototype.calculateTotalAndBonus = function () {
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
    };
    AppComponent.prototype.restartGame = function () {
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
    };
    AppComponent.prototype.updateTable = function () {
        this.allScores[this.allScores.length - 1] = this.score;
        console.log(this.allScores);
    };
    AppComponent.prototype.gameover = function () {
        this.toastr.success(this.score.combinedTotal.toString(), 'Score');
        this.toastr.warning('Game Over');
        this.toastr.info('Starting new Game');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("child"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "diceChildren", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dice_dice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dice/dice.component */ "./src/app/dice/dice.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _decide_move_decide_move_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./decide-move/decide-move.component */ "./src/app/decide-move/decide-move.component.ts");
/* harmony import */ var _table_component_table_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-component/table-component.component */ "./src/app/table-component/table-component.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dice_dice_component__WEBPACK_IMPORTED_MODULE_5__["DiceComponent"],
                _decide_move_decide_move_component__WEBPACK_IMPORTED_MODULE_9__["DecideMoveComponent"],
                _table_component_table_component_component__WEBPACK_IMPORTED_MODULE_10__["TableComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/decide-move/decide-move.component.css":
/*!*******************************************************!*\
  !*** ./src/app/decide-move/decide-move.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".decisionButton{\n  margin: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjaWRlLW1vdmUvZGVjaWRlLW1vdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RlY2lkZS1tb3ZlL2RlY2lkZS1tb3ZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVjaXNpb25CdXR0b257XG4gIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/decide-move/decide-move.component.html":
/*!********************************************************!*\
  !*** ./src/app/decide-move/decide-move.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"decisionBtnGroup\">\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('one')\" [matBadge]=\"possibleScore.one\" [matBadgeHidden]=\"score.one\" [disabled]=\"score.one\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">One</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('two')\" [matBadge]=\"possibleScore.two\" [matBadgeHidden]=\"score.two\" [disabled]=\"score.two\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Two</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('three')\" [matBadge]=\"possibleScore.three\" [matBadgeHidden]=\"score.three\" [disabled]=\"score.three\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Three</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('four')\" [matBadge]=\"possibleScore.four\" [matBadgeHidden]=\"score.four\" [disabled]=\"score.four\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Four</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('five')\" [matBadge]=\"possibleScore.five\" [matBadgeHidden]=\"score.five\" [disabled]=\"score.five\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Five</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('six')\" [matBadge]=\"possibleScore.six\" [matBadgeHidden]=\"score.six\" [disabled]=\"score.six\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Six</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('threeOfAKind')\" [matBadge]=\"possibleScore.threeOfAKind\" [matBadgeHidden]=\"score.threeOfAKind\" [disabled]=\"score.threeOfAKind\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Three Of A Kind</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('fourOfAKind')\" [matBadge]=\"possibleScore.fourOfAKind\" [matBadgeHidden]=\"score.fourOfAKind\" [disabled]=\"score.fourOfAKind\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Four Of A Kind</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('fullHouse')\" [matBadge]=\"possibleScore.fullHouse\" [matBadgeHidden]=\"score.fullHouse\" [disabled]=\"score.fullHouse\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Full House</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('smStraight')\" [matBadge]=\"possibleScore.smStraight\" [matBadgeHidden]=\"score.smStraight\" [disabled]=\"score.smStraight\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Small Straight</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('lgStraight')\" [matBadge]=\"possibleScore.lgStraight\" [matBadgeHidden]=\"score.lgStraight\" [disabled]=\"score.lgStraight\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">LargeStraight</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('yahtzee')\" [matBadge]=\"possibleScore.yahtzee\" [matBadgeHidden]=\"score.yahtzee\" [disabled]=\"score.yahtzee\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Yahtzee</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('yahtzeeBonus')\" [matBadge]=\"possibleScore.yahtzeeBonus\" [matBadgeHidden]=\"!score.yahtzee\" [disabled]=\"!score.yahtzee\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Yahtzee Bonus</button>\n  <button class=\"decisionButton\" mat-raised-button ripple=\"true\" (click)=\"handleClick('chance')\" [matBadge]=\"possibleScore.chance\" [matBadgeHidden]=\"score.chance\" [disabled]=\"score.chance\" matBadgeSize=\"medium\" matBadgePosition=\"above after\" matBadgeColor=\"primary\">Chance</button>\n</div>\n"

/***/ }),

/***/ "./src/app/decide-move/decide-move.component.ts":
/*!******************************************************!*\
  !*** ./src/app/decide-move/decide-move.component.ts ***!
  \******************************************************/
/*! exports provided: DecideMoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecideMoveComponent", function() { return DecideMoveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DecideMoveComponent = /** @class */ (function () {
    function DecideMoveComponent(cdref) {
        this.cdref = cdref;
        this.newScore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DecideMoveComponent.prototype.ngAfterContentChecked = function () {
        this.cdref.detectChanges();
    };
    DecideMoveComponent.prototype.ngOnInit = function () {
    };
    DecideMoveComponent.prototype.handleClick = function (event) {
        this.score[event] = this.possibleScore[event];
        this.newScore.emit(this.score);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DecideMoveComponent.prototype, "possibleScore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DecideMoveComponent.prototype, "score", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DecideMoveComponent.prototype, "newScore", void 0);
    DecideMoveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-decide-move",
            template: __webpack_require__(/*! ./decide-move.component.html */ "./src/app/decide-move/decide-move.component.html"),
            styles: [__webpack_require__(/*! ./decide-move.component.css */ "./src/app/decide-move/decide-move.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DecideMoveComponent);
    return DecideMoveComponent;
}());



/***/ }),

/***/ "./src/app/dice/dice.component.css":
/*!*****************************************!*\
  !*** ./src/app/dice/dice.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  position: relative;\n  height: 100px;\n  /* width: 100px; */\n  width: 5%;\n  margin: 120px !important;\n  display: inline-block;\n  padding: 0 !important;\n  perspective: 1000px;\n  -webkit-perspective: 1000px;\n}\n\n.dice {\n  cursor: pointer;\n  position: absolute;\n  transform-style: preserve-3d;\n  transform: translateZ( -50px) rotateX( 0deg) rotateY( 0deg);\n  -webkit-transform: translateZ( -50px) rotateX( 0deg) rotateY( 0deg);\n}\n\n.dice > div {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  background: #fff;\n  border-radius: 2px;\n}\n\n.dice > div > span { /*die dot styling */\n  position: absolute;\n  background: #3366cc;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.one {\n  transform: rotateY( 0deg) translateZ( 50px);\n  -webkit-transform: rotateY( 0deg) translateZ( 50px);\n}\n\n.two {\n  transform: rotateX( 180deg) translateZ( 50px);\n  -webkit-transform: rotateX( 180deg) translateZ( 50px);\n}\n\n.three {\n  transform: rotateY( 90deg) translateZ( 50px);\n  -webkit-transform: rotateY( 90deg) translateZ( 50px);\n}\n\n.four {\n  transform: rotateY( -90deg) translateZ( 50px);\n  -webkit-transform: rotateY( -90deg) translateZ( 50px);\n}\n\n.five {\n  transform: rotateX( 90deg) translateZ( 50px);\n  -webkit-transform: rotateX( 90deg) translateZ( 50px);\n}\n\n.six {\n  transform: rotateX( -90deg) translateZ( 50px);\n  -webkit-transform: rotateX( -90deg) translateZ( 50px);\n}\n\n.one span, .three span:nth-child(2), .five span:nth-child(5) {\n  top: 50%;\n  left: 50%;\n}\n\n.two span:nth-child(1), .three span:nth-child(1), .four span:nth-child(1), .five span:nth-child(1), .six span:nth-child(1) {\n  top: 25%;\n  left: 25%;\n}\n\n.two span:nth-child(2), .three span:nth-child(3), .four span:nth-child(4), .five span:nth-child(4), .six span:nth-child(6) {\n  top: 75%;\n  left: 75%;\n}\n\n.four span:nth-child(2), .five span:nth-child(2), .six span:nth-child(2) {\n  top: 25%;\n  left: 75%;\n}\n\n.four span:nth-child(3), .five span:nth-child(3), .six span:nth-child(5)  {\n  top: 75%;\n  left: 25%;\n}\n\n.six span:nth-child(3) {\n  top: 50%;\n  left: 25%;\n}\n\n.six span:nth-child(4) {\n  top: 50%;\n  left: 75%;\n}\n\n.dice.roll-1 {\n  animation: roll-one 1s 1 linear forwards;\n  -webkit-animation: roll-one 1s 1 linear forwards;\n}\n\n.dice.roll-2 {\n  animation: roll-two 1s 1 linear forwards;\n  -webkit-animation: roll-two 1s 1 linear forwards;\n}\n\n.dice.roll-3 {\n  animation: roll-three 1s 1 linear forwards;\n  -webkit-animation: roll-three 1s 1 linear forwards;\n}\n\n.dice.roll-4 {\n  animation: roll-four 1s 1 linear forwards;\n  -webkit-animation: roll-four 1s 1 linear forwards;\n}\n\n.dice.roll-5 {\n  animation: roll-five 1s 1 linear forwards;\n  -webkit-animation: roll-five 1s 1 linear forwards;\n}\n\n.dice.roll-6 {\n  animation: roll-six 1s 1 linear forwards;\n  -webkit-animation: roll-six 1s 1 linear forwards;\n}\n\n.diceSelected > div{\n  background: #000;\n}\n\n@keyframes roll-one {\n  0% {\n    transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    transform: translateZ( -50px) rotateX( -180deg) rotateY( -540deg);\n  }\n}\n\n@keyframes roll-two {\n  0% {\n    transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    transform: translateZ( -50px) rotateX( -360deg) rotateY( -540deg);\n  }\n}\n\n@keyframes roll-three {\n  0% {\n    transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    transform: translateZ( -50px) rotateX( -360deg) rotateY( -450deg);\n  }\n}\n\n@keyframes roll-four {\n  0% {\n    transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    transform: translateZ( -50px) rotateX( -360deg) rotateY( -630deg);\n  }\n}\n\n@keyframes roll-five {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -450deg) rotateY( -360deg) rotateZ(0deg);\n  }\n}\n\n@keyframes roll-six {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -450deg) rotateY( 0deg) rotateZ(-180deg);\n  }\n}\n\n@-webkit-keyframes roll-one {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -180deg) rotateY( -540deg);\n  }\n}\n\n@-webkit-keyframes roll-two {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -360deg) rotateY( -540deg);\n  }\n}\n\n@-webkit-keyframes roll-three {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -360deg) rotateY( -450deg);\n  }\n}\n\n@-webkit-keyframes roll-four {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -360deg) rotateY( -630deg);\n  }\n}\n\n@-webkit-keyframes roll-five {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( -10deg) rotateY( -10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -460deg) rotateY( -360deg) rotateZ(-10deg);\n  }\n}\n\n@-webkit-keyframes roll-six {\n  0% {\n    -webkit-transform: translateZ( -50px) rotateX( 0deg) rotateY( -10deg) rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: translateZ( -50px) rotateX( -450deg) rotateY( 0deg) rotateZ(-180deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljZS9kaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyREFBMkQ7RUFDM0QsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHFCQUFxQixtQkFBbUI7RUFDdEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsNkNBQTZDO0VBQzdDLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUdBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwrREFBK0Q7RUFDakU7RUFDQTtJQUNFLGlFQUFpRTtFQUNuRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrREFBK0Q7RUFDakU7RUFDQTtJQUNFLGlFQUFpRTtFQUNuRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrREFBK0Q7RUFDakU7RUFDQTtJQUNFLGlFQUFpRTtFQUNuRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrREFBK0Q7RUFDakU7RUFDQTtJQUNFLGlFQUFpRTtFQUNuRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLHVGQUF1RjtFQUN6RjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLHVGQUF1RjtFQUN6RjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1RUFBdUU7RUFDekU7RUFDQTtJQUNFLHlFQUF5RTtFQUMzRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1RUFBdUU7RUFDekU7RUFDQTtJQUNFLHlFQUF5RTtFQUMzRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1RUFBdUU7RUFDekU7RUFDQTtJQUNFLHlFQUF5RTtFQUMzRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1RUFBdUU7RUFDekU7RUFDQTtJQUNFLHlFQUF5RTtFQUMzRTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxRkFBcUY7RUFDdkY7RUFDQTtJQUNFLHlGQUF5RjtFQUMzRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtRkFBbUY7RUFDckY7RUFDQTtJQUNFLHVGQUF1RjtFQUN6RjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGljZS9kaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cbiAgd2lkdGg6IDUlO1xuICBtYXJnaW46IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5kaWNlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIDBkZWcpIHJvdGF0ZVkoIDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIDBkZWcpIHJvdGF0ZVkoIDBkZWcpO1xufVxuXG4uZGljZSA+IGRpdiB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmRpY2UgPiBkaXYgPiBzcGFuIHsgLypkaWUgZG90IHN0eWxpbmcgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMzM2NmNjO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ub25lIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcpIHRyYW5zbGF0ZVooIDUwcHgpO1xufVxuXG4udHdvIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcpIHRyYW5zbGF0ZVooIDUwcHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbn1cblxuLnRocmVlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWiggNTBweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWiggNTBweCk7XG59XG5cbi5mb3VyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKCAtOTBkZWcpIHRyYW5zbGF0ZVooIDUwcHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSggLTkwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbn1cblxuLmZpdmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDkwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoIDkwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbn1cblxuLnNpeCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCggLTkwZGVnKSB0cmFuc2xhdGVaKCA1MHB4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoIC05MGRlZykgdHJhbnNsYXRlWiggNTBweCk7XG59XG5cbi5vbmUgc3BhbiwgLnRocmVlIHNwYW46bnRoLWNoaWxkKDIpLCAuZml2ZSBzcGFuOm50aC1jaGlsZCg1KSB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi50d28gc3BhbjpudGgtY2hpbGQoMSksIC50aHJlZSBzcGFuOm50aC1jaGlsZCgxKSwgLmZvdXIgc3BhbjpudGgtY2hpbGQoMSksIC5maXZlIHNwYW46bnRoLWNoaWxkKDEpLCAuc2l4IHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLnR3byBzcGFuOm50aC1jaGlsZCgyKSwgLnRocmVlIHNwYW46bnRoLWNoaWxkKDMpLCAuZm91ciBzcGFuOm50aC1jaGlsZCg0KSwgLmZpdmUgc3BhbjpudGgtY2hpbGQoNCksIC5zaXggc3BhbjpudGgtY2hpbGQoNikge1xuICB0b3A6IDc1JTtcbiAgbGVmdDogNzUlO1xufVxuXG4uZm91ciBzcGFuOm50aC1jaGlsZCgyKSwgLmZpdmUgc3BhbjpudGgtY2hpbGQoMiksIC5zaXggc3BhbjpudGgtY2hpbGQoMikge1xuICB0b3A6IDI1JTtcbiAgbGVmdDogNzUlO1xufVxuXG4uZm91ciBzcGFuOm50aC1jaGlsZCgzKSwgLmZpdmUgc3BhbjpudGgtY2hpbGQoMyksIC5zaXggc3BhbjpudGgtY2hpbGQoNSkgIHtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLnNpeCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAyNSU7XG59XG5cbi5zaXggc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNzUlO1xufVxuXG5cbi5kaWNlLnJvbGwtMSB7XG4gIGFuaW1hdGlvbjogcm9sbC1vbmUgMXMgMSBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb2xsLW9uZSAxcyAxIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmRpY2Uucm9sbC0yIHtcbiAgYW5pbWF0aW9uOiByb2xsLXR3byAxcyAxIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvbGwtdHdvIDFzIDEgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZGljZS5yb2xsLTMge1xuICBhbmltYXRpb246IHJvbGwtdGhyZWUgMXMgMSBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb2xsLXRocmVlIDFzIDEgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZGljZS5yb2xsLTQge1xuICBhbmltYXRpb246IHJvbGwtZm91ciAxcyAxIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvbGwtZm91ciAxcyAxIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmRpY2Uucm9sbC01IHtcbiAgYW5pbWF0aW9uOiByb2xsLWZpdmUgMXMgMSBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb2xsLWZpdmUgMXMgMSBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5kaWNlLnJvbGwtNiB7XG4gIGFuaW1hdGlvbjogcm9sbC1zaXggMXMgMSBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb2xsLXNpeCAxcyAxIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmRpY2VTZWxlY3RlZCA+IGRpdntcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuQGtleWZyYW1lcyByb2xsLW9uZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTE4MGRlZykgcm90YXRlWSggLTU0MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb2xsLXR3byB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTM2MGRlZykgcm90YXRlWSggLTU0MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb2xsLXRocmVlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIC0xMGRlZykgcm90YXRlWSggLTEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMzYwZGVnKSByb3RhdGVZKCAtNDUwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvbGwtZm91ciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTM2MGRlZykgcm90YXRlWSggLTYzMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb2xsLWZpdmUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZykgcm90YXRlWigwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIC00NTBkZWcpIHJvdGF0ZVkoIC0zNjBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb2xsLXNpeCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIC0xMGRlZykgcm90YXRlWSggLTEwZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTQ1MGRlZykgcm90YXRlWSggMGRlZykgcm90YXRlWigtMTgwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbC1vbmUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTgwZGVnKSByb3RhdGVZKCAtNTQwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbC10d28ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMzYwZGVnKSByb3RhdGVZKCAtNTQwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbC10aHJlZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIC0xMGRlZykgcm90YXRlWSggLTEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWiggLTUwcHgpIHJvdGF0ZVgoIC0zNjBkZWcpIHJvdGF0ZVkoIC00NTBkZWcpO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb2xsLWZvdXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMTBkZWcpIHJvdGF0ZVkoIC0xMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtMzYwZGVnKSByb3RhdGVZKCAtNjMwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbC1maXZlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTEwZGVnKSByb3RhdGVZKCAtMTBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIC01MHB4KSByb3RhdGVYKCAtNDYwZGVnKSByb3RhdGVZKCAtMzYwZGVnKSByb3RhdGVaKC0xMGRlZyk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGwtc2l4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggMGRlZykgcm90YXRlWSggLTEwZGVnKSByb3RhdGVaKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAtNTBweCkgcm90YXRlWCggLTQ1MGRlZykgcm90YXRlWSggMGRlZykgcm90YXRlWigtMTgwZGVnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/dice/dice.component.html":
/*!******************************************!*\
  !*** ./src/app/dice/dice.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"dice\" (click)=\"selectDice()\" #dice matTooltip=\"Select Dice\" [matTooltipDisabled]=\"!canSelect\" >\n    <div class=\"one\">\n      <span></span>\n    </div>\n    <div class=\"two\">\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"three\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"four\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"five\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"six\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dice/dice.component.ts":
/*!****************************************!*\
  !*** ./src/app/dice/dice.component.ts ***!
  \****************************************/
/*! exports provided: DiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceComponent", function() { return DiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiceComponent = /** @class */ (function () {
    function DiceComponent() {
        this.canSelect = false;
        this.diceResult = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DiceComponent.prototype.selectDice = function () {
        if (this.canSelect) {
            this.dice.nativeElement.classList.add("diceSelected");
            this.diceResult.emit({
                diceNum: this.diceNum,
                result: this.roll,
                isSelected: true
            });
            this.canSelect = false;
        }
    };
    DiceComponent.prototype.unselectDice = function () {
        this.dice.nativeElement.classList.remove("diceSelected");
        this.diceResult.emit({
            diceNum: this.diceNum,
            result: this.roll,
            isSelected: false
        });
    };
    DiceComponent.prototype.ngAfterViewInit = function () {
        var delay = Math.random() * 1000;
        setTimeout(function () {
            // this.rollAll();
        }, delay);
    };
    DiceComponent.prototype.ngOnInit = function () { };
    DiceComponent.prototype.rollDice = function () {
        var _this = this;
        if (!this.shouldDiceRoll) {
            return;
        }
        this.roll = Math.floor(Math.random() * 6 + 1);
        this.dice.nativeElement.classList = [];
        this.dice.nativeElement.classList.add("dice");
        setTimeout(function () {
            _this.dice.nativeElement.classList.add("roll-" + _this.roll);
            _this.diceResult.emit({
                diceNum: _this.diceNum,
                result: _this.roll,
                isSelected: false
            });
            _this.canSelect = true;
        }, 1);
    };
    DiceComponent.prototype.rollAll = function () {
        this.shouldDiceRoll = true;
        this.canSelect = true;
        this.rollDice();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dice"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiceComponent.prototype, "dice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DiceComponent.prototype, "diceNum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DiceComponent.prototype, "shouldDiceRoll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiceComponent.prototype, "diceResult", void 0);
    DiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dice",
            template: __webpack_require__(/*! ./dice.component.html */ "./src/app/dice/dice.component.html"),
            styles: [__webpack_require__(/*! ./dice.component.css */ "./src/app/dice/dice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiceComponent);
    return DiceComponent;
}());



/***/ }),

/***/ "./src/app/table-component/table-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/table-component/table-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWNvbXBvbmVudC90YWJsZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/table-component/table-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/table-component/table-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"tableValues\" class=\"mat-elevation-z8\" style=\"width: 100%;\">\n\n  <ng-container matColumnDef=\"game\" >\n    <th mat-header-cell *matHeaderCellDef> Game </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.game}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"one\" >\n    <th mat-header-cell *matHeaderCellDef> One </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.one}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"two\" >\n    <th mat-header-cell *matHeaderCellDef> Two </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.two}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"three\" >\n    <th mat-header-cell *matHeaderCellDef> Three </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.three}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"four\" >\n    <th mat-header-cell *matHeaderCellDef> Four </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.four}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"five\" >\n    <th mat-header-cell *matHeaderCellDef> Five </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.five}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"six\" >\n    <th mat-header-cell *matHeaderCellDef> Six </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.six}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"totalScore\" >\n    <th mat-header-cell *matHeaderCellDef> Total Score </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.totalScore}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"bonus\" >\n    <th mat-header-cell *matHeaderCellDef> Bonus </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.bonus}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"upperSectionTotal\" >\n    <th mat-header-cell *matHeaderCellDef> Total </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.upperSectionTotal}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"threeOfAKind\" >\n    <th mat-header-cell *matHeaderCellDef> Three of a Kind </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.threeOfAKind}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"fourOfAKind\" >\n    <th mat-header-cell *matHeaderCellDef> Four of a Kind </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.fourOfAKind}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"fullHouse\" >\n    <th mat-header-cell *matHeaderCellDef> Full House </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.fullHouse}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"smStraight\" >\n    <th mat-header-cell *matHeaderCellDef> Small Straight </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.smStraight}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lgStraight\" >\n    <th mat-header-cell *matHeaderCellDef> Long Straight </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.lgStraight}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"yahtzee\" >\n    <th mat-header-cell *matHeaderCellDef> Yahtzee </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.yahtzee}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"yahtzeeBonus\" >\n    <th mat-header-cell *matHeaderCellDef> Yahtzee Bonus </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.yahtzeeBonus}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"chance\" >\n    <th mat-header-cell *matHeaderCellDef> Chance </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.chance}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lowerSectionTotal\" >\n    <th mat-header-cell *matHeaderCellDef> Lower Section Total </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.lowerSectionTotal}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"combinedTotal\" >\n    <th mat-header-cell *matHeaderCellDef> Combined Total </th>\n    <td mat-cell *matCellDef=\"let score\"> {{score.combinedTotal}} </td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n\n<!-- <mat-table #table [dataSource]=\"tableValues\">\n  <ng-container [matColumnDef]=\"col\" *ngFor=\"let col of displayedColumns\">\n  <mat-header-cell *matHeaderCellDef> {{ col }} </mat-header-cell>\n  <mat-cell *matCellDef=\"let element\"> {{ element[col] }} </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table> -->\n"

/***/ }),

/***/ "./src/app/table-component/table-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/table-component/table-component.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponentComponent", function() { return TableComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponentComponent = /** @class */ (function () {
    function TableComponentComponent() {
        this.displayedColumns = [
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
    }
    TableComponentComponent.prototype.ngOnChanges = function (changes) {
    };
    TableComponentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TableComponentComponent.prototype, "tableValues", void 0);
    TableComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-component',
            template: __webpack_require__(/*! ./table-component.component.html */ "./src/app/table-component/table-component.component.html"),
            styles: [__webpack_require__(/*! ./table-component.component.css */ "./src/app/table-component/table-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponentComponent);
    return TableComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ps/MyData/sites/yatzee/yatzee/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
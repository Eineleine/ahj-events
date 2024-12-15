/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/Goblin.js

class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.className = "goblin";
    this.element.src = goblin_namespaceObject;
  }
  moveGoblin(cells) {
    let currentCell = null;
    const index = Math.floor(Math.random() * cells.length);
    const newCell = cells[index];
    if (newCell !== currentCell) {
      currentCell = newCell;
      currentCell.appendChild(this.element);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/click.js

class Game {
  constructor() {
    this.scoreHitsEl = document.querySelector(".hits");
    this.scoreFalsesEl = document.querySelector(".falses");
    this.cells = document.querySelectorAll(".cell");
    this.enemy = new Goblin();
    this.falses = 0;
    this.hits = 0;
    this.interval = null;
    this.click = false;
    this.startGame();
  }
  startGame() {
    this.cells.forEach(cell => {
      cell.addEventListener("click", () => {
        if (cell.contains(this.enemy.element)) {
          this.addPositiveScore();
        } else {
          this.addNegativeScore();
        }
      });
    });
    this.checkMaxScore();
  }
  checkMaxScore() {
    clearInterval(this.interval);
    const moveGoblinMethod = this.enemy.moveGoblin.bind(this.enemy, this.cells);
    if (this.falses >= 5) {
      alert("Вы проиграли!");
      this.cleanScore();
    } else if (this.hits >= 5) {
      alert("Победа!");
      this.cleanScore();
    }
    this.interval = setInterval(() => {
      moveGoblinMethod();
      if (!this.click) {
        this.addNegativeScore();
      }
    }, 1000);
    this.click = false;
  }
  addPositiveScore() {
    this.hits += 1;
    this.scoreHitsEl.textContent = this.hits;
    this.enemy.moveGoblin(this.cells);
    this.checkMaxScore();
  }
  addNegativeScore() {
    this.falses += 1;
    this.scoreFalsesEl.textContent = "-" + this.falses;
    this.checkMaxScore();
  }
  cleanScore() {
    this.falses = 0;
    this.hits = 0;
    this.scoreHitsEl.textContent = 0;
    this.scoreFalsesEl.textContent = 0;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  console.log(game);
});
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;
//# sourceMappingURL=main.js.map
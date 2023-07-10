

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = null;
    }

    guess() {
        this.half = Math.trunc((this.max - this.min) / 2);
        return this.result;
    }

    lower() {
        this.max -= this.half + 1;
        return this.result = this.max;
    }

    greater() {
        this.min += this.half + 1;
        return this.result = this.min;
    }
}

const game = new GuessingGame();
game.setRange(0, 2574); //598
let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
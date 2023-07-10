class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.half = Math.trunc((this.max - this.min) / 2);
        return this.result;
    }

    lower() {
        this.max -= this.half;
        return this.result = this.max;
    }

    greater() {
        this.min += this.half;
        return this.result = this.min;
    }
}

module.exports = GuessingGame;

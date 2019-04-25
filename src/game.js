
// To model the game we:
// - use board size as "size" field. For examole, size 4 means board 4 x 4.
// - use number from 1 to size^2 to identify each stone. 0 means no stone.
// - use positions array that stores stone number for each position

export default class Game {
    constructor(size, positions) {
        console.log('Game.constructor', this, { size, positions });
        this.size = size || 4;
        this.positions = positions || shuffleArray([...new Array(size * size).keys()]);
    }

    stone(pos) {
        return this.positions[pos];
    }

    posX(pos) {
        return pos % this.size;
    }

    posY(pos) {
        return Math.floor(pos / this.size)
    }

    canMove(pos) {
        const x = this.posX(pos);
        const y = this.posY(pos);
        const positions = this.positions;
        const size = this.size;

        return (x !== 0 && positions[pos - 1] === 0) ||
            (x !== size - 1 && positions[pos + 1] === 0) ||
            (y !== 0 && positions[pos - size] === 0) ||
            (y !== size - 1 && positions[pos + size] === 0);
    }

    move(pos) {
        if (!this.canMove(pos)) {
            return this;
        }

        const x = this.posX(pos);
        const y = this.posY(pos);
        const positions = this.positions.slice(0); // copy positions array
        const size = this.size;

        if (x !== 0 && positions[pos - 1] === 0) {
            [positions[pos], positions[pos - 1]] = [positions[pos - 1], positions[pos]];
        } else if (x !== size - 1 && positions[pos + 1] === 0) {
            [positions[pos], positions[pos + 1]] = [positions[pos + 1], positions[pos]];
        } else if (y !== 0 && positions[pos - size] === 0) {
            [positions[pos], positions[pos - size]] = [positions[pos - size], positions[pos]];
        } else if (y !== size - 1 && positions[pos + size] === 0) {
            [positions[pos], positions[pos + size]] = [positions[pos + size], positions[pos]];
        }

        return new Game(size, positions);
    }

    isWin() {
        for (let pos = 0; pos < this.size * this.size; pos++) {
            if (this.stone(pos) !== pos + 1) { return false }
        }

        return true;
    }

}

// Fisher–Yates shuffle (Richard Durstenfeld version). See https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

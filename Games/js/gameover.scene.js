/// <reference path="./types/index.d.ts" />

// GameOver jelenet: győztes és végeredmény. R: visszavágó, Esc: menü.
class GameOverScene extends Phaser.Scene {

    constructor() {
        super('gameover');
    }

    // data: { winner: 1 | 2, score: [p1, p2] } – a Game jelenet adja át
    init(data) {
        this.winner = data.winner;
        this.score = data.score;
    }

    create() {
        const { width, height } = this.scale;
        const style = { fontFamily: 'Arial', color: '#ffffff', align: 'center' };

        this.add.rectangle(0, 0, width, height, 0x000000, 0.8).setOrigin(0, 0);

        this.add.text(width / 2, height / 2 - 80, 'P' + this.winner + ' nyert!', { ...style, fontSize: '56px' })
            .setOrigin(0.5);
        this.add.text(width / 2, height / 2, this.score[0] + ' : ' + this.score[1], { ...style, fontSize: '40px' })
            .setOrigin(0.5);
        this.add.text(width / 2, height / 2 + 100, '[R] visszavágó    [Esc] menü', { ...style, fontSize: '22px' })
            .setOrigin(0.5);

        this.input.keyboard.once('keydown-R', () => this.scene.start('game'));
        this.input.keyboard.once('keydown-ESC', () => this.scene.start('home'));
    }
}

/// <reference path="./types/index.d.ts" />

// Game jelenet: pálya, tankok, lövedékek, kör- és meccslogika.
// A HUD jelenet párhuzamosan fut fölötte.
class GameScene extends Phaser.Scene {

    constructor() {
        super('game');
    }

    create() {
        const { width, height } = this.scale;

        this.add.tileSprite(0, 0, width, height, 'tileGrass1').setOrigin(0, 0);

        // TODO: játékmenet ide jön
        this.add.text(width / 2, height / 2, 'Game jelenet - ide jön a játékmenet\n\n[K] teszt: meccs vége    [Esc] menü', {
            fontFamily: 'Arial', fontSize: '22px', color: '#ffffff', align: 'center',
        }).setOrigin(0.5).setStroke('#000000', 4);

        // HUD indítása a Game fölé
        this.scene.launch('hud');

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.stop('hud');
            this.scene.start('home');
        });

        // IDEIGLENES: a jelenetváltás kipróbálásához, később törölhető
        this.input.keyboard.on('keydown-K', () => {
            this.endMatch(1, [3, 1]);
        });
    }

    // winner: 1 vagy 2, score: [p1, p2]
    endMatch(winner, score) {
        this.scene.stop('hud');
        this.scene.start('gameover', { winner, score });
    }

    update(time, delta) {
        // TODO: tankok mozgatása, lövés, stb.
    }
}

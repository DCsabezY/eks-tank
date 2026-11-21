/// <reference path="./types/index.d.ts" />

// HUD jelenet: a Game fölött fut, pontszám, visszaszámlálás, kör végi felirat.
// Game jelenetből elérhető így: this.scene.get('hud').setScore(1, 0)
class HudScene extends Phaser.Scene {

    constructor() {
        super('hud');
    }

    create() {
        const { width } = this.scale;

        this.scoreText = this.add.text(width / 2, 20, '0 : 0', {
            fontFamily: 'Arial', fontSize: '32px', color: '#ffffff',
        }).setOrigin(0.5, 0).setStroke('#000000', 5);
    }

    setScore(p1, p2) {
        this.scoreText.setText(p1 + ' : ' + p2);
    }
}

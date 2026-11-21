/// <reference path="./types/index.d.ts" />

// Menu jelenet: cím, irányítás, Enter -> játék.
class HomeScene extends Phaser.Scene {

    constructor() {
        super('home');
    }

    create() {
        const { width, height } = this.scale;
        const textStyle = { fontFamily: 'Arial', fontSize: '20px', color: '#ffffff', align: 'center' };

        // Füves háttér, a csempe ismétlődik
        this.add.tileSprite(0, 0, width, height, 'tileGrass1').setOrigin(0, 0);

        this.add.text(width / 2, 120, 'EKS tank', { fontFamily: 'Arial', fontSize: '64px', color: '#ffffff', stroke: '#000000', strokeThickness: 6 })
            .setOrigin(0.5);

        // P1 bal oldalt, P2 jobb oldalt
        this.add.image(width * 0.25, 300, 'tank_blue');
        this.add.text(width * 0.25, 380, 'P1\nW / S: előre / hátra\nA / D: forgás\nSpace: lövés', textStyle)
            .setOrigin(0.5, 0).setStroke('#000000', 4);

        this.add.image(width * 0.75, 300, 'tank_red');
        this.add.text(width * 0.75, 380, 'P2\n↑ / ↓: előre / hátra\n← / →: forgás\nEnter: lövés', textStyle)
            .setOrigin(0.5, 0).setStroke('#000000', 4);

        const startText = this.add.text(width / 2, height - 60, 'Nyomj ENTER-t az indításhoz', { ...textStyle, fontSize: '28px' })
            .setOrigin(0.5).setStroke('#000000', 4);

        // Villogó felirat
        this.tweens.add({ targets: startText, alpha: 0.2, duration: 600, yoyo: true, repeat: -1 });

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('game');
        });
    }
}

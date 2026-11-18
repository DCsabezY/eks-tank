/// <reference path="./types/index.d.ts" />

class HomeScene extends Phaser.Scene {

    constructor() {
        super('home');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        // Ide jöhet majd a Start gomb vagy a játék logika!

        // Háttér szín vagy kép (ha nincs background.png, ez a téglalap látszani fog)
        this.add.rectangle(0, 0, 800, 600, 0x333333).setOrigin(0, 0);

        // Próbaként tegyünk ki egy ládát és egy hordót a képernyőre
        this.add.image(400, 300, 'crateWood').setScale(2);
        this.add.image(500, 300, 'barrelRed').setScale(2);

        // Felirat, hogy lássuk, elindult a jelenet
        this.add.text(250, 150, 'Tank Játék - Főmenü', {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: '#ffffff'
        });

    }
}
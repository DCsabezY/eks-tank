/// <reference path="./types/index.d.ts" />

class HomeScene extends Phaser.Scene {
    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
    }
}
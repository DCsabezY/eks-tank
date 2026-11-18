/// <reference path="./types/index.d.ts" />

class LoadingScene extends Phaser.Scene {

    constructor() {
        super('loading');
    }

    init(){
        this.bg = this.add.rectangle(0, 0, this.sys.game.config.width,this.sys.game.config.height, 0xffffff);
        this.bg.setOrigin(0,0);

        this.bgBar = this.add.rectangle(0, 0, 200,30, 0xd4d5d6);
        Phaser.Display.Align.In.Center(this.bgBar, this.bg);

        this.progressBar = this.add.rectangle(0, 0, 0, 30, 0x13ba00);
        Phaser.Display.Align.In.LeftCenter(this.progressBar, this.bgBar);

        this.load.on(Phaser.Loader.Events.PROGRESS, (progress) => {
            this.progressBar.setSize(progress * 200, 30);
            Phaser.Display.Align.In.LeftCenter(this.progressBar, this.bgBar);
        });

    }

    preload(){
        this.load.image('tank', 'assets/tank.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('barrelBlack_side', 'assets/barrelBlack_side.png');
        this.load.image('barrelBlack_top', 'assets/barrelBlack_top.png');
        this.load.image('barrelRed_side', 'assets/barrelRed_side.png');
        this.load.image('barrelRed_top', 'assets/barrelRed_top.png');
        this.load.image('barrelRust_side', 'assets/barrelRust_side.png');
        this.load.image('barrelRust_top', 'assets/barrelRust_top.png');
        this.load.image('barricadeWood', 'assets/barricadeWood.png');
        this.load.image('bulletRed2', 'assets/bulletRed2.png');
        this.load.image('crateWood', 'assets/crateWood.png');

        this.load.spritesheet('explosion', 'assets/explosion.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        this.scene.start('home');
    }
}
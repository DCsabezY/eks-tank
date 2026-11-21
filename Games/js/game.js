/// <reference path="./types/index.d.ts" />

const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 960,   // 30 csempe * 32px
    height: 640,  // 20 csempe * 32px
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false, // true: hitboxok látszanak
        },
    },
    // Az első a listában indul el automatikusan
    scene: [LoadingScene, HomeScene, GameScene, HudScene, GameOverScene],
});

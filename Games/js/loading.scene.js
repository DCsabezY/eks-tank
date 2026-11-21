/// <reference path="./types/index.d.ts" />

// Preload jelenet: betölti az ASSETS listában (assets.js) lévő fájlokat, közben töltősávot mutat.
class LoadingScene extends Phaser.Scene {

    constructor() {
        super('loading');
    }

    preload() {
        this.createProgressBar();

        this.load.setPath('assets/');

        ASSETS.images.forEach((key) => this.load.image(key, key + '.png'));
        ASSETS.spritesheets.forEach((s) => this.load.spritesheet(s.key, s.file, { frameWidth: s.frameWidth, frameHeight: s.frameHeight }));
        ASSETS.audio.forEach((a) => this.load.audio(a.key, a.file));
        ASSETS.tilemaps.forEach((m) => this.load.tilemapTiledJSON(m.key, m.file));

        // Ha egy fájl hiányzik, itt látszik a konzolban, melyik
        this.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, (file) => {
            console.error('Nem sikerült betölteni:', file.key, file.url);
        });
    }

    createProgressBar() {
        const { width, height } = this.scale;
        const barWidth = 400;
        const barHeight = 30;
        const x = (width - barWidth) / 2;
        const y = height / 2;

        this.add.text(width / 2, y - 40, 'Betöltés...', { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff' })
            .setOrigin(0.5);

        this.add.rectangle(x, y, barWidth, barHeight, 0x444444).setOrigin(0, 0);
        const bar = this.add.rectangle(x, y, 0, barHeight, 0x13ba00).setOrigin(0, 0);

        this.load.on(Phaser.Loader.Events.PROGRESS, (progress) => {
            bar.width = barWidth * progress;
        });
    }

    create() {
        this.scene.start('home');
    }
}

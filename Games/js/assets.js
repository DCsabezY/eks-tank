// Asset lista – a LoadingScene ez alapján tölt be mindent.
// Új asset: csak írd be ide a megfelelő listába, a kulcs = fájlnév kiterjesztés nélkül.
//   képek:        assets/<kulcs>.png         -> this.add.image(x, y, '<kulcs>')
//   spritesheet:  { key, file, frameWidth, frameHeight }
//   hang:         { key, file }              -> this.sound.play('<kulcs>')

const ASSETS = {
    images: [
        // tankok
        'tank_blue', 'tank_red', 'tank_dark', 'tank_green', 'tank_sand',

        // lövedékek, torkolattűz
        'bulletBlue2', 'bulletRed2', 'bulletDark2', 'bulletGreen2', 'bulletSand2',
        'shotLarge', 'shotOrange', 'shotRed', 'shotThin',

        // robbanás, füst (külön képkockák -> animációt ezekből lehet csinálni)
        'explosion1', 'explosion2', 'explosion3', 'explosion4', 'explosion5',
        'explosionSmoke1', 'explosionSmoke2', 'explosionSmoke3', 'explosionSmoke4', 'explosionSmoke5',

        // lánctalpnyom
        'tracksSmall', 'tracksLarge', 'tracksDouble',

        // akadályok, dekoráció
        'barrelBlack_side', 'barrelGreen_side', 'barrelRed_side', 'barrelRust_side',
        'barricadeMetal', 'barricadeWood',
        'crateMetal', 'crateWood',
        'fenceRed', 'fenceYellow',
        'oilSpill_large', 'oilSpill_small',
        'sandbagBeige', 'sandbagBeige_open', 'sandbagBrown', 'sandbagBrown_open',
        'specialBarrel1', 'specialBarrel1_outline', 'specialBarrel2', 'specialBarrel2_outline',
        'treeBrown_large', 'treeBrown_leaf', 'treeBrown_small', 'treeBrown_twigs',
        'treeGreen_large', 'treeGreen_leaf', 'treeGreen_small', 'treeGreen_twigs',
        'wireCrooked', 'wireStraight',

        // terep csempék (128x128)
        'tileGrass1', 'tileGrass2',
        'tileGrass_roadCornerLL', 'tileGrass_roadCornerLR', 'tileGrass_roadCornerUL', 'tileGrass_roadCornerUR',
        'tileGrass_roadCrossing', 'tileGrass_roadCrossingRound',
        'tileGrass_roadEast', 'tileGrass_roadNorth',
        'tileGrass_roadSplitE', 'tileGrass_roadSplitN', 'tileGrass_roadSplitS', 'tileGrass_roadSplitW',
        'tileGrass_roadTransitionE', 'tileGrass_roadTransitionE_dirt',
        'tileGrass_roadTransitionN', 'tileGrass_roadTransitionN_dirt',
        'tileGrass_roadTransitionS', 'tileGrass_roadTransitionS_dirt',
        'tileGrass_roadTransitionW', 'tileGrass_roadTransitionW_dirt',
        'tileGrass_transitionE', 'tileGrass_transitionN', 'tileGrass_transitionS', 'tileGrass_transitionW',
        'tileSand1', 'tileSand2',
        'tileSand_roadCornerLL', 'tileSand_roadCornerLR', 'tileSand_roadCornerUL', 'tileSand_roadCornerUR',
        'tileSand_roadCrossing', 'tileSand_roadCrossingRound',
        'tileSand_roadEast', 'tileSand_roadNorth',
        'tileSand_roadSplitE', 'tileSand_roadSplitN', 'tileSand_roadSplitS', 'tileSand_roadSplitW',
    ],

    spritesheets: [
        // { key: 'explosion', file: 'explosion.png', frameWidth: 64, frameHeight: 64 },
    ],

    audio: [
        // { key: 'shoot', file: 'shoot.ogg' },
    ],

    // Tiled JSON pályák (később)
    tilemaps: [
        // { key: 'mapA', file: 'maps/mapA.json' },
    ],
};

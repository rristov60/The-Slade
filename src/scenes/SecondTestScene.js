

var directions = {
    west: { offset: 0, x: -2, y: 0, opposite: 'east' },
    northWest: { offset: 32, x: -2, y: -1, opposite: 'southEast' },
    north: { offset: 64, x: 0, y: -2, opposite: 'south' },
    northEast: { offset: 96, x: 2, y: -1, opposite: 'southWest' },
    east: { offset: 128, x: 2, y: 0, opposite: 'west' },
    southEast: { offset: 160, x: 2, y: 1, opposite: 'northWest' },
    south: { offset: 192, x: 0, y: 2, opposite: 'north' },
    southWest: { offset: 224, x: -2, y: 1, opposite: 'northEast' }
};

var anims = {
    idle: {
        startFrame: 0,
        endFrame: 4,
        speed: 0.2
    },
    walk: {
        startFrame: 4,
        endFrame: 12,
        speed: 0.15
    },
    attack: {
        startFrame: 12,
        endFrame: 20,
        speed: 0.11
    },
    die: {
        startFrame: 20,
        endFrame: 28,
        speed: 0.2
    },
    shoot: {
        startFrame: 28,
        endFrame: 32,
        speed: 0.1
    }
};


var skeletons = [];

var tileWidthHalf;
var tileHeightHalf;

var d = 0;

var scene;

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.json('map', 'assets/isometric/isometric-grass-and-water.json');
        this.load.spritesheet('tiles', 'assets/isometric/isometric-grass-and-water1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton', 'assets/isometric/skeleton8.png', { frameWidth: 128, frameHeight: 128 });
        this.load.image('house', 'assets/isometric/rem_0002.png');
    }

    create ()
    {
        scene = this;

        this.buildMap();
        this.placeHouses();
        this.cameras.main.setSize(1600, 600);
        this.cameras.main.centerOn(1300, 400);

    }

    update ()
    {
    }


    buildMap ()
    {
        //  Parse the data out of the map
        const data = scene.cache.json.get('map');
        // const ui = scene.add.image(400, 300, 'bottom_ui');
        const tilewidth = data.tilewidth;
        const tileheight = data.tileheight;

        tileWidthHalf = tilewidth / 2;
        tileHeightHalf = tileheight / 2;

        const layer = data.layers[0].data;
        // layer.add(ui);

        const mapwidth = data.layers[0].width;
        const mapheight = data.layers[0].height;

        const centerX = mapwidth * tileWidthHalf;
        const centerY = 16;

        let i = 0;

        for (let y = 0; y < mapheight; y++)
        {
            for (let x = 0; x < mapwidth; x++)
            {
                const id = layer[i] - 1;

                const tx = (x - y) * tileWidthHalf;
                const ty = (x + y) * tileHeightHalf;

                const tile = scene.add.image(centerX + tx, centerY + ty, 'tiles', id);

                tile.depth = centerY + ty;

                i++;
            }
        }
    }

    placeHouses ()
    {
        const house_1 = scene.add.image(240, 370, 'house');
        house_1.depth = house_1.y + 86;

        const house_2 = scene.add.image(1300, 290, 'house');
        house_2.depth = house_2.y + 86;

        // this.children.bringToTop(ui);

    }
}
import Phaser from "phaser";
import UIScene from "../../UIScene";

class Level7Scene extends Phaser.Scene {
    constructor ()
    {
        super();
        Phaser.Scene.call(UIScene, { key: 'UIScene', active: true });
    }

    preload ()
    {
        this.load.json('map', 'assets/isometric/isometric-grass-and-water.json');
        this.load.spritesheet('tiles', 'assets/isometric/isometric-grass-and-water1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton', 'assets/isometric/skeleton8.png', { frameWidth: 128, frameHeight: 128 });
        this.load.image('house', 'assets/isometric/rem_0002.png');
        this.scene.add('UIScene', UIScene);
    }

    create ()
    {
        this.TheScene = this;
        this.buildMap();
        this.placeHouses();
        this.cameras.main.setSize(1600, 600);
        // this.cameras.main.centerOn(1300, 400);

    }

    update ()
    {
    }


    buildMap ()
    {
        //  Parse the data out of the map
        const data = this.TheScene.cache.json.get('map');
        const tilewidth = data.tilewidth;
        const tileheight = data.tileheight;

        const tileWidthHalf = tilewidth / 2;
        const tileHeightHalf = tileheight / 2;

        const layer = data.layers[0].data;
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

                const tile = this.TheScene.add.image(centerX + tx, centerY + ty, 'tiles', id);

                tile.depth = centerY + ty;

                i++;
            }
        }
    }

    // Place houses around the map
    // TODO: Replace this with objects so the scene makes sense
    placeHouses ()
    {
        const house_1 = this.TheScene.add.image(240, 370, 'house');
        house_1.depth = house_1.y + 86;

        const house_2 = this.TheScene.add.image(1300, 290, 'house');
        house_2.depth = house_2.y + 86;

    }
}

export default Level7Scene;
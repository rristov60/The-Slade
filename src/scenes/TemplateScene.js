import Phaser from "phaser";

class TemplateScene extends Phaser.Scene
{
    preload() {
        this.load.json('map', 'assets/isometric/isometric-grass-and-water.json');
        this.load.spritesheet('tiles', 'assets/isometric/isometric-grass-and-water.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton', 'assets/isometric/skeleton8.png', { frameWidth: 128, frameHeight: 128 });
        this.load.image('house', 'assets/isometric/rem_0002.png');
    }

    create() {

        this.scene = this;
        this.buildMap();
        // this.placeHouses();

        this.cameras.main.setSize(1600, 600);
    }

    buildMap() {
        const data = this.scene.cache.json.get('map');

        const tileWidth = data.tileWidth;
        const tileHeigth = data.tileHeigth;

        var tileWidthHalf = tileWidth / 2;
        var tileHeigthHalf = tileHeigth / 2;

        const layer = data.layers[0].data;

        const mapWidth = data.layers[0].width;
        const mapHeight = data.layers[0].height;

        const centerX = mapWidth * tileWidthHalf;
        const centerY = 16;

        let i = 0;
        
        for(let y = 0; y < mapHeight; y++) {
            for(let x = 0; x < mapWidth; x++) {
                const id = layer[i] - 1;

                const tx = (x - y) * tileWidthHalf;
                const ty = (x + y) * tileHeigthHalf;

                const tile = this.scene.add.image(centerX + tx, centerY + ty, 'tiles', id);

                tile.depth = centerY + ty;
                i++;
            }
        }
    }
}

export default TemplateScene;
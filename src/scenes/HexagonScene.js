import Phaser from "phaser";


class HexagonScene extends Phaser.Scene {

    preload ()
    {
        this.load.image('tiles', 'assets/hexagonal/tileset2.png');
        this.load.tilemapTiledJSON('map', 'assets/hexagonal/hexagonal.json');
    }

    create ()
    {
        var map = this.add.tilemap('map');

        var tileset = map.addTilesetImage('tileset', 'tiles');

        map.createLayer('Calque 1', tileset);

        var cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setZoom(2);
        this.cameras.main.centerOn(200, 100);

        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}


export default HexagonScene;
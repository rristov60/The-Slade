import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
    constructor ()
    {
        super();
        Phaser.Scene.call(this, { key: 'UIScene', active: true });
    }

    preload ()
    {
        this.load.image('bottom_ui', 'assets/isometric/bottom_UI.png');
        this.load.image('right_ui', 'assets/isometric/right_UI.png');
    }

    create() 
    {
        this.add.image(400, 300, 'bottom_ui');
        this.add.image(400, 300, 'right_ui');
    }
}
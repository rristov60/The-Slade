import Phaser from "phaser";

export default class UIScene extends Phaser.Scene {
    constructor ()
    {
        super('UIScene');
        Phaser.Scene.call(this, { key: 'UIScene', active: true });
    }

    preload ()
    {
        this.load.image('bottom_ui', 'assets/isometric/bottom_UI.png');
        this.load.image('right_ui', 'assets/isometric/right_UI.png');
        this.load.image('btn', 'assets/isometric/btn.png');
    }

    create() 
    {
        this.input.setDefaultCursor('url(assets/isometric/cursorSword_silver.png), pointer');
        this.add.image(400, 300, 'bottom_ui');
        this.add.image(400, 300, 'right_ui');
        const btn = this.physics.add.sprite(400, 300, 'btn').setInteractive({ 
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        btn.setInteractive();

        this.input.setDraggable(btn);

        
        btn.on('drag', function(pointer,dragX, dragY) {
            btn.x = Phaser.Math.Snap.To(dragX, 10);
            btn.y = Phaser.Math.Snap.To(dragY, 10);
        });

        btn.on('dragend', function(pointer) {
            if(btn.x < 647)
                btn.x = 647;
            if(btn.y > 437 || btn.y < 12)
                btn.y = 25;
        });
    }

    update() {
    }
}
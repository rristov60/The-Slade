import Phaser from "phaser";
import UIScene from "../../UIScene";

class Level1Scene extends Phaser.Scene {
    constructor ()
    {
        super();
        // Phaser.Scene.call(UIScene, { key: 'UIScene', active: true });
    }

    preload ()
    {
        // this.load.json('map', 'assets/isometric/isometric-grass-and-water.json');
        // this.load.spritesheet('tiles', 'assets/isometric/isometric-grass-and-water1.png', { frameWidth: 64, frameHeight: 64 });
        // this.load.spritesheet('skeleton', 'assets/isometric/skeleton8.png', { frameWidth: 128, frameHeight: 128 });
        // this.load.image('house', 'assets/isometric/rem_0002.png');
        this.load.image('grid_level', 'assets/levels/common/Grid_level.jpg');
        this.load.image('bg_level', 'assets/levels/common/Background_For_Level.jpg');
        this.load.image('outside_grid', 'assets/levels/common/Outside_of_grid.png');
        this.load.image('start_code_btn', 'assets/levels/common/commands/Start_Program_Button.png');
        this.load.image('exit_level_btn', 'assets/levels/common/commands/Exit_Level_Button.png');
        this.load.image('collect_btn', 'assets/levels/common/commands/Collect_Button.png');
        this.load.image('fight_btn', 'assets/levels/common/commands/Fight_Button.png');
        this.load.image('turn_btn', 'assets/levels/common/commands/Turn_Button.png');
        this.load.image('forward_btn', 'assets/levels/common/commands/Forward_Button.png');
        this.load.image('bottom_ui', 'assets/isometric/bottom_UI.png');
        this.load.image('right_ui', 'assets/isometric/right_UI.png');
        this.load.image('btn', 'assets/isometric/btn.png');

        // this.scene.add('UIScene', UIScene);
    }

    create ()
    {
        this.add.image(400, 300, 'bg_level');
        const currentScene = this;
        this.input.setDefaultCursor('url(assets/isometric/cursorSword_silver.png), pointer');

        this.add.image(300, 250, 'grid_level');
        var g2 = this.add.grid(300, 250, 512, 320, 64, 64).setOutlineStyle(0x016fce);
        this.add.image(300, 250, 'outside_grid');

        this.add.image(400, 300, 'bottom_ui');
        this.add.image(400, 300, 'right_ui');


        const clickSound = this.sound.add('click_sound', {
            loop: false
        });
        
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
        const startCodeBtn = this.add.image(695, 452, 'start_code_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        const exitLevelBtn = this.add.image(760, 452, 'exit_level_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        exitLevelBtn.on('pointerdown', function () {
            clickSound.play();
            currentScene.scene.start(`levels`);
        });

        const collectBtn = this.physics.add.sprite(725, 350, 'collect_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        const forwardBtn = this.physics.add.sprite(725, 310, 'forward_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        const fightBtn = this.physics.add.sprite(725, 270, 'fight_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        const turnBtn = this.physics.add.sprite(725, 230, 'turn_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });
        // this.TheScene = this;
        // this.buildMap();
        // this.placeHouses();
        // this.cameras.main.setSize(1600, 600);
        // this.cameras.main.centerOn(1300, 400);

    }

    update ()
    {
    }

}

export default Level1Scene;
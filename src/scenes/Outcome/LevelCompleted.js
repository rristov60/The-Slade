import Phaser from "phaser";

class LevelCompletedScene extends Phaser.Scene {

    constructor() {
        super();
    }

    preload() {
        this.load.image('level_finished_background', 'assets/levels/common/success/level_finished.jpg');
        this.load.image('levels_screen_btn', 'assets/levels/common/success/levels_screen_btn.png');
    }

    create() {
        
        const currentScene = this;
        this.add.image(400, 300, 'level_finished_background');

        const clickSound = this.sound.add('click_sound', {
            loop: false
        });

        this.levelsScreenBtn = this.add.image(400, 450, 'levels_screen_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        this.levelsScreenBtn.on('pointerdown', function () {
            clickSound.play();   
            currentScene.scene.start('levels');
        });
    }

}

export default LevelCompletedScene;
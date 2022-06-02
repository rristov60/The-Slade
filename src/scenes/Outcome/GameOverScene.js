import Phaser from "phaser";

class GameOverScene extends Phaser.Scene {

    constructor() {
        super();
    }

    preload() {
        this.load.image('game_over_background', 'assets/levels/common/game_over/game_over.jpg');
        this.load.image('try_again_btn', 'assets/levels/common/game_over/try_again_btn.png');
    }

    create() {
        
        const currentScene = this;
        this.add.image(400, 300, 'game_over_background');

        const clickSound = this.sound.add('click_sound', {
            loop: false
        });

        this.tryAgainBtn = this.add.image(400, 450, 'try_again_btn').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        this.tryAgainBtn.on('pointerdown', function () {
            clickSound.play();   
            currentScene.scene.start('levels');
        });
    }

}

export default GameOverScene;
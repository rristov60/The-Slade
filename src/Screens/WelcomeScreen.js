import Phaser from "phaser";

class WelcomeScreen extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('background', 'assets/welcome_screen/Welcome_Screen_Slade.jpg');
        this.load.image('play', 'assets/welcome_screen/Button_Play.jpg');
        this.load.image('play_clicked', 'assets/welcome_screen/Button_Play_Clicked.jpg');
        this.load.audio('backgorund_music', ['assets/music/background.mp3']);
        this.load.audio('click_sound', ['assets/sounds/click_001.ogg']);
    }

    create() {
        const currentScene = this;
        this.add.image(400, 300, 'background');
        this.input.setDefaultCursor('url(assets/isometric/cursorSword_silver.png), pointer');

        this.sound.add('backgorund_music', {
            loop: true
        }).play();

        const clickSound = this.sound.add('click_sound', {
            loop: false
        });

        this.playButton = this.add.image(400, 450, 'play').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        this.playButton.on('pointerdown', function () {
            clickSound.play();
            this.setTexture('play_clicked');
            this.setTexture('play');
            currentScene.scene.start('levels');
        });
    }
}

export default WelcomeScreen;
import Phaser from "phaser";

class EntryScene extends Phaser.Scene {

    constructor() {
        super();
    }

    preload() {
        this.load.audio('backgorund_music', ['assets/music/background.mp3']);
    }

    create() {
        this.input.setDefaultCursor('url(assets/isometric/cursorSword_silver.png), pointer');
        this.sound.add('backgorund_music', {
            loop: true
        }).play();

        this.scene.start('welcome');
    }

}

export default EntryScene;
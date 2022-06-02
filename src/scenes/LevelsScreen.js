import Phaser from "phaser";

class LevelsScreen extends Phaser.Scene {
    
    constructor() {
        super();
    }

    preload() {
        this.load.image('background_levels', 'assets/levels_screen/background.jpg');
        this.load.image('arrow_brown_left', 'assets/levels_screen/arrowBrown_left.png');

        for(let i = 0; i <= 9; i++) {
            this.load.image(`level_card_${i}`, `assets/levels_screen/cards/${i}.png`);
        }
    }

    create() {

        const currentScene = this;

        this.add.image(400, 300, 'background_levels');

        let i = 1;
        let j = 1;

        const levels = {};

        for(let x = 1; x < 4; x++) {
            j = i;
            for(let y = 1; y < 4; y++) {
                if(y == 1)
                    levels[j] = this.add.image(200 * x, 175 * y, `level_card_${j}`).setInteractive({
                            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
                        });
                else
                    levels[j] = this.add.image(200 * x, 175 * y, `level_card_${j}`).setInteractive({
                            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
                        });

                j+=3;
            }
            i++;
        }

        console.table(levels);

        this.levelsBackBtn = this.add.image(50, 550, 'arrow_brown_left').setInteractive({
            cursor: 'url(assets/isometric/cursorHand_grey.png), pointer'
        });

        const clickSound = this.sound.add('click_sound', {
            loop: false
        });


        for(let i = 1; i < 10; i++) {
            levels[i].on('pointerdown', function () {
                clickSound.play();
                currentScene.scene.start(`level_${i}`);
            });
        }

        this.levelsBackBtn.on('pointerdown', function () {
            clickSound.play();
            currentScene.scene.start('welcome');
        });

    }
}

export default LevelsScreen;
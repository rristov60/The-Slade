import Phaser, { HEADLESS } from 'phaser';
import testScene from './scenes/testScene';
import TemplateScene from './scenes/templateScene';
import Example from './scenes/SecondTestScene';
import HexagonScene from './scenes/HexagonScene';
import WelcomeScreen from './Screens/WelcomeScreen';
import LevelsScreen from './scenes/LevelsScreen';
import EntryScene from './Screens/EntryScene';
import Level1Scene from './scenes/Levels/1/Level1Scene';
import Level2Scene from './scenes/Levels/2/Level2Scene';
import Level3Scene from './scenes/Levels/3/Level3Scene';
import Level4Scene from './scenes/Levels/4/Level4Scene';
import Level5Scene from './scenes/Levels/5/Level5Scene';
import Level6Scene from './scenes/Levels/6/Level6Scene';
import Level7Scene from './scenes/Levels/7/Level7Scene';
import Level8Scene from './scenes/Levels/8/Level8Scene';
import Level9Scene from './scenes/Levels/9/Level9Scene';
import GridTestScene from './scenes/GridTestScene';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
            debug: true
		}
	}
    // scene: [Example, UIScene]
};

const game = new Phaser.Game(config);
game.scene.add('test', testScene);
game.scene.add('template', TemplateScene);
game.scene.add('example', Example);
game.scene.add('hexagon', HexagonScene);
game.scene.add('welcome', WelcomeScreen);
game.scene.add('levels', LevelsScreen);
game.scene.add('entry', EntryScene);
game.scene.add('level_1', Level1Scene);
game.scene.add('level_2', Level2Scene);
game.scene.add('level_3', Level3Scene);
game.scene.add('level_4', Level4Scene);
game.scene.add('level_5', Level5Scene);
game.scene.add('level_6', Level6Scene);
game.scene.add('level_7', Level7Scene);
game.scene.add('level_8', Level8Scene);
game.scene.add('level_9', Level9Scene);
game.scene.add('grid_scene', GridTestScene);

game.scene.start('welcome');

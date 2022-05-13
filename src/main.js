import Phaser, { HEADLESS } from 'phaser';
import testScene from './scenes/testScene';
import TemplateScene from './scenes/templateScene';
import Example from './scenes/SecondTestScene';
import HexagonScene from './scenes/HexagonScene';
import WelcomeScreen from './Screens/WelcomeScreen';
import LevelsScreen from './scenes/LevelsScreen';

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

game.scene.start('welcome');

// setTimeout(() => {
// 	game.scene.add('ui', UIScene);
// }, 5000);
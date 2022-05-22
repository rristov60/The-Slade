import Phaser from "phaser";

class GridTestScene extends Phaser.Scene {
    constructor(){
        super();
    }

    preload(){

    }

    create() {
        // var g1 = this.add.grid(100, 100, 128, 96, 32, 32, 0x057605);

        var g2 = this.add.grid(300, 270, 512, 320, 64, 64, 0x00b9f2).setAltFillStyle(0x016fce).setOutlineStyle();
    
        // var g3 = this.add.grid(600, 300, 100, 500, 48, 128, 0xc145ea).setAltFillStyle(0xb038d7).setOutlineStyle().setAngle(-20);
    
    }
}

export default GridTestScene;
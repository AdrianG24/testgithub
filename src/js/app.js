import * as PIXI from './pixi.mjs';
console.log(PIXI);

window.PIXI = PIXI;
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x377E17,
});
document.body.appendChild(app.view);

PIXI.loader.add("images/atlas.json").load( setup )

  function setup () {
    let id = PIXI.loader.resourses["images/atlas.json"].textures;
    let sprite = new PIXI.Sprite(id["2-C.png"])

    sprite.anchor.set(0,0);

    sprite.x=100;
    sprite.y=100;

    app.stage.addChild(sprite);
  }





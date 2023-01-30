import * as PIXI from 'pixi.js';
console.log(PIXI);
import gsap from "gsap";
console.log(gsap);
// console.log(Card);

window.PIXI = PIXI;
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x377E17,
});
document.body.appendChild(app.view);


// const loader = PIXI.Loader.shared;


// loader.add("atlas", "images/atlas.json")

// loader.load((loader, resources) => {
// setup(resources.atlas.textures);
// })

// function setup (textures) {
//     let id = textures;
//     let sprite = new PIXI.Sprite(id["2-C.png"])

//     sprite.anchor.set(0,0);

//     sprite.x=100;
//     sprite.y=100;

//     sprite.width = 100;
//     sprite.height = 100;

//     app.stage.addChild(sprite);
//   }
// let isAnimated = true;

// const card = PIXI.Texture.from('images/2C.png');
// const bgCard = PIXI.Texture.from('images/cardBg.png')
// const fullCard = new PIXI.Sprite(card)

// fullCard.x = app.screen.width / 2;
// fullCard.y = app.screen.height / 2;

// fullCard.width = 100;
// fullCard.height = 120;

// app.stage.addChild(fullCard);

// fullCard.interactive = true;
// fullCard.cursor = 'pointer';
// fullCard.on('pointertap', () => {
//   isAnimated = !isAnimated;
//   fullCard.texture = isAnimated ? card : bgCard;
// });

// let cards = [];
// let isAnimated = true;

// const card = PIXI.Texture.from('images/2C.png');
// const bgCard = PIXI.Texture.from('images/cardBg.png');

// cards.push(bgCard, card);
// const fullCard = new PIXI.AnimatedSprite(cards)

// fullCard.x = app.screen.width / 2;
// fullCard.y = app.screen.height / 2;

// fullCard.width = 100;
// fullCard.height = 120;

// app.stage.addChild(fullCard);

// fullCard.interactive = true;
// fullCard.cursor = 'pointer';
// fullCard.on('pointertap', () => {
//   isAnimated = !isAnimated;
//   fullCard.texture = isAnimated ? card : bgCard;
// });


// fullCard.anchor.set(0.5);
// fullCard.animationSpeed = 0.5;
// fullCard.play();

// app.ticker.add(() => {
//   fullCard.rotation += 0.01;
// });

const card = PIXI.Sprite.from('images/2C.png');
card.x = app.screen.width / 2;
card.y = app.screen.height / 2;
card.anchor.set(0.5, 0.5)
app.stage.addChild(card);

card.interactive = true;
card.cursor = 'pointer';
card.on('pointertap', () => {
let tweenPartOne = gsap.to(card.scale, {x:1, y:-0.5, duration: 0.1, delay: 1, 
  onComplete: () => {
    card.texture = PIXI.Texture.from('images/cardBg.png');
    let tweenPartTwo = gsap.to(card.scale, {x:1, y:-1, duration: 0.1});
    tweenPartTwo.play();
      tweenPartTwo.onComplete =() => {
        tweenPartTwo.kill();
    }
    tweenPartOne.kill();
}});
tweenPartOne.play();
});


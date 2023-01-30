import * as PIXI from 'pixi.js';

export default class Card extends PIXI.Sprite {
  constructor(texture){
    super (texture);
    this.showCard();
  };
  showCard(texture){

  };
  hideCard(){

  };
  flipCard(){

  };
  flyCard(x,y){

  };
  deleteCard(){

  }
  changeTexture(texture){
    this.texture = texture;
  }

}
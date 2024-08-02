import { Assets, Sprite } from 'pixi.js';

import './style.css'

import renderer from "./core/renderer.ts";

// Asynchronous IIFE
(async () =>
{
   void renderer.init()

   const app = renderer.getApp();

   const texture = await Assets.load('/example.png')
   const character = new Sprite(texture);

   character.anchor.set(0.5);
   character.x = app.screen.width / 2;
   character.y = app.screen.height / 2;

   app.stage.addChild(character);
})();



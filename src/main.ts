import './style.css'

import renderer from "./core/renderer.ts";
import { Input } from "./core/input.ts";

const playerPosition = {
    x: 0,
    y: 0
};

const handleArrowDown = () => {
   playerPosition.y += 5;
}

const handleArrowUp = () => {
    playerPosition.y -= 5;
}

const handleArrowLeft = () => {
    playerPosition.x -= 5;
}

const handleArrowRight = () => {
    playerPosition.x += 5;
}

(async () =>
{
   renderer.init().then(async () => {
      const app = renderer.getApp();
      new Input({
          handleArrowDown,
          handleArrowUp,
          handleArrowLeft,
          handleArrowRight
      });

      const character = await renderer.loadTextureAndCreateSprite('/example.png');

      character.x = 0;
      character.y = 0;
      character.anchor.set(0.5);

      renderer.addSpriteToStage(character);

      app.ticker.add(() => {
          character.x = playerPosition.x;
          character.y = playerPosition.y;
      });
   });
})();



import { Application, Assets, Sprite, Texture } from 'pixi.js';

/**
 * Singleton class that initializes the PixiJS application.
 */
class Renderer {
  private readonly app: Application;

  constructor() {
    this.app = new Application();
  }

  public async init(): Promise<void> {
    await this.app.init({ background: '#000', resizeTo: window });
    document.body.appendChild(this.app.canvas);
  }

  public getApp(): Application {
    return this.app;
  }

  private async loadTexture(path: string): Promise<Texture> {
    return Assets.load(path);
  }

  private createSprite(texture: Texture): Sprite {
    return new Sprite(texture);
  }

  public async loadTextureAndCreateSprite(path: string): Promise<Sprite> {
    const texture = await this.loadTexture(path);
    return this.createSprite(texture);
  }

  public addSpriteToStage(sprite: Sprite): void {
    this.app.stage.addChild(sprite);
  }
}

export default new Renderer();

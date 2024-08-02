import { Application } from 'pixi.js';

/**
 * Singleton class that initializes the PixiJS application.
 */
class Renderer {
  private readonly app: Application;

  constructor() {
    this.app = new Application();
  }

  async init(): Promise<void> {
    await this.app.init({ background: '#000', resizeTo: window });
    document.body.appendChild(this.app.canvas);
  }

  getApp(): Application {
    return this.app;
  }
}

export default new Renderer();

export enum KeyMap {
  ARROW_LEFT = 'ArrowLeft',
  ARROW_UP = 'ArrowUp',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_DOWN = 'ArrowDown',
}

type EventsHandlers = {
  handleArrowDown: () => void;
  handleArrowUp: () => void;
  handleArrowLeft: () => void;
  handleArrowRight: () => void;
}

export class Input {
  private readonly handleArrowDown: () => void;
  private readonly handleArrowUp: () => void;
  private readonly handleArrowLeft: () => void;
  private readonly handleArrowRight: () => void;

  constructor(eventHandlers: EventsHandlers) {
    this.handleArrowDown = eventHandlers.handleArrowDown;
    this.handleArrowUp = eventHandlers.handleArrowUp;
    this.handleArrowLeft = eventHandlers.handleArrowLeft;
    this.handleArrowRight = eventHandlers.handleArrowRight;

    window.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  private onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case KeyMap.ARROW_LEFT:
        this.handleArrowLeft();
        break;
      case KeyMap.ARROW_UP:
        this.handleArrowUp();
        break;
      case KeyMap.ARROW_RIGHT:
        this.handleArrowRight()
        break;
      case KeyMap.ARROW_DOWN:
        this.handleArrowDown();
        break;
    }
  }
}

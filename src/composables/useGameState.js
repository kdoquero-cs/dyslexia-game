import { ref, computed } from '@vue/composition-api';

export class useGameState {
  instance = null;
  gameList = [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
    { id: 4, completed: false },
    { id: 5, completed: false },
    { id: 6, completed: false },
    { id: 7, completed: false },
  ];
  visitedMainMenu = false;

  static getInstance() {
    if (!this.instance) {
      this.instance = new useGameState();
      return this.instance;
    }
    return this.instance;
  }

  get games() {
    return this.gameList;
  }

  get mainMenuState() {
    return this.visitedMainMenu;
  }

  updateGame(id) {
    this.gameList.find(game => game.id === id).completed = true;
  }

  allCompleted() {
    return computed(() => this.gameList.every((game) => game.completed));
  }
  setVisitedMainMenu(status) {
    this.visitedMainMenu = status;
  }

}

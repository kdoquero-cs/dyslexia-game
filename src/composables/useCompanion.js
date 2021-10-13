import { ref } from '@vue/composition-api';

export class useCompanion {
  instance = null;
  companion = ref(null);
  companionList = [
    { name: 'phoenix', path: '/static/avatars/Animal1.svg' },
    { name: 'unicorn', path: '/static/avatars/Animal2.svg' },
    { name: 'dragon', path: '/static/avatars/Animal3.svg' },
    { name: 'fox', path: '/static/avatars/Animal4.svg' },
  ];

  static getInstance() {
    if (!this.instance) {
      this.instance = new useCompanion();
      return this.instance;
    }
    return this.instance;
  }

  getCompanionImg(companion) {
    return require.context(companion.path);
  }

  setCompanion(index) {
    this.companion.value = this.companionList[index];
  }
}

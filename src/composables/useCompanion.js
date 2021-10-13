import { ref } from '@vue/composition-api';

export class useCompanion {
  instance = null;
  companionList = [
    { name: 'phoenix', path: '/static/avatars/Animal1.svg' },
    { name: 'unicorn', path: '/static/avatars/Animal2.svg' },
    { name: 'dragon', path: '/static/avatars/Animal3.svg' },
    { name: 'fox', path: '/static/avatars/Animal4.svg' },
  ];
  companion = ref(this.companionList[3]);

  static getInstance() {
    if (!this.instance) {
      this.instance = new useCompanion();
      return this.instance;
    }
    return this.instance;
  }

  setCompanion(index) {
    this.companion.value = this.companionList[index];
  }
}

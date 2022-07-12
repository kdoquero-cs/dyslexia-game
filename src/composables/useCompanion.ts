import { ref } from '@vue/composition-api';

export class useCompanion {
  instance = null;
  companionList = [
    { name: 'phoenix', path: require('../assets/avatars/Animal1.svg') },
    { name: 'unicorn', path: require('../assets/avatars/Animal2.svg') },
    { name: 'dragon', path: require('../assets/avatars/Animal3.svg') },
    { name: 'fox', path: require('../assets/avatars/Animal4.svg') },
  ];
  companion = ref(this.companionList[3]);

  getInstance() {
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

import { ref, computed } from "@vue/composition-api";

export function useSpeechSynthesis() {
  const voice = ref(null);
  const utterrance = ref(null);
  const isSpeaking = ref(false);
  function handlers() {
    if (utterrance.value) {
      utterrance.value.onend = () => {
        isSpeaking.value = false;
      }
    }
  }
  function getVoices() {
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = [
        'Google US English Male',
      ];
      const foundVoice = speechSynthesis.getVoices()
        .find(({ name }) => voices.includes(name));
      window.speechSynthesis.cancel();
      voice.value = foundVoice;
    };

  }

  getVoices();

  function playOnWord(word) {
    if (word && (typeof word === 'string' || word instanceof String)) {
      utterrance.value = new SpeechSynthesisUtterance(word);
      utterrance.value.voice = voice.value;
      utterrance.value.lang = "en-US";
      window.speechSynthesis.speak(utterrance.value);
      isSpeaking.value = true;
      handlers();
    }
  }


  return {
    playOnWord,
    isSpeaking: computed(() => isSpeaking.value)
  }
}
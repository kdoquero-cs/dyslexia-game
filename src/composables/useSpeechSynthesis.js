import { ref } from "@vue/composition-api";

export function useSpeechSynthesis() {
    const voice = ref(null);
    function getVoices() {
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = [
              'Google US English Male',
            ];
            const foundVoice = speechSynthesis.getVoices()
              .find(({ name }) =>voices.includes(name));
            window.speechSynthesis.cancel();
            voice.value = foundVoice;
          };

    }

    getVoices();

    function playOnWord(word) {
        const utter = new SpeechSynthesisUtterance(word);
        utter.voice = voice.value;
        utter.lang = "en-US";
        window.speechSynthesis.speak(utter);
    }
  
    return {
        playOnWord
    }
}
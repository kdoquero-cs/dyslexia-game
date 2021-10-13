import { computed, watch, ref } from "@vue/composition-api";

export function useSpeechSynthesis(word) {
    const voice = ref(null);
    function getVoices() {
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = [
              'Google UK English Female',
              'Microsoft David Desktop - English (United States)',
            ];
            const foundVoice = speechSynthesis.getVoices()
              .find(({ name }) => voices.includes(name));
            console.log('speaking',foundVoice);
            window.speechSynthesis.cancel(); // sometimes needed due to Chrome's buggy implementation
           
            if (foundVoice) utter.voice = foundVoice;
            else console.log('no voice found, using default');
            voice.value = foundVoice;
            window.speechSynthesis.speak(utter);
          };

    }
    getVoices();
    watch(word, currentWord=> {
        if (currentWord) {
            const utter = new SpeechSynthesisUtterance(currentWord);
            utter.voice = voice.value;
            console.log(currentWord,"word",voice.value);
            window.speechSynthesis.speak(utter);
        } 
    });

    return {
    }
}
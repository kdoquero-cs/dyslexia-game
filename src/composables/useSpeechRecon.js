import { computed, watch, ref } from "@vue/composition-api";

export function useSpeechRecognition(state) {
    const transcript = ref(null);
    const isRecording = ref(false);
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.onstart = function () {
        let utterance = new SpeechSynthesisUtterance("Starting");
        speechSynthesis.speak(utterance);
    };

    recognition.onspeechend = function () {
        isRecording.value = false;
        let utterance = new SpeechSynthesisUtterance("Stop");
        speechSynthesis.speak(utterance);
    }

    recognition.onresult = function (event) {
        transcript.value = event.results[0][0].transcript;
    };

    recognition.onend = () => {
        isRecording.value = false;
    };

    watch(state, currentState => {
        if (currentState) {
            isRecording.value = true;
            recognition.start();
        } else {
            isRecording.value = false;
            recognition.stop();
        }
    });

    return {
        transcript: computed(() => transcript.value),
        isRecording: computed(() => isRecording.value)
    }
}
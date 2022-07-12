import { computed, ref,onBeforeUnmount } from "@vue/composition-api";


export function usePlayAudio() {
    const audio = ref(null);
    const isPlaying = ref(false);

    const play = (sources)=> {
        let i = 1;
        let playRetry;
        stop();
        if (Array.isArray(sources)) {
            audio.value = new Audio(sources[0]);
            audio.value.onended = () => {
                isPlaying.value = false;
                if (i < sources.length) {
                    audio.value.src = sources[i];
                    audio.value.play();
                    isPlaying.value = true;
                    ++i;
                }
            }
        } else {
            audio.value = new Audio(sources);
        }
        playRetry = setInterval(() => {
         
           audio.value.play()
             .then(() => {
                isPlaying.value = true;
               clearInterval(playRetry);
             })
             .catch( (error)=>{
                isPlaying.value = false;
             });
         }, 1000);

    }
   

    const stop = () => {
        if (audio.value) {
            audio.value.pause();
            audio.value.currentTime = 0;
        }
    }
    onBeforeUnmount( ()=> {
        stop();
    })

    return {
        play,
        stop,
        isPlaying: computed(() => isPlaying.value)
    }
}
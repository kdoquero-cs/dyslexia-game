import { computed, ref } from "@vue/composition-api";
import norms from "./assets/norms/default-norms.json";
const state = ref({
    User: {
        name: "",
        years: 0,
        months: 0
    },
    visitedMainMenu: false,
    gamesResults: {
        WORD_RECOGNITION : {
        GeneralWords: 0,
        IrregularWords: 0,
        WordsWithNoMeaning: 0,
       },
       AUDITIVE_COMPREHENSION: 0,
       SYLLABLE_CLASSIFICATION : {
           Words:0,
           Syllables:0
       },
       ORAL_SPELLING: 0
    }
});

function setName(name) {
    state.value.User.name = name;
}

function setYears(years) {
    state.value.User.years = years;
}
function setMonths(months) {
    state.value.User.months = months;
}
function setVisitedMainMenu(status) {
    state.value.visitedMainMenu = status;

}
function getVisitedMainMenu() {
    return state.value.visitedMainMenu;
}
function setGameResult(challengeId, result) {
    state.value.gamesResults = { ...state.value.gamesResults, [challengeId]: result };
}

export default { setVisitedMainMenu, getVisitedMainMenu, setName, setYears, setMonths, setGameResult, user: computed(() => state.value.User), gamesResults: computed(() => state.value.gamesResults) };
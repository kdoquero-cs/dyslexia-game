import { computed, ref } from "@vue/composition-api";

const state = ref({
    User: {
        name: "",
        years: 0,
        months: 0
    },
    visitedMainMenu: false,
    gamesResults: {}
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
    console.log(challengeId, result, "result");
    state.value.gamesResults = { ...state.value.gamesResults, [challengeId]: result };
    console.log(challengeId, state.value.gameResults, "result 22322");
}

export default { setVisitedMainMenu, getVisitedMainMenu, setName, setYears, setMonths, setGameResult, user: computed(() => state.value.User), gamesResults: computed(() => state.value.gamesResults) };
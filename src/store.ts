import { computed, ref } from "@vue/composition-api";

const state = ref({
    User: {
        name: "",
        years: 0,
        months: 0
    },
    visitedMainMenu:false
});

function setName(name) {
    state.value.User.name = name;
}

function setYears(years) {
    state.value.User.years= years;
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
export default { setVisitedMainMenu,getVisitedMainMenu,setName, setYears, setMonths,user :computed(()=> state.value.User) };
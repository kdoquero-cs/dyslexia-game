import { computed, ref } from "@vue/composition-api";

const state = ref({
    User: {
        name: "",
        years: 0,
        months: 0
    }
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
export default { setName, setYears, setMonths,user :computed(()=> state.value.User) };
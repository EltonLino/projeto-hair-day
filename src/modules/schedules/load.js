import {hoursLoad} from "../form/hours-load.js"
const selectDate = document.getElementById("date")

export function schedulesDay(){
    //Obtem a data do input
    const date = selectDate.value
    
    //Renderiza as horas disponíveis
    hoursLoad({date})
}
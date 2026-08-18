import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
    //Limpa a lista de horários
    hours.innerHTML = ""
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        //Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return({
            hour,
            available: isHourPast
        })
})

//Renderizar os horários.

opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if (hour === "09:00"){
        hourHaderAdd("Manhã")
    } else if (hour === "13:00"){
        hourHaderAdd("Tarde")
    } else if (hour === "18:00"){
        hourHaderAdd("Noite")
    }
    
    hours.append(li)
})

//Adiciona o evento de clique nos horarios disponiveis.
hoursClick()
}

function hourHaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}
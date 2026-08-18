import { schedulesDay } from "../schedules/load"

//seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horarios quando  input mudar

selectedDate.onchange = () => {
    schedulesDay()
}
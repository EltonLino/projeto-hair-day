import {schedulesDay} from './load.js'
import{scheduleCancel} from '../../services/schedule-cancel.js'

const periods = document.querySelectorAll(".period")

//Gera evento de click para cada lista

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li do pai do elemento clicado.
            const item = event.target.closest("li")

            //PEga o Id do agendamento para remover
            const { id } = item.dataset
            
            if(id){
                //Confirma se realmente quer cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                //Remove e recarrega os agendamentos
                if (isConfirm) {
                await scheduleCancel({id})
                schedulesDay()
            }
            }
        }
    })
})
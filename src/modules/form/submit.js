import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega data atual.
selectedDate.value = inputToday

//Define a data mínima como sendo a data atual.
selectedDate.min = inputToday

    form.onsubmit = (event) => {
        //Previni comportamento padão de recarregar a página
        event.preventDefault()

        try {
            //Recuperando o nome do cliente
            const name = clientName.value.trim()
            if(!name){
                return alert("Informe o nome do cliente!")
            }

            //Recupera o horario selecionado
            const hourSelected = document.querySelector(".hour-selected")
            
            if (!hourSelected){
                return alert("Selecione a hora.")
            }

            //Recuperar somente a hora
            const [hour] = hourSelected.innerHTML.split(":")

            //Insere a hora na data
            const when = dayjs(selectedDate.value).add(hour , "hour")
            
            //gera um ID
            const id = new Date().getTime()

            console.log(
                id,
                name,
                when
            )
            
        } catch (error) {
            alert("Não foi possível realizar o agendamento.")
            console.log(error)
        }
    }

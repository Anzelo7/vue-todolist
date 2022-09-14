console.log('JS OK')


const app = new Vue({
    el: " #todosection ",
    data: {
        toDoItem: [
            {
                text: "Leggere 'Memorie di cieco'",
                done: false,
            },
            {
                text: "Pulire la moto",
                done: true,
            },
            {
                text: "Meditare",
                done: false,
            },
            {
                text: "Fare l'impasto per le tigelle",
                done: false,
            },
            {
                text: "Dare da mangiare al gatto",
                done: true,
            }
        ],
        inputToDo: ""
    },
    methods: {
        changeDoneProp: function (index) {
            this.toDoItem[index].done = !this.toDoItem[index].done
        },
        addToList: function () {
            let action = this.inputToDo.trim();
            action = action.toLowerCase()
            const actionToDo = action[0].toUpperCase() + action.slice(1);
            let newItme = {
                text: actionToDo,
                done: false
            }
            this.inputToDo = ""
            this.toDoItem.push(newItme)
        },
        deleteItem(position) {
            const newToDO = this.toDoItem.filter((element) => {
                return element !== this.toDoItem[position]
            })
            this.toDoItem = newToDO
            // this.toDoItem.splice(position, 1) -------altro metodo!
        }
    }
})

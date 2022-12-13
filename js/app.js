let usuario
let pass
let ingresoUsuario
let ingresoPass
let producto

let stockAntiparra = 500
let stockMalla = 350
let stockGorra = 400
let stockAleta = 200
let stockManopla = 200

// ARRAYS

let productos = [
    {
        id: 1,
        descripcion: "Antiparra",
        marca: ["Speedo", "Arena", "MP", "Hydro"],
        modelo1: { mod: "Aguas abiertas", precio: 4000 },
        modelo2: { mod: "Competición", precio: 10000 },
        modelo3: { mod: "Entrenamiento", precio: 5000 },
        Stock: 500


    },
    {
        id: 2,
        descripcion: "Malla",
        marca: ["Speedo", "Arena", "Hydro", "Dak"],
        modelo1: { mod: "Competición", precio: 50000 },
        modelo2: { mod: "Entrenamiento", precio: 12000 },
        Stock: 350
    },
    {
        id: 3,
        descripcion: "Gorra",
        marca: ["Speedo", "Arena", "MP", "Hydro"],
        modelo1: { mod: "Competición", precio: 4000 },
        modelo2: { mod: "Entrenamiento", precio: 3000 },
        modelo3: { mod: "Infantiles", precio: 1500 },
        Stock: 400
    },
    {
        id: 4,
        descripcion: "Aleta",
        marca: ["Speedo", "Arena", "Head"],
        modelo1: { mod: "Tradicionales", precio: 12000 },
        modelo2: { mod: "Estilo Pecho", precio: 6000 },
        modelo3: { mod: "Subacuático", precio: 5000 },
        Modelo: ["Tradicionales", "p/Pecho", "p/Subacuático"],
        Stock: 200
    },
    {
        id: 5,
        descripcion: "Manopla",
        marca: ["Speedo", "Arena", "Head"],
        modelo1: { mod: "Tradicionales", precio: 5000 },
        modelo2: { mod: "Estilo Mariposa", precio: 5000 },
        Stock: 200
    }
]

// DOM EVENTOS Y MANEJO DE INTERFAZ

let order = [];

document.addEventListener('DOMContentLoaded', () => {
    order = JSON.parse(localStorage.getItem('order'))

    //renderHTML()

    let lnkEnd = document.querySelector("#lnkStartEnd")

    lnkEnd.addEventListener('click', (evt) => {
    evt.preventDefault()
    order = [];
    localStorage.removeItem('order',JSON.stringify(order));
    updateCart();
})


    let lnkCancel = document.querySelector("#lnkStartOver")

    lnkCancel.addEventListener('click', (evt) => {
    evt.preventDefault()
    order = [];
    localStorage.removeItem('order',JSON.stringify(order));
    updateCart();
})

    const sports = document.querySelectorAll('.sport1')

for (let sport1 of sports) {
    sport1.addEventListener('click', (evt) => {
        //console.log(evt.currentTarget.dataset.title)
        //console.log(evt.currentTarget.dataset.price)
        let title = evt.currentTarget.dataset.title
        let price = evt.currentTarget.dataset.price


        order.push({ title, price })
        localStorage.setItem('order', JSON.stringify(order))
        updateCart()
    })
}

})



function updateCart() {
    let html = "";
    for (let sport1 of order) {
        html += `
        <li>${sport1.title} - ${sport1.price}</li>
        `
    }

    let ul = document.querySelector("#cart ul")
    ul.innerHTML = html

    let cart = document.querySelector('#cart');
    if (order.length == 0) {
        cart.getElementsByClassName.backgroundcolor = "gray"
    } else {
        cart.style.backgroundcolor = "#006"
    }
}

//Pop Up ventana compra

const btnAbrirModal=
document.querySelector("#lnkStartEnd");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal=
document.querySelector("#modal");


btnAbrirModal.addEventListener("click",()=> {
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})








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





















/*
let pedido = confirm("BIENVENIDO A AQUAWORLD! Desea realizar una compra?");
if (pedido) {
    alert("Para poder comprar productos en esta página necesitas crear un usuario y contraseña")
    crearUsuario()
    validarUsuario()
} else {
    alert("Muchas gracias, te esperamos la proxima!")
}


function crearUsuario() {

    do {
        usuario = prompt("Ingrese Nombre de Usuario")

        pass = prompt("Ingresar una Contraseña")

        if ((usuario == null || pass == null) && (usuario == "") || (pass == "")) {
            alert("Datos invalidos. Intente nuevamente")
        }
    }
    while (usuario == null || pass == null);
    alert("Usuario Creado. A continuación deberás reingresar con tu Usuario y Clave")
}

function validarUsuario() {

    ingresoUsuario = prompt("Ingresa tu Usuario");
    ingresoPass = prompt("Ingresa tu contraseña");
    if ((usuario === ingresoUsuario) && (pass === ingresoPass)) {
        alert("Bienvenido " + usuario)
        seleccionProductos()

    } else {
        alert("Los datos ingresados son incorrectos")
        validarUsuario()
    }
}

function seleccionProductos() {

    do {
        producto = prompt("\n Ingresar el número del producto que desea adquirir \n 1 - Antiparra \n 2 - Malla \n 3 - Gorra \n 4 - Aleta de Entrenamiento \n 5 - Manopla \n 0 - Salir")
        switch (producto) {
            case "1":
                alert("Seleccionaste Antiparra")
                listadoPrecios()
                break;
            case "2":
                alert("Seleccionaste Malla")
                listadoPrecios()
                break;
            case "3":
                alert("Seleccionaste Gorra")
                listadoPrecios()
                break;
            case "4":
                alert("Seleccionaste Aleta")
                listadoPrecios()
                break;
            case "5":
                alert("Seleccionaste Manopla")
                listadoPrecios()
                break;
            case "0":
                break;
            default:
                alert("opción no válida, seleccione nuevamente")
                seleccionProductos()
                break;
        }
    }

    while (producto != "1" && producto != "2" && producto != "3" && producto != "4" && producto != "5" && producto != "0")

}

//METODO FILTER

function listadoPrecios() {

    let listado = confirm("Desea ver el listado de modelos y precios?");
    switch (producto) {
        case "1":
            if (listado) {
                const resultado = productos.filter((prod) => prod.modelo1)
                const resultado2 = productos.filter((prod) => prod.modelo2)
                const resultado3 = productos.filter((prod) => prod.modelo3)
                alert(resultado[0].modelo1.mod+" $"+resultado[0].modelo1.precio + "\n" + resultado2[0].modelo2.mod+" $"+resultado2[0].modelo2.precio+ "\n" + resultado3[0].modelo3.mod+" $"+resultado3[0].modelo3.precio )
                cantidadProductos()
            } else {
                alert("Volverás a la selección de productos!")
                seleccionProductos()
            }
            break;
        case "2":
            if (listado) {
                const resultado = productos.filter((prod) => prod.modelo1)
                const resultado2 = productos.filter((prod) => prod.modelo2)
                alert(resultado[1].modelo1.mod+" $"+resultado[1].modelo1.precio + "\n" + resultado2[1].modelo2.mod+" $"+resultado2[1].modelo2.precio)
                cantidadProductos()
            } else {
                alert("Volverás a la selección de productos!")
                seleccionProductos()
            }
            break;
        case "3":
            if (listado) {
                const resultado = productos.filter((prod) => prod.modelo1)
                const resultado2 = productos.filter((prod) => prod.modelo2)
                const resultado3 = productos.filter((prod) => prod.modelo3)
                alert(resultado[2].modelo1.mod+" $"+resultado[2].modelo1.precio + "\n" + resultado2[2].modelo2.mod+" $"+resultado2[2].modelo2.precio+ "\n" + resultado3[2].modelo3.mod+" $"+resultado3[2].modelo3.precio )
                cantidadProductos()
            } else {
                alert("Volverás a la selección de productos!")
                seleccionProductos()
            }
            break;
        case "4":
            if (listado) {
                const resultado = productos.filter((prod) => prod.modelo1)
                const resultado2 = productos.filter((prod) => prod.modelo2)
                const resultado3 = productos.filter((prod) => prod.modelo3)
                alert(resultado[3].modelo1.mod+" $"+resultado[3].modelo1.precio + "\n" + resultado2[3].modelo2.mod+" $"+resultado2[3].modelo2.precio+ "\n" + resultado3[3].modelo3.mod+" $"+resultado3[3].modelo3.precio )
                cantidadProductos()
            } else {
                alert("Volverás a la selección de productos!")
                seleccionProductos()
            }
            break;
        case "5":
            if (listado) {
                const resultado = productos.filter((prod) => prod.modelo1)
                const resultado2 = productos.filter((prod) => prod.modelo2)
                alert(resultado[4].modelo1.mod+" $"+resultado[4].modelo1.precio + "\n" + resultado2[4].modelo2.mod+" $"+resultado2[4].modelo2.precio)
                cantidadProductos()
            } else {
                alert("Volverás a la selección de productos!")
                seleccionProductos()
            }
            break;
    }
}




function cantidadProductos() {
    
    let cantidad = Number(prompt("Ingrese cantidad del producto que desea comprar"));
    switch (producto) {
        case "1":
            if (cantidad <= stockAntiparra) {
                stockAntiparra = stockAntiparra - cantidad
                metodoPago()
            } else {
                alert("Solamente quedan " + stockAntiparra + " de antiparras disponibles")
                cantidadProductos()
            }
            break;
        case "2":
            if (cantidad <= stockMalla) {
                stockMalla = stockMalla - cantidad
                metodoPago()
            } else {
                alert("Solamente quedan " + stockMalla + " de Mallas disponibles")
                cantidadProductos()
            }
            break;
        case "3":
            if (cantidad <= stockGorra) {
                stockGorra = stockGorra - cantidad
                metodoPago()
            } else {
                alert("Solamente quedan " + stockGorra + " de Gorras disponibles")
                cantidadProductos()
            }
            break;
        case "4":
            if (cantidad <= stockAleta) {
                stockAleta = stockAleta - cantidad
                metodoPago()
            } else {
                alert("Solamente quedan " + stockAleta + " de Aletas disponibles")
                cantidadProductos()
            }
            break;
        case "5":
            if (cantidad <= stockManopla) {
                stockManopla = stockManopla - cantidad
                metodoPago()
            } else {
                alert("Solamente quedan " + stockManopla + " de Manoplas disponibles")
                cantidadProductos()
            }
            break;
    }

}

function metodoPago() {

    let metodoPago = prompt("Ingresar medio de pago \n 1 - Efectivo \n 2 - Transferencia \n 3 - Cheque \n 4 - Tarjeta de Crédito")


    switch (metodoPago) {
        case "1":
            alert("Pagaste con efectivo")
            break;
        case "2":
            alert("Pagaste con cheque")
            break;
        case "3":
            alert("Pagaste con cheque")
            break;
        case "4":
            alert("Pagaste con Tarjeta de Crédito")
            break;
        default:
            alert("Metodo de pago incorrecto, ingresa la forma de pago de forma numerica. Gracias!")
            metodoPago()
            break;
    }
}


*/

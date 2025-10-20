const IVA = 0.19

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let productos = []

function validarNumPositivo(valor) {
    const numero = parseFloat(valor)
    return !isNaN(numero) && numero > 0
}

function solicitarPro() {
    rl.question("Ingrese el precio del producto: ", (precioInput) => {
        if (!validarNumPositivo(precioInput)) {
            console.log("Error,el precio debe ser un numero positivo. Intentelo otra vez.")
            solicitarPro()
            return
        }
        
        const precio = parseFloat(precioInput)
        
        rl.question("Ingrese la cantidad de unidades: ", (cantidadInput) => {
            if (!validarNumPositivo(cantidadInput)) {
                console.log("Error,la cantidad debe ser un numero positivo. Intentelo otra vez.")
                solicitarPro()
                return
            }
            
            const cantidad = parseInt(cantidadInput)
            
            const totalParcial = precio * cantidad
            
            productos.push({
                precio: precio,
                cantidad: cantidad,
                totalParcial: totalParcial
            })
            
            console.log(`Producto agregado - Total parcial: $${totalParcial.toLocaleString('es-CO')}`)
            
            rl.question("Desea agregar otro producto? (s/n): ", (respuesta) => {
                if (respuesta.toLowerCase() === 's' || respuesta.toLowerCase() === 'si') {
                    solicitarPro()
                } else {
                    mostrarResumen()
                }
            })
        })
    })
}

function mostrarResumen() {
    console.log("\n" + "=".repeat(50));
    console.log("           RESUMEN DE LA VENTA")
    console.log("=".repeat(50))
    
    console.log("Detalle de productos:")
    productos.forEach((producto, index) => {
        console.log(`Producto ${index + 1}:`)
        console.log(`  Precio: $${producto.precio.toLocaleString('es-CO')}`)
        console.log(`  Cantidad: ${producto.cantidad} unidades`)
        console.log(`  Total parcial: $${producto.totalParcial.toLocaleString('es-CO')}`)
    })
    
    const subtotal = productos.reduce((suma, producto) => suma + producto.totalParcial, 0)
    
    const valorIVA = subtotal * IVA
    
    const totalPagar = subtotal + valorIVA
    
    console.log("\n" + "-".repeat(50))
    console.log(`Subtotal:           $${subtotal.toLocaleString('es-CO')}`)
    console.log(`IVA (19%):          $${valorIVA.toLocaleString('es-CO')}`)
    console.log("-".repeat(50))
    console.log(`TOTAL A PAGAR:      $${totalPagar.toLocaleString('es-CO')}`)
    console.log("=".repeat(50))
    
    rl.close()
}

console.log("SISTEMA DE REGISTRO DE VENTAS")
solicitarPro()
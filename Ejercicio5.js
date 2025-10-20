const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inventario = [];

function aggProducto() {
    rl.question("Ingrese el codigo del producto: ", (codigo) => {
        const existe = inventario.some(producto => producto.codigo === codigo)
        
        if (existe) {
            console.log("Error,ya existe un producto con ese codigo")
            menuPrincipal()
            return
        }
        
        rl.question("Ingrese el nombre del producto: ", (nombre) => {
            rl.question("Ingrese el precio: ", (precioInput) => {
                const precio = parseFloat(precioInput)
                
                if (isNaN(precio) || precio <= 0) {
                    console.log("Error, el precio debe ser un numero positivo")
                    menuPrincipal()
                    return
                }
                
                rl.question("Ingrese el stock: ", (stockInput) => {
                    const stock = parseInt(stockInput)
                    
                    if (isNaN(stock) || stock < 0) {
                        console.log("Error,el stock debe ser un numero positivo o cero")
                        menuPrincipal()
                        return
                    }
                    
                    const estado = stock > 0 ? "Disponible" : "Agotado"
                    
                    const nuevoProducto = {
                        codigo: codigo,
                        nombre: nombre,
                        precio: precio,
                        stock: stock,
                        estado: estado
                    };
                    
                    inventario.push(nuevoProducto);
                    console.log(`Producto "${nombre}" agregado exitosamente`)
                    menuPrincipal()
                })
            })
        })
    })
}

function actualizarStock() {
    rl.question("Ingrese el codigo del producto a actualizar: ", (codigo) => {
        const producto = inventario.find(p => p.codigo === codigo)
        
        if (!producto) {
            console.log("Error,no se encontro producto con ese codigo")
            menuPrincipal()
            return
        }
        
        console.log(`Producto encontrado: ${producto.nombre}`)
        console.log(`Stock actual: ${producto.stock} unidades`)
        
        rl.question("Ingrese el nuevo stock: ", (nuevoStockInput) => {
            const nuevoStock = parseInt(nuevoStockInput)
            
            if (isNaN(nuevoStock) || nuevoStock < 0) {
                console.log("Error,el stock debe ser un numero positivo o cero")
                menuPrincipal()
                return
            }
            
            producto.stock = nuevoStock;
            producto.estado = nuevoStock > 0 ? "Disponible" : "Agotado"
            
            console.log(`Stock actualizado exitosamente`)
            console.log(`Nuevo stock: ${producto.stock} unidades`)
            console.log(`Estado: ${producto.estado}`)
            menuPrincipal()
        })
    })
}

function listProductos() {
    if (inventario.length === 0) {
        console.log("El inventario está vacío")
        menuPrincipal()
        return
    }
    
    const ordenProducto = [...inventario].sort((a, b) => {
        return a.nombre.localeCompare(b.nombre)
    })
    
    console.log("\n" + "=".repeat(60))
    console.log("     INVENTARIO DE PRODUCTOS (ordenado alfabéticamente)")
    console.log("=".repeat(60))
    
    ordenProducto.forEach((producto, index) => {
        console.log(`\n${index + 1}. ${producto.nombre}`)
        console.log(`   Codigo: ${producto.codigo}`)
        console.log(`   Precio: $${producto.precio.toLocaleString('es-CO')}`)
        console.log(`   Stock: ${producto.stock} unidades`)
        console.log(`   Estado: ${producto.estado}`)
    })
    
    console.log("\n" + "=".repeat(60))
    menuPrincipal()
}

function menuPrincipal() {
    console.log("SISTEMA DE GESTIÓN DE INVENTARIO")
    console.log("1. Agregar nuevo producto")
    console.log("2. Actualizar stock de producto")
    console.log("3. Listar productos")
    console.log("4. Salir")
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                aggProducto()
                break
            case "2":
                if (inventario.length === 0) {
                    console.log("No hay productos en el inventario")
                    menuPrincipal()
                } else {
                    actualizarStock()
                }
                break;
            case "3":
                listProductos()
                break;
            case "4":
                console.log("Saiendo del sistema")
                rl.close()
                break
            default:
                console.log("Opcion inválida")
                menuPrincipal()
        }
    })
}

menuPrincipal()
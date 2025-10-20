const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let estudiantes = [
    { cedula: "1234567890", nombre: "Juan Jose", apellido: "Perez Gomez", edad: 20, carrera: "Ingenieria, Quimica"},
    { cedula: "0987654321", nombre: "Maria Fernanda", apellido: "Gonzales Piedrosa", edad: 22, carrera: "Medicina, Psicologia"},
    { cedula: "1122334455", nombre: "Carlos Andres", apellido:"Rodriguez Navarro", edad: 21, carrera: "Derecho, Politologia"},
    { cedula: "5566778899", nombre: "Ana Maria", apellido: "Martinez Pitalua", edad: 23, carrera: "Arquitectura, Diseño Grafico"}
]

function aggEstudiante() {
    rl.question("Ingrese la CC: ", (cedula) => {
        const existe = estudiantes.find(est => est.cedula === cedula)
        
        if (existe) {
            console.log("Error,ya existe un estudiante con esa CC")
            menuPrincipal()
            return
        }
        
        rl.question("Ingrese el nombre: ", (nombre) => {
            rl.question("Ingrese el apellido: ", (apellido) => {
                rl.question("Ingrese la edad: ", (edad) => {
                    rl.question("Ingrese la carrera: ", (carrera) => {
                        const nuevoEstudiante = {
                            cedula: cedula,
                            nombre: nombre,
                            apellido: apellido,
                            edad: parseInt(edad),
                            carrera: carrera
                        }
                        
                        estudiantes.push(nuevoEstudiante);
                        console.log("Estudiante agregado correctamente")
                        menuPrincipal()
                    })
                })
            })
        })
    })
}

function listEstudiantes() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados");
        menuPrincipal();
        return;
    }
    
    const ordenEstudiante = [...estudiantes].sort((a, b) => {
        return a.apellido.localeCompare(b.apellido);
    });
    
    console.log("\n" + "=".repeat(60));
    console.log("   LISTA DE ESTUDIANTES (orden por apellido)");
    console.log("=".repeat(60));
    
    ordenEstudiante.forEach((est, index) => {
        console.log(`${index + 1}. ${est.apellido}, ${est.nombre}`);
        console.log(`   Cedula: ${est.cedula}`);
        console.log(`   Edad: ${est.edad} años`);
        console.log(`   Carrera: ${est.carrera}`);
    });
    
    console.log("\n" + "=".repeat(60));
    menuPrincipal();
}

function buscarEstudiante() {
    rl.question("Ingrese el numero de cedula a buscar: ", (cedula) => {
        const estudiante = estudiantes.find(est => est.cedula === cedula)
        
        if (estudiante) {
            console.log("ESTUDIANTE ENCONTRADO")
            console.log(`Nombre completo: ${estudiante.nombre} ${estudiante.apellido}`)
            console.log(`CC: ${estudiante.cedula}`)
            console.log(`Edad: ${estudiante.edad} años`)
            console.log(`Carrera: ${estudiante.carrera}`)
        } else {
            console.log("No se encontró estudiante con esa CC")
        }
        
        menuPrincipal()
    })
}

function actualizarEstudiante() {
    rl.question("Ingrese la CC del estudiante a actualizar: ", (cedula) => {
        const index = estudiantes.findIndex(est => est.cedula === cedula)
        
        if (index === -1) {
            console.log("No se encontró estudiante con esa CC")
            menuPrincipal()
            return
        }
        
        const estudiante = estudiantes[index];
        console.log(`Estudiante encontrado: ${estudiante.nombre} ${estudiante.apellido}`)
        console.log("Deje en blanco los campos que no desea modificar")
        
        rl.question(`Nombre (actual: ${estudiante.nombre}): `, (nombre) => {
            rl.question(`Apellido (actual: ${estudiante.apellido}): `, (apellido) => {
                rl.question(`Edad (actual: ${estudiante.edad}): `, (edad) => {
                    rl.question(`Carrera (actual: ${estudiante.carrera}): `, (carrera) => {
                        
                        if (nombre.trim() !== "") estudiantes[index].nombre = nombre
                        if (apellido.trim() !== "") estudiantes[index].apellido = apellido
                        if (edad.trim() !== "") estudiantes[index].edad = parseInt(edad)
                        if (carrera.trim() !== "") estudiantes[index].carrera = carrera
                        
                        console.log("Estudiante actualizado correctamente")
                        menuPrincipal()
                    })
                })
            })
        })
    })
}

function eliminarEstudiante() {
    rl.question("Ingrese la CC del estudiante a eliminar: ", (cedula) => {
        const index = estudiantes.findIndex(est => est.cedula === cedula)
        
        if (index === -1) {
            console.log("No se encontró estudiante con esa CC")
            menuPrincipal()
            return
        }
        
        const eliminado = estudiantes[index];
        
        rl.question(`Esta seguro de eliminar a ${eliminado.nombre} ${eliminado.apellido}? (s/n): `, (confirmar) => {
            if (confirmar.toLowerCase() === 's' || confirmar.toLowerCase() === 'si') {
                estudiantes.splice(index, 1)
                console.log(`Estudiante ${eliminado.nombre} ${eliminado.apellido} eliminado correctamente`)
            } else {
                console.log("Operación cancelada")
            }
            menuPrincipal()
        })
    })
}

function menuPrincipal() {
    console.log("SISTEMA DE GESTIÓN DE ESTUDIANTES")
    console.log("1. Agregar nuevo estudiante")
    console.log("2. Listar estudiantes (orden por apellido)")
    console.log("3. Buscar estudiante por CC")
    console.log("4. Actualizar datos del estudiante")
    console.log("5. Eliminar estudiante")
    console.log("6. Salir");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                aggEstudiante()
                break
            case "2":
                listEstudiantes()
                break
            case "3":
                buscarEstudiante()
                break
            case "4":
                actualizarEstudiante()
                break
            case "5":
                eliminarEstudiante()
                break
            case "6":
                console.log("Saliendo del sistema")
                rl.close()
                break;
            default:
                console.log("Opción inválida")
                menuPrincipal()
        }
    });
}

menuPrincipal()
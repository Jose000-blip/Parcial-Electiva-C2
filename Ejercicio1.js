const estudiantes = [
    { cedula: "1234567890", nombre: "Juan Jose", apellido: "Perez Gomez", edad: 20, carrera: "Ingenieria, Quimica"},
    { cedula: "0987654321", nombre: "Maria Fernanda", apellido: "Gonzales Piedrosa", edad: 22, carrera: "Medicina, Psicologia"},
    { cedula: "1122334455", nombre: "Carlos Andres", apellido:"Rodriguez Navarro", edad: 21, carrera: "Derecho, Politologia"},
    { cedula: "5566778899", nombre: "Ana Maria", apellido: "Martinez Pitalua", edad: 23, carrera: "Arquitectura, Diseño Grafico"}
]
function buscarEstudiante(cedula){
    const estudiante = estudiantes.find(est => est.cedula===cedula)

    if (estudiante) {
        return estudiante
    }else{
        return "No se encontro ningun estudiante con ese numero de cedula"
    }
}

console.log("Buscar #CC del estudiante")
console.log("Buscando CC1234567890:")
console.log(buscarEstudiante("1234567890"))

console.log("Buscando CC9999999999")
console.log(buscarEstudiante("9999999999"))
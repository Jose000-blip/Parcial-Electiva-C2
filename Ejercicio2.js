let libros = [];

function aggLibro(titulo, autor, anio, isbn) {
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        año: año,
        isbn: isbn
    }
    
    libros.push(nuevoLibro);
    console.log("Se ha agregado el libro ")
}

function listLibros() {
    if (libros.length === 0) {
        console.log("No hay libros registrados")
        return;
    }
    
    console.log("Lista de libros");
    libros.forEach((libro, index) => {
        console.log(`Libro ${index + 1}:`)
        console.log(`Título: ${libro.titulo}`)
        console.log(`Autor: ${libro.autor}`)
        console.log(`Año: ${libro.año}`)
        console.log(`ISBN: ${libro.isbn}`)
    })
}


function buscarTitulo(titulo) {
    const resultados = libros.filter(libro => 
        libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    )
    
    if (resultados.length === 0) {
        console.log("No se encontraron libros con ese título");
    } else {
        console.log(`Se encontraron ${resultados.length} libro:`)
        resultados.forEach(libro => {
            console.log(`- ${libro.titulo} por ${libro.autor}`)
        })
    }
    
    return resultados
}

function buscarAutor(autor) {
    const resultados = libros.filter(libro => 
        libro.autor.toLowerCase().includes(autor.toLowerCase())
    )
    
    if (resultados.length === 0) {
        console.log("No se encontraron libros de ese autor")
    } else {
        console.log(`Se encontro ${resultados.length} libro:`)
        resultados.forEach(libro => {
            console.log(`- ${libro.titulo} (${libro.año})`)
        })
    }
    
    return resultados;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menuPrincipal() {
    console.log("GESTIÓN DE LIBROS");
    console.log("1. Agregar libro");
    console.log("2. Listar todos los libros");
    console.log("3. Buscar por título");
    console.log("4. Buscar por autor");
    console.log("5. Salir");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                aggLibro()
                break
            case "2":
                listLibros()
                menuPrincipal()
                break
            case "3":
                buscarTitulo()
                break
            case "4":
                buscarAutor()
                break
            case "5":
                console.log("Saliendo del sistema")
                rl.close()
                break
            default:
                console.log("Opción inválida")
                menuPrincipal()
        }
    })
}

function aggLibro() {
    rl.question("Ingrese el título del libro: ", (titulo) => {
        rl.question("Ingrese el autor: ", (autor) => {
            rl.question("Ingrese el año de publicación: ", (año) => {
                rl.question("Ingrese el ISBN: ", (isbn) => {
                    agregarLibro(titulo, autor, anio, isbn);
                    menuPrincipal();
                })
            })
        })
    })
}

function buscarTitulo() {
    rl.question("Ingrese el título a buscar: ", (titulo) => {
        buscarPorTitulo(titulo)
        menuPrincipal()
    })
}

function buscarAutor() {
    rl.question("Ingrese el autor a buscar: ", (autor) => {
        buscarAutor(autor)
        menuPrincipal()
    })
}

menuPrincipal()
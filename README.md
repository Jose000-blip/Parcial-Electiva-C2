# Segundo Parcial - Electiva Tecnológica

## Descripción

Este repositorio contiene la solución al segundo parcial práctico de la asignatura Electiva, que consiste en 5 ejercicios de programación en JavaScript enfocados en el manejo de arrays y objetos.

## Contenido

### Ejercicio 1: Búsqueda de Estudiantes
Función que busca y devuelve un estudiante por su número de cédula en un array de objetos.

**Archivo:** `ejercicio1.js`

### Ejercicio 2: Sistema de Gestión de Libros
Sistema completo para agregar, listar y buscar libros por título o autor. Permite almacenar información de título, autor, año de publicación e ISBN.

**Archivo:** `ejercicio2.js`

### Ejercicio 3: CRUD de Estudiantes
Implementación completa de operaciones para gestionar estudiantes:
- Agregar nuevo estudiante
- Listar estudiantes ordenados por apellido
- Buscar por número de identificación
- Actualizar datos
- Eliminar estudiante

**Archivo:** `ejercicio3.js`

### Ejercicio 4: Sistema de Ventas con IVA
Programa para registrar ventas de productos que:
- Solicita precio y cantidad de múltiples productos
- Valida datos positivos
- Calcula subtotal, IVA (19%) y total a pagar
- IVA declarado como constante

**Archivo:** `ejercicio4.js`

### Ejercicio 5: Gestión de Inventario
Sistema de inventario con las siguientes funcionalidades:
- Agregar productos con validación de código único
- Actualizar stock por código de producto
- Listar productos ordenados alfabéticamente
- Cada producto incluye: código, nombre, precio, stock y estado

**Archivo:** `ejercicio5.js`

## Requisitos

- Node.js instalado (versión 14 o superior)

## Ejecución

Para ejecutar cualquier ejercicio, usar el siguiente comando en la terminal:

```bash
node ejercicio[numero].js
```

Ejemplo:
```bash
node ejercicio1.js
node ejercicio2.js
```

## Estructura de Datos

Los ejercicios utilizan arrays de objetos con las siguientes estructuras:

**Estudiantes:**
```javascript
{ cedula, nombre, apellido, edad, carrera }
```

**Libros:**
```javascript
{ titulo, autor, anioPublicacion, isbn }
```

**Productos:**
```javascript
{ codigo, nombre, precio, stock, estado }
```

## Notas Técnicas

- Se utiliza el módulo `readline` de Node.js para la entrada de datos
- Validación de datos implementada en todos los ejercicios
- Código desarrollado siguiendo las especificaciones del examen

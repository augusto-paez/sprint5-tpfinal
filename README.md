# Países Hispanohablantes de América

Aplicación web desarrollada con Node.js, Express, MongoDB y EJS que consume la API de RestCountries, filtra los países hispanohablantes de América y permite gestionarlos mediante un CRUD completo.

---

## Objetivos

- Consumir una API externa (RestCountries) y procesar sus datos.
- Filtrar países de América que tengan español como idioma.
- Almacenar los datos en MongoDB con una estructura limpia y consistente.
- Implementar un dashboard web con operaciones CRUD completas.
- Aplicar validaciones robustas en backend.
- Seguir una arquitectura MVC con capas (Controller → Service → Repository → Model).

---

## Tecnologías usadas

- Node.js
- Express
- MongoDB / Mongoose
- EJS + express-ejs-layouts
- express-validator

---

## Pasos de ejecución

### 1. Clonar el repositorio

```
git clone https://github.com/augusto-paez/sprint5-tpfinal.git
cd sprint5-tpfinal
```

### 2. Instalar dependencias

```
npm install
```

### 3. Iniciar el servidor

```
cd src/
node app.mjs
```

### 4. Cargar los países desde la API

Una vez que el servidor esté corriendo, ejecutar este endpoint desde Postman:
POST http://localhost:3000/paises/cargar
Esto carga los países hispanohablantes de América en la base de datos. Solo es necesario hacerlo una vez.

### 5. Abrir la aplicación

http://localhost:3000

---

## Endpoints disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Dashboard con tabla de países |
| GET | `/paises` | Todos los países (JSON) |
| GET | `/paises/buscar?nombre=` | Buscar por nombre (JSON) |
| GET | `/paises/region/:region` | Filtrar por región (JSON) |
| GET | `/paises/:id` | Detalle por ID (JSON) |
| POST | `/paises/cargar` | Cargar países desde RestCountries |
| POST | `/paises/agregar` | Agregar país nuevo |
| PUT | `/paises/:id` | Actualizar país |
| DELETE | `/paises/:id` | Eliminar país |

---

## Autor

- **Nombre:** Augusto Paez
- **Grupo:** 10
- **Curso:** Full Stack - Módulo 3
- **Repositorio:** [github.com/augusto-paez/sprint5-tpfinal](https://github.com/augusto-paez/sprint5-tpfinal)
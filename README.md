# Monster Factory API

Monster Factory API es la evolución del proyecto **Monster Factory**. En la primera versión el programa permitía consultar y filtrar un archivo de monstruos desde TypeScript. En esta segunda versión, el mismo universo se convierte en una API REST construida con Node.js, Express y TypeScript.

La API trabaja con datos en memoria, por lo que no utiliza una base de datos todavía. Permite listar, consultar, crear, actualizar y eliminar monstruos, además de validar la información recibida y manejar errores desde un middleware centralizado.

## Recurso principal

Cada monstruo contiene:

- `id`: identificador numérico.
- `nombre`: nombre del monstruo.
- `color`: azul, morado, amarillo o verde.
- `ojos`: cantidad de ojos.
- `personalidad`: amigable, divertido, tímido o peligroso.
- `habilidad`: poder principal.
- `rareza`: común, raro o legendario.

## Tecnologías

- Node.js
- Express.js
- TypeScript
- Git y GitHub

## Estructura

```text
src/
├── controllers/
│   └── monstruo.controller.ts
├── data/
│   └── monstruos.data.ts
├── middlewares/
│   ├── error.middleware.ts
│   ├── logger.middleware.ts
│   ├── request-id.middleware.ts
│   ├── validate-id.middleware.ts
│   └── validate-monstruo.middleware.ts
├── models/
│   └── monstruo.model.ts
├── routes/
│   └── monstruo.routes.ts
├── services/
│   └── monstruo.service.ts
├── types/
│   └── express.d.ts
├── utils/
│   └── app-error.ts
├── app.ts
└── server.ts
```

La separación por capas permite que cada archivo tenga una responsabilidad clara. Las rutas definen los endpoints, los controladores reciben las peticiones, los servicios manejan la lógica y los middlewares realizan tareas comunes antes o después de los controladores.

## Instalación

Clonar el repositorio y entrar en la carpeta:

```bash
git clone https://github.com/paulaahr/Monster-Factory-API.git
cd Monster-Factory-API
```

Instalar dependencias:

```bash
npm install
```

## Comandos

Ejecutar en desarrollo:

```bash
npm run dev
```

Compilar TypeScript:

```bash
npm run build
```

Ejecutar la versión compilada:

```bash
npm start
```

La API se ejecuta por defecto en:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint | Descripción | Código principal |
| --- | --- | --- | --- |
| GET | `/api/monstruos` | Lista todos los monstruos | 200 |
| GET | `/api/monstruos/:id` | Obtiene un monstruo por id | 200 / 404 |
| POST | `/api/monstruos` | Crea un monstruo | 201 / 400 |
| PUT | `/api/monstruos/:id` | Actualiza un monstruo completo | 200 / 400 / 404 |
| DELETE | `/api/monstruos/:id` | Elimina un monstruo | 204 / 404 |

## Middlewares personalizados

### Request ID

Cada petición recibe un identificador único con `randomUUID()`. También se envía en el header `x-request-id` y aparece en los errores para poder relacionar una respuesta con el registro del servidor.

### Logger

Registra en consola el request id, método HTTP, ruta, código de respuesta y tiempo aproximado de la petición.

Ejemplo:

```text
[4e31...] GET /api/monstruos 200 - 3ms
```

### Validación

Antes de crear o actualizar un monstruo se comprueba que los campos obligatorios existan y que los valores respeten los tipos definidos para color, personalidad y rareza. También se valida que los ids sean enteros positivos.

### Manejo centralizado de errores

Los errores pasan a un único middleware final. De esta manera los controladores no construyen respuestas de error diferentes entre sí y la API mantiene un formato consistente.

Ejemplo:

```json
{
  "error": {
    "message": "Monstruo no encontrado",
    "requestId": "4e31..."
  }
}
```

## Pruebas manuales

Los ejemplos completos de `GET`, `POST`, `PUT`, `DELETE`, validación y errores se encuentran en [`requests.md`](./requests.md).

## Flujo Git 

Rama principal:

```text
main
```

Rama de desarrollo del entregable:

```text
feature/monster-api```

## Relación con el proyecto anterior

El proyecto conserva el concepto, los monstruos y los tipos principales de la primera versión de Monster Factory. La diferencia es que ahora esa información puede consultarse y modificarse mediante peticiones HTTP, separando las responsabilidades del backend en rutas, controladores, servicios y middlewares.

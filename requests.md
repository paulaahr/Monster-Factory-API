# Pruebas manuales - Monster Factory API

Base URL:

```text
http://localhost:3000/api/monstruos
```

Las pruebas se pueden realizar en Postman, Thunder Client o con `curl`.

## 1. GET - Listar monstruos

```http
GET /api/monstruos
```

Respuesta esperada: `200 OK`

```json
{
  "data": [
    {
      "id": 1,
      "nombre": "Gloop",
      "color": "azul",
      "ojos": 5,
      "personalidad": "amigable",
      "habilidad": "Teletransportación",
      "rareza": "común"
    }
  ]
}
```

## 2. GET - Obtener monstruo por id

```http
GET /api/monstruos/1
```

Respuesta esperada: `200 OK`

```json
{
  "data": {
    "id": 1,
    "nombre": "Gloop",
    "color": "azul",
    "ojos": 5,
    "personalidad": "amigable",
    "habilidad": "Teletransportación",
    "rareza": "común"
  }
}
```

## 3. POST - Crear monstruo

```http
POST /api/monstruos
Content-Type: application/json
```

Body:

```json
{
  "nombre": "Fizz",
  "color": "verde",
  "ojos": 3,
  "personalidad": "divertido",
  "habilidad": "Crear burbujas explosivas",
  "rareza": "raro"
}
```

Respuesta esperada: `201 Created`

```json
{
  "data": {
    "id": 11,
    "nombre": "Fizz",
    "color": "verde",
    "ojos": 3,
    "personalidad": "divertido",
    "habilidad": "Crear burbujas explosivas",
    "rareza": "raro"
  }
}
```

## 4. PUT - Actualizar monstruo

```http
PUT /api/monstruos/2
Content-Type: application/json
```

Body:

```json
{
  "nombre": "Momo",
  "color": "morado",
  "ojos": 8,
  "personalidad": "amigable",
  "habilidad": "Control mental",
  "rareza": "legendario"
}
```

Respuesta esperada: `200 OK`

## 5. DELETE - Eliminar monstruo

```http
DELETE /api/monstruos/3
```

Respuesta esperada: `204 No Content`

## 6. Error de validación

```http
POST /api/monstruos
Content-Type: application/json
```

Body inválido:

```json
{
  "nombre": "Errorcito",
  "color": "rosado",
  "ojos": 0,
  "personalidad": "feliz",
  "habilidad": "",
  "rareza": "ultra"
}
```

Respuesta esperada: `400 Bad Request`. El cuerpo devuelve un mensaje de error y el `requestId` generado por middleware.

## 7. Recurso inexistente

```http
GET /api/monstruos/999
```

Respuesta esperada: `404 Not Found`

```json
{
  "error": {
    "message": "Monstruo no encontrado",
    "requestId": "..."
  }
}
```

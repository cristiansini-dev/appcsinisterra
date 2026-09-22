# API Mundial — Express + JWT

API REST con autenticación JWT (un único usuario) para consultar resultados de
partidos del Mundial y la programación de los partidos pendientes.

> **Nota:** los datos de equipos y partidos en `src/data/` son de **ejemplo**
> (placeholder), para que la API tenga algo con qué responder. En un caso real
> deberías reemplazarlos por una base de datos o por una API externa de
> fútbol (ej. football-data.org, API-Football, etc.).

## 1. Instalación

```bash
npm install
cp .env.example .env
```

Edita `.env` si quieres cambiar el usuario/contraseña, el puerto o el secreto
del JWT. Por defecto:

```
AUTH_USERNAME=admin
AUTH_PASSWORD=admin123
```

## 2. Ejecutar

```bash
npm start       # producción
npm run dev     # con nodemon, reinicia al guardar cambios
```

El servidor queda en `http://localhost:3000`.

## 3. Autenticación

Todos los endpoints bajo `/api/matches`, `/api/groups` y `/api/teams` exigen
un JWT válido en el header `Authorization`. El único endpoint público es el
login.

### Obtener el token

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

Respuesta:

```json
{ "token": "eyJhbGciOi...", "tokenType": "Bearer", "expiresIn": "1h" }
```

### Usar el token

En cada request a un endpoint protegido:

```bash
curl http://localhost:3000/api/matches/results \
  -H "Authorization: Bearer eyJhbGciOi..."
```

Si el token falta, es inválido o expiró, la API responde `401`.

## 4. Endpoints

### Auth (público)

| Método | Ruta              | Descripción                          |
|--------|-------------------|---------------------------------------|
| POST   | `/api/auth/login` | Inicia sesión y devuelve el JWT       |

### Partidos (requieren token)

| Método | Ruta                    | Descripción                                                    |
|--------|-------------------------|------------------------------------------------------------------|
| GET    | `/api/matches`          | Todos los partidos. Filtros opcionales: `?status=`, `?group=`, `?stage=`, `?team=` |
| GET    | `/api/matches/results`  | Solo partidos **finalizados** (con resultado)                  |
| GET    | `/api/matches/upcoming` | Programación de partidos **pendientes** (ordenados por fecha)  |
| GET    | `/api/matches/live`     | Partidos **en vivo** en este momento                           |
| GET    | `/api/matches/:id`      | Detalle de un partido puntual                                   |

Ejemplos:

```bash
curl -H "Authorization: Bearer <token>" \
  "http://localhost:3000/api/matches/upcoming"

curl -H "Authorization: Bearer <token>" \
  "http://localhost:3000/api/matches?status=finalizado&group=A"

curl -H "Authorization: Bearer <token>" \
  "http://localhost:3000/api/matches?team=Argentina"
```

### Grupos (requieren token)

| Método | Ruta                 | Descripción                                            |
|--------|----------------------|---------------------------------------------------------|
| GET    | `/api/groups`        | Todos los grupos con su tabla de posiciones             |
| GET    | `/api/groups/:group` | Detalle de un grupo (equipos, tabla y partidos), ej. `/api/groups/A` |

### Equipos (requieren token)

| Método | Ruta                       | Descripción                              |
|--------|----------------------------|--------------------------------------------|
| GET    | `/api/teams`               | Listado de equipos                          |
| GET    | `/api/teams/:name/matches` | Todos los partidos (jugados y por jugar) de un equipo, ej. `/api/teams/México/matches` |

## 5. Estructura del proyecto

```
src/
  config/          # lectura de variables de entorno
  controllers/      # lógica de cada recurso
  data/             # datos de ejemplo (equipos y partidos)
  middleware/        # verificación de JWT
  routes/            # definición de rutas por recurso
  utils/             # cálculo de tabla de posiciones
  server.js          # punto de entrada, monta todo
```

## 6. Siguientes pasos sugeridos

- Reemplazar `src/data/matches.js` y `src/data/teams.js` por una base de datos real (PostgreSQL, MongoDB, etc.) o por consumo de una API de fútbol en vivo.
- Agregar refresh tokens si necesitas sesiones más largas sin reducir la seguridad del access token.
- Agregar rate limiting (`express-rate-limit`) en `/api/auth/login` para mitigar ataques de fuerza bruta.

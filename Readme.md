# Nombre del Proyecto

Arquitectura de microservicios utilizando Node.js, Express, MongoDB y Docker

## Requisitos Previos

Node.js (vXX.XX.X)
Docker (vXX.XX.X)
MongoDB (vXX.XX.X)

## Configuración

## Configuración de MongoDB

### Uso

## Estructura del Proyecto

/servicio1: Descripción del servicio 1.
/servicio2: Descripción del servicio 2.
/servicio3: Descripción del servicio 3.
/servicio4: Descripción del servicio 4.

## Contribuciones

## Licencia

## Contacto

Información de contacto para preguntas o consultas.

## Rutas Character:

[✅] GET - http://localhost:8000/characters
[✅] POST - http://localhost:8000/characters/create
{
"\_id": "1000",
"name": "Pablo daniel",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "1991",
"gender": "male",
"homeworld": "1",
"films": "3"
}
[] PUT - http://localhost:8000/characters/update/:\_id
[] DELETE - http://localhost:8000/characters/delete/:\_id

## Rutas Film:

[] GET - http://localhost:8000/films/
[] POST - http://localhost:8000/films/create
[] PUT - http://localhost:8000/films/update/:id _Cambiar a \_id_
[] DELETE - http://localhost:8000/films/delete/:id _Cambiar a \_id_

## Rutas Planet:

_Terminar todas las rutas_
[] GET - http://localhost:8000/planets/
[] POST - http://localhost:8000/planets/
[] PUT - http://localhost:8000/planets/
[] DELETE - http://localhost:8000/planets/

## Rutas Gateway:

_Se usan las respectivas rutas de cada container_
[] - http://localhost:8000/characters/
[] - http://localhost:8000/films/
[] - http://localhost:8000/planets/
[] - http://localhost:8000/database/

## Rutas database:

[] GET - http://localhost:8000/database/:model
[] GET - http://localhost:8000/database/:model/:id
[] POST - http://localhost:8000/database/:model/create
[] PUT - http://localhost:8000/database/:model/update/:\_id
[] DELETE - http://localhost:8000/database//:model/delete/:\_id

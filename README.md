# Proyecto  IV 
***
***

## **Idea inicial** :bulb:

Con este proyecto se pretende ofrecer sugerencias al usuario según sus preferencias y el contexto en el que se encuentre.
## **Descripción** :scroll:

El problema que va a tratar de solucionarse con esta aplicación es un problema que nos encontramos en el día a día. A veces, salimos a la calle y no sabemos qué plan hacer o a qué lugar ir a tomar algo. Otras veces, simplemente, no sabemos todas las opciones de actividades disponibles que existen por una determinada zona de la ciudad.
Con esta aplicación se podrá conocer la zona a la que el usuario quiere ir, el tipo de plan que quiere hacer (comida/cena en bares/restaurantes, meriendas, actividades culturales, ocio, turismo...), el presupuesto del que dispone... Todas estas preferencias se procesarán y se ofrecerá la opción que mejor se adecúe al usuario.

**Cómo abordar el problema**

Inicialmente, se abordará el problema centrándose en el problema de la mochila. Se establecerá un precio (que corresponderá con el presupuesto del usuario) y un tipo de actividad, la aplicación devolverá un determinado número de actividades que puedan realizarse con esos requisitos. Por ejemplo, si se tiene un presupuesto de 5 euros y como tipo de actividad se elige 'Tapas', la aplicación elegirá, entre varios bares, los que mejor que ajusten al presupuesto y sirvan tapas.

## **Planificación** :bookmark_tabs:
Para llevar a cabo la planificación de este proyecto, se ha organizado en [Historias de Usuario:paperclips:](https://github.com/agr8/Proyecto-IV/issues) (Issues) y [Milestones:paperclips:](https://github.com/agr8/Proyecto-IV/milestones). 
El proceso que se ha seguido para crear las Historias de Usuario se basa en la metodología de personas. Esta metodología se apoya en un conjunto de biografías ficticias que describen a las personas que utilizarán la aplicación. Puede encontrar estas biografías en la [wiki del repo:paperclips:](https://github.com/agr8/Proyecto-IV/wiki/Metodolog%C3%ADa-de-personas).

Encontrará más información sobre la metodología de personas, user journeys y tipos de clientes de la aplicación en la [Documentación](docs/info.md) :paperclips:.

## **Automatización** :wrench::package:
Se dispone de la siguiente orden para comprobar la sintaxis:
```
npm run check
```
Para la compilación,está disponible el siguiente comando:
```
npm run build
```
Para ejecutar los tests implementados hasta el momento:
```
npm run test
```

En cuanto a la justificación de las decisiones que se han tomado sobre el lenguaje y el gestor de dependencias y de tareas elegidos, puede encontrar más información en la [documentación adicional](docs/info.md) :paperclips:

## Tests :white_check_mark: :rotating_light: 

Para lanzar los tests que se han implementado, se ha integrado esta tarea en el gestor de tareas que se está utilizando en el proyecto, npm. Para ello, simplemente he establecido lo siguiente en el fichero ***package.json***:
```
  "scripts": {
        "check": "tsc --noEmit",
        "build": "tsc",
        "test": "jest"
    },
```
De esta forma, se lanzarán los tests utilizando el *test runner* **jest** con el comando:
```
npm run test
```

Se ha testeado la lógica que añade valor al PMV que se está abordando en [este Milestone](https://github.com/agr8/Planner-IV/milestone/1). Esta lógica consiste en tener un registro de las actividades frecuentadas para la [Gestión de Informes](https://github.com/agr8/Planner-IV/milestone/1) y se encuentra en la clase *Handler*. Además, se han testeado las clase *Activity* y *User* ya que se hace uso de ellas en la clase *Handler*. 
Si quiere lanzar los tests por separado, puede hacerlo con los siguientes comandos:
```
npm run test -t Handler
```
```
npm run test -t User
```
```
npm run test -t Activity
```


Encontrará más información sobre la justificación de las herramientas elegidas y cómo se han creado los tests en la sección *Objetivo 4 -Tests* de la [documentación adicional](docs/info.md) :paperclips:


---
* La información adicional relativa al desarrollo de cada objetivo se encuentra en el siguiente enlace:   [Documentación](docs/info.md) :paperclips:

# Desarrollo de los objetivos

En este apartado se pretende justificar la realización de cada objetivo, además de reflejar los recursos que me han resultado útiles para poder llevar a cabo este proyecto.

## **Objetivo 0 - Configuración del entorno de desarrollo** :hammer_and_wrench: :heavy_check_mark:
---
* **Creación de par de claves y subida de clave pública a GitHub** :key:
 
   Para ello, recurrí a la documentación oficial de GitHub. Únicamente seguí los pasos que allí se indican. A continuación, dejo los enlaces para cada una de las partes.
  
  **Generar las claves:**
  [GitHub Docs :paperclips:](https://docs.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

  **Subida de clave pública a GitHub:**
  [GitHub Docs :paperclips:](https://docs.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
  
  Captura de pantalla de la fecha en la que subí la clave pública generada a mi cuenta de GitHub:

  ![Data](./imgs/cap_key.png)
 





  **Comandos útiles:**
 
  +  
    ```
  
    ssh -vT git@github.com
    ```
    Verifica la conexión por ssh al dominio correcto y que la autenticación de nuestro user es correcta.
    ![Data](imgs/ssh-vT.png)
    ![Data](imgs/authentication.png)

  +
    ```
    git clone git@github.com:agr8/Proyecto-IV.git
    ```


   
* **Creación de rama específica para el objetivo 0**

  Uso del [plugin de git proporcionado :paperclips:](https://github.com/JJ/IV/blob/master/scripts/git-iv) para la asignatura. 
  
  
  + 
    ```
    ./git iv objetivo 0
    ```

    Crea la rama para este objetivo.
  + 
    ```
    ./git iv sube-objetivo 0
    ```
    Sube la rama al repositorio remoto.
* **Instalación de gh**
  
    En mi caso, trabajo sobre Ubuntu, por lo que, siguiendo las instrucciones de la documentación de [GitHub CLI :paperclips:](https://github.com/cli/cli/blob/trunk/docs/install_linux.md), únicamente he necesitado los siguientes comandos: 
  ```
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null 
  ```
    ```
    sudo apt update
    ```
    ```
    sudo apt install gh
    ```

* **Licencias**
  [GitHub Docs :paperclips:](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

## Objetivo 1 - Estructura general y planificación del proyecto  :bookmark_tabs::heavy_check_mark:

---
* **Metodología de Personas** :busts_in_silhouette:	
  Esta metodología está orientada a identificar quién o quienes van a utilizar la aplicación. Para ello, se debe pensar en las capacidades, circunstancias o intereses que pudieran tener las personas que usen la aplicación para establecer las necesidades reales que se tienen que cubrir.
   En mi caso, he creado varias biografías ficticias basándome en las opiniones, intereses y situaciones de personas cercanas que me han trasladado lo que les gustaría conseguir con esta aplicación.
    Estas biografías se encuentran en la wiki de este repo: [Enlace a la wiki :paperclips:](https://github.com/agr8/Proyecto-IV/wiki/Metodolog%C3%ADa-de-personas)

* **User Journey**  
  Se trata de obtener una descripción de cómo va a usar cada usuario la aplicación. Basándome en los 4 perfiles que se han detallado en la [wiki :paperclips:](https://github.com/agr8/Proyecto-IV/wiki/Metodolog%C3%ADa-de-personas) :
  
  * **_Ana_,** de 21 años, ha vivido siempre en Granada y conoce muy bien la ciudad. Usaría la aplicación para encontrar planes diferentes, descubrir bares, restaurantes o cafeterías nuevas, **_encontrar ofertas_** en actividades de ocio, conocer actividades culturales organizadas por asociaciones o el Ayuntamiento en distintos barrios... En definitiva, **_la usaría para descubrir alternativas a los planes que suele hacer_**.
  * **_Clara_**, de 20 años. Es nueva en la ciudad y utilizaría la aplicación para _conocer los lugares más concurridos por gente de su edad_. Además, estaría interesada en **_encontrar lugares_** turísticos, parques y zonas para visitar **_que aún no conoce_**.
  * **_Pedro_**, de 34 años. Estaría interesado en todas las **_actividades culturales y de ocio_** que se organizan  a lo largo del año para llevar a sus hijos pequeños. Por otro lado, la utilizaría también para **_encontrar restaurantes_** a los que acudir con sus amigos.
  * **_Carlos_**, 45 años. Su interés en la aplicación es muy distinto al de las anteriores personas. En este caso, Carlos utilizaría la aplicación para **_dar a conocer su negocio y atraer clientela_**. A el le interesa conocer qué opinan sus clientes y qué prefieren de otros lugares. Por tanto, **_utilizaría la aplicación como herramienta para conseguir posteriormente un beneficio económico_**.

* **Tipos de clientes**
  
  Teniendo en cuenta los perfiles descritos anteriormente, se pueden diferenciar tres tipos principales de clientes:
    - **Usuario** que quiere recibir información sobre planes que más encajen con sus preferencias, gustos, presupuesto, horario...
    - **Comerciante o asociación de comerciantes de un barrio.** 
      Este tipo de clientes engloba a todos aquellos comerciantes que utilizarán la aplicación como un medio de publicidad. Pagarán para que su negocio pueda aparecer y ser recomendado a los usuarios.
    - **Instituciones, asociaciones o el Ayuntamiento de Granada.**
      Se trata de organismos interesados en los datos generados por la aplicación. De esta forma, pueden saber qué tipo de actividades son las que más éxito tienen en la ciudad, planificar otras actividades para el futuro en función de lo que los usuarios consuman, etc. 
## Objetivo 2 - Comienzo de la implementación del proyecto :computer: :heavy_check_mark:

---
  
* **Lenguaje elegido**  
He elegido el lenguaje TypeScript ya que conocía previamente  algunos de sus puntos fuertes:
  - Es un lenguaje de tipado fuerte y estático
  - Realiza comprobaciones en tiempo de compilación.
  
  Estos puntos facilitan mucho el desarrollo ya que detecta los errores antes que otros lenguajes de programación (TypeScript es un superset de JavaScript, por lo que supone un gran cambio y una mejora enorme respecto a JavaScript) Por otro lado, no había realizado muchos proyectos ni prácticas con TypeScript, así que lo he considerado como una buena oportunidad para aprender más. Además, mi compañero @modejota ( que realizó el Objetivo 2 ) se encontraba en la misma situación que yo y a ambos nos pareció buena idea llevar a cabo la implementación en TypeScript.

## Objetivo 3 - Automatización de operaciones :wrench: :package: :heavy_check_mark:

---
* **Gestor de dependencias y gestor de tareas**
   Antes de elegir un gestor he investigado distintas opciones para finalmente, decantarme por npm. 
   Al elegir como lenguaje TypeScript, las herramientas que más aparecían para este lenguaje son npm y yarn. A continuación dejo las principales características que considero relevantes de cada una de ellas:
   - **npm**: Node Package Manager. Es el estándar y se instala por defecto. Sirve como gestor de dependencias y como gestor de tareas.Cabe destacar la gran comunidad que tiene, así como el soporte del que me puedo beneficiar para buscar información y soluciones a posibles errores.
   - **yarn**: Es más nueva y surge como mejora a npm. Por ello, presenta más velocidad, es muy estable y muy seguro. 
  
  Si hacemos un balance entre las dos, en cuanto a velocidad, yarn instala paquetes en paralelo, tardando menos que npm, ya que este no realiza la instalación de paquetes uno a uno. Esto es algo a tener muy en cuenta si estamos trabajando en un proyecto grande. Debido a las diferencias y mejoras que surgen con yarn, en la versión 5.0 de npm se ha trabajado mucho en nuevas actualizaciones, estabilidad, ofrecer una mejor velocidad y más seguridad respecto a las otras versiones de npm. 
  **Haciendo este balance, he elegido npm ya que el proyecto que estoy desarrollando en la asignatura no es muy grande, por lo que este gestor es más que útil y suficiente.**



## Objetivo 4 - Tests :white_check_mark: :rotating_light: :heavy_check_mark:

---
* **Lógica de negocio sobre la que se trabaja en este objetivo**
El PMV sobre el que se trabaja en este Objetivo es el de [Gestión de Informes](https://github.com/agr8/Planner-IV/milestone/1).
Se necesitaba una lógica de negocio mínima para este PMV que poder testear y como se acordó en clase, consiste en registrar las actividades frecuentadas basándome en [esta Historia de Usuario](https://github.com/agr8/Planner-IV/issues/5). Para esto, se creó [el Issue correspondiente](https://github.com/agr8/Planner-IV/issues/22).
La lógica de negocio se ha implementado en la clase *Handler*. Además, también se han testeado las clases *Activity* y *User* ya que se hace uso de ellas en la clase *Handler*. 
* **Elección de *test runner* y *biblioteca de aserciones***
  Para elegir la herramienta o las herramientas con las que voy a llevar a cabo los tests, primero he estudiado todos los conceptos relacionados con el desarrollo basado en test. Toda la información la he encontrado en los siguientes enlaces, que corresponden con los recursos de la asignatura y el material del curso cero: 
  *  http://jj.github.io/IV/documentos/proyecto/4.Tests 
  *  https://jj.github.io/curso-tdd/temas/tests-unitarios.html 
  *  https://jj.github.io/curso-tdd/temas/tests-unitarios-organizaci%C3%B3n.html 

  Teniendo todo esto claro, he buscado marcos de pruebas y bibliotecas de aserciones con los que pudiera trabajar con TypeScript, que es el lenguaje en el que se está desarrollando el proyecto. Algunos de los resultados de esta búsqueda: ***Jest, Mocha, Jasmine, AVA, Tape, Karma, Puppeteer,Chai***...

  Para, poder tomar una decisión adecuada respecto a la/s herramienta/s he establecido algunos ***criterios de búsqueda y aceptación***. En primer lugar, busco que tenga soporte, esté bien documentado y no sea difícil de aprender a utilizar. Siguiendo esta línea, busco un marco de pruebas con sus propias aserciones, es decir, descarto un marco de pruebas que dependa de bibliotecas de aserciones externas y requiera mucha configuración inicial. 
  Considerando todo lo anterior, voy a centrar la comparación en los dos marcos de prueba más populares: 
  * [Jest](https://jestjs.io/es-ES/): En su [repo de GitHub](https://github.com/facebook/jest/pulse/daily) se puede comprobar que tiene un **gran mantenimiento**, las estadísticas de los últimos commits y PR (el último commit se realizó hace 4 horas) y que tiene 1276 *contributors* y 37.5k *stars*.
  La **puesta en marcha** de Jest es **muy sencilla**, no requiere de configuraciones adicionales aunque permite realizarlas más adelante, una vez se vayan necesitando. 
  Incluye su **propia biblioteca de aserciones** que se basan en el comportamiento.
  Además, Jest permite conocer el porcentaje de **cobertura del código** de una forma  muy sencilla:
    ```
    jest --coverage
    ```
  * [Mocha](https://mochajs.org/): Como se ha mencionado anteriormente, es de los frameworks más populares pero si nos fijamos en su [repo de GitHub](https://github.com/mochajs/mocha) y comparamos sus **cifras** con Jest, las de Mocha son **bastante inferiores**: El último commit es del 29 de Octubre de 2021, 472 *contributors* y 21k *stars*. 
  Mocha es **extendible** y **flexible**,además de ser muy **configurable**, esto es una gran ventaja para personalizar y tener todo el control del desarrollo de test del proyecto. 
  Este marco de pruebas permite trabajar con **cualquier biblioteca de aserciones**, lo que supondrá incluir dependencias y sus respectivas configuraciones. Por ejemplo, Mocha se suele utilizar bastante con la biblioteca de aserciones de Chai. 
  Respecto a la **cobertura de código**, se necesita una herramienta específica, [Wallaby.js](https://wallabyjs.com/), para poder conocer el porcentaje de código que se ha cubierto.


  **Decisión final**:
   Teniendo en cuenta todo lo anterior, **he decidido usar Jest** en este proyecto ya que tiene un gran soporte, es el más utilizado (esto siempre ayuda a encontrar más información y soluciones a posibles errores), es fácil de configurar, rápido y ofrece lo que necesito para este objetivo sin necesidad de establecer muchas dependencias de bibliotecas externas. Es cierto que para un proyecto mayor sería interesante utilizar Mocha por todas las posibilidades de configuración y personalización que brinda, pero dado el tamaño de este proyecto, considero que Jest es más que suficiente. Además, en cuanto al *coverage*, es mucho más sencillo utilizarlo con Jest que con Mocha, ya que este último necesita *Wallaby.js* para ofrecerlo.    

  :paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips:

  Por último, dejo algunos enlaces a sitios donde he encontrado esta información:  
  
   *  https://mochajs.org/
   *  https://github.com/mochajs/mocha
   *  https://jestjs.io/es-ES/
   *  https://github.com/facebook/jest 
   *  https://freddixx.medium.com/nodejs-testing-with-jest-vs-mocha-on-typescript-in-2021-7bffc28a4379
   *  https://www.chaijs.com/guide/installation/ 
   *  https://openbase.com/
   *  https://www.testim.io/blog/best-unit-testing-framework-for-javascript/ 
   *  https://geekflare.com/es/javascript-unit-testing/ 

  :paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips::paperclips:

* **Instalación de Jest**
    ```
    npm install --save-dev jest typescript ts-jest @types/jest
    ```
    **Crear archivo de configuración automáticamente**:
     ```
    npx ts-jest config:init 
    ```
* **Cómo se han hecho los tests.**
  Para realizar los tests he procurado seguir en todo momento las mejores prácticas que he encontrado en la documentación de jest y en la documentación del material de clase:

    * :paperclip: https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-es.md 
    * :paperclip: https://jestjs.io/es-ES/
    * :paperclip: https://jj.github.io/curso-tdd/temas/tests-unitarios-organizaci%C3%B3n.html
    * :papeclip: https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6

  
  
  Se han seguido los **principios F.I.R.S.T**, que corresponden con:
  * **Fast**: Los tests deben ser rápidos, deben de poder ejecutarse y dar un resultado o fallar en pocos segundos. 
  * **Isolated/Independent**: Los tests deben ser aislados, sin dependencias entre ellos ni con el entorno, pudiendo ejecutar cada test de forma independiente.
  Para una mejor comprensión de los tests y cumpliendo con este principio los he estructurado, siempre que ha sido posible, en tres secciones, *Arrange*, *Act* y *Assert*. Es decir, una primera parte donde se prepara lo necesario para el test, una segunda parte de la prueba concreta que se quiere hacer y una última parte, en la que se trabaja con el valor obtenido del test.
  * **Repeatable**: Los tests deben de poder repetirse en diferentes entornos obteniendo el mismo resultado en todos ellos.
  * **Self-validating**: No se debería tener que comprobar de forma manual la validación de los tests. Esto no es necesario ya que los tests desarrollados se autovalidan con Jest.
  * **Thorough**: Los tests deben ser lo más completos posibles. En este caso se comprueban todos los posibles escenarios críticos: 
    * Se ha comprobado que un usuario sea creado con un nombre, edad y apellidos válidos
    * Se ha comprobado el buen funcionamiento de sus métodos get
    * Se ha comprobado que una actividad sea creada con un título, descripción,precio y lugar       válidos.
    * Se ha comprobado el buen funcionamiento de sus métodos get
    * Se ha comprobado que sea posible añadir a un nuevo usuario al conjunto de usuarios.
    * Se ha comprobado que No sea posible añadir, nuevamente, a un usuario que ya existe en el       conjunto de usuarios.
    * Se ha comprobado que sea posible obtener un usuario existente en el conjunto conociendo       su ID y que no sea posible obtener un usuario que no exista en dicho conjunto.
    * Se ha comprobado que pueda eliminarse únicamente un usuario que exista en el conjunto.
    * Se ha comprobadoo que puede añadirse una actividad, una única vez, al conjunto de             actividades.
    * Se ha comprobado que pueda obtenerse una actividad perteneciente al conjunto conociendo      el ID de ésta.
    * Se ha comprobado que pueda eliminarse una actividad del conjunto de actividades.
    * Se ha comprobado que, al principio, todos los tipos de actividades tengan frecuencia con       valor 0, ya que no se ha registrado ninguna.
    * Se ha comprobado que pueda registrarse valores de frecuencia para cada tipo de actividad.
    * Se ha comprobado que se puede obtener correctamente un valor de frecuencia de un tipo de actividad concreto cuando éste ha sido actualizado previamente.

## Objetivo 5 - Creación de un contenedor para pruebas :whale2:		

---
* **Imagen elegida para el contenedor**

  Para la base del contenedor **busco** una imagen lo más minimalista posible, es decir, una imagen básica, con las mínimas dependencias posibles (evitando posibles riesgos de seguridad) y que ocupe poco espacio. Además, busco que sea una imagen oficial basada en el lenguaje que se ha elegido para el proyecto (en este caso, *node*). Este último criterio se debe a la información del [material de la asignatura](http://jj.github.io/IV/documentos/temas/Contenedores), en la que se explica que es más conveniente usar imágenes oficiales de un lenguaje, en lugar de utilizar la imagen de un sistema operativo y después instalar el lenguaje junto con todas las dependencias que se necesiten. Por ello, he buscado [imágenes oficiales de node](https://hub.docker.com/_/node/) y elegiré la imagen base entre estos resultados. Las imágenes que aparecen se pueden dividir en tres grupos: 
    * ```node:<version>``` 
    * ```node:<version>-alpine```
    * ```node:<version>-slim```
  
  Las del primer grupo las descarto ya que son imágenes *por defecto* que no cumplen con los criterios establecidos. Por tanto, centraré mi elección en los dos últimos grupos.

  Desde [nodejs.org](https://nodejs.org/es/about/releases/) recomiendan que las aplicaciones de producción solo deben usar versiones *Active LTS* o *Maintenance LTS*, entre las que se encuentran las versiones *14* y *16*. Para hacer una segunda criba, he elegido la **versión 16** de node ya que es la versión LTS en estado *Activo* más reciente y con más soporte en plazo de tiempo mayor. El estado *LTS Activo* se inició el *26/10/2021* y finalizará el 30/04/2024. Más concretamente, usaré la versión 16.13.
  Así pues, con la versión *16.13* (y que pertenezcan a ```node:<version>-alpine``` o a ```node:<version>-slim```) encontramos las siguientes imágenes:
    * 16.13.1-alpine3.14,
    * 16.13-alpine, 16.13-alpine3.15, 16.13.1-alpine, 16.13.1-alpine3.15
    * 16.13-bullseye-slim, 16.13.1-bullseye-slim,16.13-buster, 16.13.1, 16.13.1-buster
    * 16.13-buster-slim, 16.13-slim, 16.13.1-buster-slim, 16.13.1-slim
    * 16.13-stretch-slim, 16.13.1-stretch-slim
  

  Por un lado, encontramos imágenes basadas en la distro ***alpine***, que como hemos visto en el [material de la asignatura](http://jj.github.io/IV/documentos/temas/Contenedores), tiene un tamaño muy pequeño ya que se trata de una imagen muy básica.
  Por otro lado, encontramos imágenes de las ***distintas versiones de Debian*** en su versión *-slim**. Entre ellas, me quedo con ***bullseye*** al tratarse de la futura versión LTS más reciente y con soporte a más largo plazo. Fuente de la información: [aquí](https://wiki.debian.org/LTS).
  Tras esta tercera criba, me queda elegir entre imágenes basadas en *alpine* o de *bullseye*. Para elegir entre ellas, he comparado sus tamaños utilizando los siguientes comandos:

  ```
  docker pull --quiet node:16.13.1-alpine3.14
  ```
  ```
  docker pull --quiet node:16.13.1-alpine3.15
  ```
  ```
  docker pull --quiet node:16.13.1-bullseye-slim
  ```
  ```
  docker images --digests
  ```
  Obteniendo:
  node:16.13.1-alpine3.14: 110MB
  node:16.13.1-alpine:3.15: 110 MB
  node:16.13.1-bullseye-slim: 185 MB

  Además, he encontrado una página que hace un análisis de cada imagen. Encontrando:
  *  [node:16.13.1-alpine3.14](https://snyk.io/test/docker/node%3A16.13.1-alpine3.14):  0 vulnerabilidades de seguridad y 16 dependencias. 
  *  [node:16.13.1-alpine:3.15](https://snyk.io/test/docker/node%3A16.13.1-alpine3.15):  0 vulnerabilidades de seguridad y 16 dependencias. 
  *  [node:16.13.1-bullseye-slim](https://snyk.io/test/docker/node%3A16.13.1-bullseye-slim): 37 vulnerabilidades de seguridad y 97 dependencias.

  Por tanto, teniendo en cuenta el tamaño, el número de dependencias y de vulnerabilidades, utilizaré una imagen de node basada en alpine. En el archivo *Dockerfile* lo indicaré con la siguiente línea:
  ```
  FROM node:16.13.1-alpine
  ```
## Objetivo 6 - Integración continua 
--- 
* **Elección de los sistemas de integración continua**
    En el [Objetivo 6 de esta asignatura](http://jj.github.io/IV/documentos/proyecto/6.CI) se pide *añadir integración continua* al proyecto. Por un lado, hay que elegir un sistema de integración continua para comprobar que no hay problemas con el código que ya existe (y en general, con el propio repo en sí) cada vez que se quiera integrar nuevos cambios; automatizando la ejecución de los tests. Por otro lado, se elegirá otro sistema de integración continua que testeará las versiones del lenguaje previamente elegido en el proyecto. Es decir, comprobará las versiones de *node* que soportan el proyecto.
    Para tomar una decisón sobre los sistemas de integración continua que utilizaré he establecido unos ***criterios previos***:
    * Facilidad en la configuración. Necesito que no exista una gran curva de aprendizaje ya que no dispongo del tiempo necesario para aprender a empezar a utilizar y configurar un sistema muy complicado.
    * Documentación extensa e información abundante sobre el sistema para encontrar fácilmente solución a posibles problemas o dudas que se puedan presentar.
    * Compatibilidad con GitHub. (Este requisito lo cumplen muchos sistemas, pero es esencial en el escenario en el que se está desarrollando el proyecto)
    * Que pueda usarse en la nube y no haya que hacer instalaciones locales.
    * Que sea un servicio gratuito o tenga planes de prueba gratuitos durante un tiempo considerable (mínimo un mes teniendo en cuenta que el cuatrimestre acaba en este plazo de tiempo)
    * Que permita probar varias versiones del lenguaje de este proyecto sin que suponga mucha dificultad. 
    * Compatible con Docker para la segunda tarea.  
  
    
    Teniendo en cuenta estos criterios voy a ***examinar y comparar*** algunos sistemas que, o bien se han comentado en la asignatura, o bien los he encontrado buscando distintas posibilidades:

    * [**Travis**](https://www.travis-ci.com/): Es un sistema compatible con GitHub recomendado para comenzar con la integración continua ya que no tiene ningún tipo de dificultad. Para [empezar](https://docs.travis-ci.com/user/tutorial/) a utilizarlo existen muchos tutoriales y documentación. Solo hay que registrarse (en mi caso lo he hecho con la cuenta de GitHub), activar el repo o los repos que quieran utilizarse con Travis y elegir un plan. En este caso, Travis dispone de un plan gratuito de 30 días en el que te ofrecen 10000 créditos. Para tener acceso al plan se necesita introducir la tarjeta de crédito ya que realizan la transacción de 1$, que después te devuelven. Una vez elegido el plan, hay que añadir un fichero *.travis.yml* al repo y esta será la configuración necesaria. Se ejecutará solo al integrar los cambios oportunos en el proyecto. Los resultados de la ejecución de los tests pueden verse en la [web](https://travis-ci.com/auth) y en GitHub, ya que Travis le informa de los resultados con *Checks API*.
    Por otro lado, cabe destacar que es compatible con Docker y tiene una característica muy útil, *build matrix*. Esta permite testear diferentes versiones del lenguaje de forma fácil y cómoda.
  
    * [**JFrog Pipelines**](https://jfrog.com/pipelines/): Tiene servicio tanto en la nube, como en local. De forma gratuita y sin límite de días, tenemos acceso al servicio en la nube, que es el que nos interesa en este contexto. No requiere la tarjeta de crédito y ofrece  2000 CI/CD Minutos/mes,repos ilimitados y acceso ilimitado a dockerhub, entre otros. Para utilizar el servicio autohospedado existe una prueba gratuita de 30 días. La configuración de este sistema se basa en un archivo(por convención, *pipelines.yml*) que hay que almacenar en el repo. Este utiliza su propio lenguaje basado en YAML, que se denomina Pipelines DSL. Además, hay que configurar Pipelines para que use el repo. Todo el proceso está bastante bien explicado en su [documentación](https://www.jfrog.com/confluence/display/JFROG/Defining+a+Pipeline).
    Tiene integración con Docker y con GitHub pero para ello hay que crear y configurar los denominados *registros de integración*. [Cómo hacerlo aquí](https://www.jfrog.com/confluence/display/JFROG/Managing+Pipelines+Integrations) 
   

    * [**Circle CI**](https://circleci.com/):  Está basado en la nube y es muy sencillo de utilizar. He encontrado bastante documentación y [tutoriales](https://circleci.com/docs/2.0/first-steps/) sobre cómo empezar. Únicamente, hay que registrarse con GitHub, gestionar los permisos de los repos que se quieran utilizar y su configuración se basa en el fichero *.circle/config.yml*. Este se almacena en el repo y se encarga de automatizar la ejecución cada vez que se haga push al repo. También permite ejecutar los tests en paralelo. Ofrece una plantilla para crear el fichero de configuración con muchas opciones. Además, es compatible con Docker y es necesario [habilitar checks](https://circleci.com/docs/2.0/enable-checks/) para utilizarlo con GitHub. 
    En cuanto a conceptos, es similar a GitHub Actions pero difieren un poco en la sintaxis. Este sistema también ofrece un plan gratuito con 1000 minutos/mes.


    * [**Semaphore CI**](https://semaphoreci.com/): Este sistema se ha investigado, está basado en la nube y ofrece paralelismo, uso ilimitado y es muy personalizable. Su configuración se basa en un fichero *.semaphore/semaphore.yml* y funciona de forma muy parecida a *Circle CI*. El problema es su plan de prueba gratuito, que aunque no hay que introducir la tarjeta, únicamente es válido durante 14 días. Esto aparece al darse de alta para probar el sistema, por lo que ha sido descartado al suponer mucho menos tiempo del mes establecido en los criterios previos de búsqueda.
    
    * [**Jenkins**](https://www.jenkins.io/): Es un sistema muy completo y personalizable. Es gratuito pero requiere instalación. Su configuración, entre otras muchas cosas, reside también en un fichero. Se trata de un fichero propio, *Jenkinsfile*. Al requerir instalación, no cumple con los requisitos previos que se han establecido. Además, tiene una curva de aprendizaje considerable.      

    * [**GitHub Actions**](https://github.com/features/actions): Este sistema de *workflows* viene ya instalado con GitHub, no hay nada que configurar ya que se puede hacer directamente desde GitHub. Para su funcionamiento, únicamente hay que crear el archivo *.yml* en el directorio *.github/workflows/* desde una plantilla o de forma independiente. Además, tiene soporte con Docker como ya hemos visto en el objetivo 5.


    **Conclusión**:
    *Jenkins* no cumple con los criterios previos establecidos por lo que queda decartado.
    *Semaphore CI* era una opción muy interersante pero ha quedado descartada también por su prueba gratuita de 14 días.
    **GitHub Actions** es un sistema muy útil y que ya conozco del objetivo anterior. Además, se puede reutilizar el trabajo realizado en ese objetivo con Docker para llevar a cabo una de las tareas del objetivo 6.
    *JFrog Pipelines* es un sistema nuevo para mí y, aunque dispone de  documentación y tutoriales, y no parece muy difícil, no me resulta tan inmediato como los otros sistemas. Por tanto, queda descartado.

    *Circle CI* es un sistema que me ha resultado sencillo y cómodo, y cumple con los requisitos previos. Era el otro sistema que iba a utilizar después de probarlo para la otra tarea del objetivo ya que no hay que introducir la tarjeta para utilizarlo pero lo he tenido que acabar descartando por el requisito de la lista de comprobación:
    > * [ ] ¿Se ha evitado Circle CI, porque a estas alturas ya lo ha usado todo el mundo?
    
    Por tanto, el otro sistema de integración continua que voy a utilizar es **Travis**. Es muy sencillo y ya he trabajado previamente con el en el curso que impartió *@JJ*. Como se ha descrito anteriormente, cumple con todos los criterios que se han establecido y dispone de *build matrix*, que me va a permitir testear varias versiones del lenguaje en el proyecto. Cuando acabe la asignatura y el mes de prueba de Travis, pretendo continuar por mi cuenta con los demás objetivos que no me ha dado tiempo a trabajar, por lo que cambiaré el sistema de integración y utilizaré *Circle CI*.
    **Decisión final**:
    **Teniendo en cuenta todo lo anterior, utilizaré Travis y GitHub Actions**.


    
* **Versiones que se han testeado**
    Para comprobar las versiones con las que funciona el proyecto, he probado las pares, ya que como se vio en objetivos anteriores, son las estables, que tienen estado *LTS*. Las impares dejan de ser compatibles. Toda esta información aparece más detallada [aquí](https://nodejs.org/es/about/releases/).
    La versión 12 se encuentra en mantenimiento hasta el 30/04/2022.
    La versión 14,se encuentra en mantenimiento hasta el 30/04/2023.
    La versión 16, se encuentra en estado LTS Activo, comenzará su mantenimiento en octubre de este año hasta el 30/04/2024.
    La versión 18 aún no está disponible, se encuentra en estado *Pendiente* y se lanzará en abril de este año. Por tanto, no se ha incluido.
    Haciendo una pequeña búsqueda, he encontrado que jest ha dado algunos fallos con la versión 12 de nodejs. La versión 14 es la que aparece en la documentación de jest, por lo que no debería de causar ningún error. He comprobado que estas dos versiones sean válidas para el proyecto con el sistema de integración continua de *Travis*. La versión más actual y estable de node la he comprobado en el contenedor Docker con *GitHub Actions*.
   


   


      

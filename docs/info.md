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
## Objetivo 2 - Comienzo de la implementación del proyecto :computer:

---
  
* **Lenguaje elegido**  
He elegido el lenguaje TypeScript ya que conocía previamente  algunos de sus puntos fuertes:
  - Es un lenguaje de tipado fuerte y estático
  - Realiza comprobaciones en tiempo de compilación.
  
  Estos puntos facilitan mucho el desarrollo ya que detecta los errores antes que otros lenguajes de programación (TypeScript es un superset de JavaScript, por lo que supone un gran cambio y una mejora enorme respecto a JavaScript) Por otro lado, no había realizado muchos proyectos ni prácticas con TypeScript, así que lo he considerado como una buena oportunidad para aprender más. Además, mi compañero @modejota ( que realizó el Objetivo 2 ) se encontraba en la misma situación que yo y a ambos nos pareció buena idea llevar a cabo la implementación en TypeScript.


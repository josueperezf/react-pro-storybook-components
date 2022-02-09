# My storybook

    es una herramienta que sirve para probar nuestros componente, del mismo modo otros programadores pueden usarlo y al darle la aprobacion, entonces incorporamos nuestro componente al proyecto donde estemos trabajando.
    esto es para Probar nuestros componentes, no para crearlos o algo asi.

    para levantar este proyecto se ejecuta el siguiente comando

        npm start

## para crear un proyecto como este se debe realizar los siguientes pasos

1. creamos un nuevo proyecto de react 

    npx create-react-app my-storybook --template typescript

2. debemos romper la aplicacion de react, para ello eliminamos un paquete de react

    react-scripts

3. borramos los archivos

    * App.css (opcional borrar)
    * App.test.tsx
    * setupTests.ts (opcional borrar)
    * reportWebVitals
    * react-app-env.d.ts
    * logo.svg
    * index.css
    * en pocas palabras, en la carpeta src, solo deja el archivo. index.tsx

4. instalamos ahora si, el plugin Storybook, ejecutamos el comando

    npx sb init

5. despues de realizar la instalacion, ademas de Storybook, nos instala algunos ejemplos de demostracion

6. gracias a la instalacion, podemos ejecutar el comando, ya nuestra aplicacion no es aplicacion si no componentes

         npm run storybook

7.  antes de ejecutar el comando anterior, debemos abrir el archivo package.json y hacer los siguientes cambios en la seccion de scripts

        "scripts": {
            "start": "start-storybook -p 6006",
            "build": "build-storybook",
            "storybook": "start-storybook -p 6006",
            "build-storybook": "build-storybook"
        },

8.  debemos borrar todo lo que tenemos en nuestro archivo index.tsx

9.  para ver una base podemos abrir el archivo index.tsx y en el colocar 

        export { Button } from './stories/Button';

10. ejecutamos el comando npm start para levantar el proeycto



## pasar a produccion

1. ejecutamos el comando

        npm build
        o
        build-storybook

2. para probar el archivo de p`roduccion localmente, podemos instalar

    * npm i http-server
    * nos movemos a la carpeta 'storybook-static' y en ella ejecutamos el comando  

        http-server -o
3. en .gitignore agrega la carpeta 'storybook-static', luego la renombra como docs, para que esta sea la que subamos a produccion y le hagamos seguimiento


## bonus chromatic

es una herramienta que permite al subir el codigo, en ejemplo git page, y de alli que podamos darle enlace a otras personas para que lo vean, al mismo tiempo esas personas podran comentar, sugerir cambios y si concideramos conveniente, los aprobamos

## pasos para preparar todo para github actions y despliegues automaticos

*   configuracion en npm

    1. abrimos el package.json  y cambiamos la propiedad private en false, si no se cambia, no podra llegar a npm

            "private": false,

    2. cambiamos el nombre en 'package.json', debe ser unico

    3. agregamos la popiedad license

            "license": "MIT",

    4. como este proyecto fue hecho en typescript, debemos colocar:

            "typings": "dist/index.d.ts",
            "main": "dist/index.js",
            "homepage": "https://github.com/josueperezf/",
            "repository": {
                "url": "https://github.com/josueperezf/react-pro-storybook-components",
                "type": "git"
            },
            "release": {
                "branch": [
                    "master" // rama que utilizaremos para produccion
                ]
            },
            "files": [
                "dist",
                "src"
            ],
* cambios en tsconfig.json

    1. dentro del objeto "compilerOptions", agregamos

            "outDir": "dist",

    2.  cambiamos los siguiente valores

            "declaration": true,
            "noEmit": false,
            "module": "esnext", // o tambien puede tener el valor de "commonjs"

    3. verificamos que tenga lo siguiente, si no lo agregamos

            "include": [
                "src"
            ]

* ejecutamos en la consola el comando y corregimos los errores que podrian aparecer

        tsc

* para este ejemplo me arrojo error por que tenia interfaces que no tenian el export, se le coloco, se borro la carpeta dis, se ejecuto nuevamente el comando "tsc" y funciono todo perfecto


## para los despliegues automaticos

luego de hacer realizado los pasos de la seccion anterior <b>pasos para preparar todo para github actions y despliegues automaticos</b> , debemos hacer cirtas configuraciones

* para hacer dos despliegues automaticos, se debe borrar la carpeta dist, con cada nueva version, en vista de que esto no lo puede ejecutar el comando tsc, debemos instalar dos plugins

        npm i -D rimraf
        npm i -D copyfiles

* en el los script del package.json, debemos:

    1.  agregar en los script para que borre la carpeta que pasaremos aproduccion cada vez que creemos un nuevo build

             "clean": "rimraf dist/"

    2. agregamos tambien en los scripts lo siguiente, como el comando tsc solo maneja las

            "copy-files": "copyfiles -u 1 src/**/*.css dist/"
        
    modificamos en package.json, los script

            "build": "npm run clean && tsc && npm run copy-files",
    3. 

## versionamiento semantico

    ejemplo  version: 1.2.3

1. version mayor
2. parche o añadidos
3. correcciones

debemos instalar los siguientes plugins

* npm i -D semantic-release => este hace el versionamiento por nosotros, segun los nombres que le coloquemos a los commits

* debemos ir al package.json  y agregar las siguientes lineas, no hay que instalarlos, ya vienen en el paquete 'semantic-release'

        "plugins": [
            "@semantic-release/commit-analyzer",
            "@semantic-release/release-notes-generator",
            "@semantic-release/changelog",
            "@semantic-release/github",
            "@semantic-release/npm",
            "@semantic-release/git"
        ],

* palabras que debemos escribir en el commit para accionar el cambio de version

    1. fix => Fijar liberación
    2. feat => Lanzamiento de nuevas funciones
    3. perf => Lanzamiento de última hora (tenga en cuenta que el BREAKING CHANGE: token debe estar en el pie de página de la confirmación)

# github action

1. debemos ir a donde esta la imagen de nuestro perfil de github, seleccionar donde dice settings
2. seleccionar developer settings
3. presionar donde dice: Personal access tokens
4. presionar 'generate new token', <b>nota los token que generemos debemos guardarlos, por que al refrescar la pagina ya no sera visibles de nuevo, ademas se utilizaran en pasos posteriores</b>
5. "en note" colocamos el nombre que le quereamos dar al token para nosotros identificarlo
6. seleccionamos el checkbox que dice repo, y presionamos donde dice generar token
7. vamos a nuestro donde vamos a publicar nuestro proyecto, para este caso en npm, alli presionamos en la esquina superior derecha, donde esta nuestra foto, alli seleccionamos 'access tokens o fichas de acceso' segun el idioma; 
    * presionamos generar nuevo token 'esto es en la pagina de npm ya que alli es donde lo estamos publicando'
    * le damos un  nombre y seleccionamos solo la opcion que dice <b>public</b> <h3>debemos guardar el token, ya que se utilziara en pasos posteriores y si se refresca la pagina se pierde</h3>
7. ahora vamos a nuestro repositorio en github, seleccionamos nuestro repositorio, vamos a settings
8. presionamos donde dice <b>secret</b> , despues donde dice <b> Actions</b>
9. presionamos donde dice <b> new repository secret</b>, Para este ejemplo se le coloco <b> GH_TOKEN</b>, en value pegamos el token que nos genero en el paso

10. ahora vamos a repetir el paso 9, pero con el token que nos dio nuestro servidor, donde subiremos nuestro proyecto, para este caso es npm. el nombre seria <b>NPM_TOKEN</b>, y la clave las que nos genero nuestro en el paso 7

11. despues de hacer los pasos anteriores y sin salir de nuestro repositorio, vamos a donde dice <b> acions </b>, despues donde dice <b> new workflows</b>
12.  luego seleccionamos en el enlace <b>set up a workflow yourself </b> y sin hacer cambios en esa patalla, damos click en <b> start commit </b>, colocamos cualquier texto en el commit y presionamos en <b> commit new file </b>
13. hacemos un git pull para traernos todos los cambios
14. abrimos en nuestro editor, el archivo llamado <b> main.yml </b>, este es el que tendra toda la configuracion que indica que cuando subamos cambios a ciertas ramas, debe pasar automaticamente a produccion y cosas asi.
15. en ese archivo, como esta actualmente, dice que cuando hagamos un push o un pull_request a la rama master, se ejecutara este procedimiento, 'el que nosotros indiquemos en el documento'
16. borramos lo siguiente de ese documento, tanto la linea de comentario, ya que este archivo es muy delicado

          # Allows you to run this workflow manually from the Actions tab
            workflow_dispatch:
17. EL step de ese proyecto lo deja de esta manera, algo similar docker, donde un archivo decia que instalar, que variables de entorno usar y demas, la sangria es muy importante, un error en ella puede que ya no funcione

            steps:
                - uses: actions/checkout@v2
                - name: Setup Node.js
                    uses: actions/setup-node@v1
                    with:
                    node-version: 14.17

                - name: Install Dependencies
                    run: npm install
                
                - name: Build App
                    run: npm run build
                
                - name: Semantic Release
                    env:
                    GITHUB_TOKEN: ${{secrets.GH_TOKEN}}
                    NPM_TOKEN: ${{secrets.NPM_TOKEN}}
                    run: npx semantic-release

## instalacion de este paquete

este sirve para practicar react components +storybook + npm publish

```
    npm install jp-react-pro-storybook-components
```

## Demo:

[storybook-components](https://josueperezf.github.io/react-pro-storybook-components/?path=/story/ui-my-label--basic)

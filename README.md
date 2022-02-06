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
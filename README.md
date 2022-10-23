# PyCakes
 TPO del curso Full Stack Python 2022 correspondiente al programa Codo a Codo 4.0

<!-- IMPLEMENTAR GOOGLE SING IN o OAuth-->
<!-- Ingresar a https://console.cloud.google.com/apis/ 
ir al boton "CREAR PROYECTO"  - "CREAR" poner el nombre del proyecto y CREAR
Ir a "CREDENCIALES" - "CREAR CREDENCIALES" => ID DE CLIENTE OAuth
    Configurar pantalla de consentimiento:
            INTERNO: solo puede ingresar los correos corporativos
            EXTERNO: cualquier Gmail puede entrar
            Nombre de la app
            Logo
            correo de asistencia
            DOMINIO DE LA APP: en este caso seria el localhost:XXXXXX
            Lo mismo para la politica de priv y condiciones (al ser prueba)
            GUARDAR
-->

<!-- !!!!!!MUY IMPORTANTE¡¡¡¡¡¡¡¡¡¡
+ CREAR CREDENCIALES
ID DE CLIENTE OAuth
Tipo de Aplicación Web
Nombre de la App
URL DE ORIGEN

ORIGENES AUTORIZADOS DE JS
seria el dominio o el localhost http://localhost:3000 - si quiero usar VUE agrego el puerto para vue

ID DE CLIENTE
405884368449-t28hflj8sb2i977posqj02a2ciqhd4ss.apps.googleusercontent.com

CREAR PROYECTO - se genera la credencial de proyecto

-->

<!-- Copiar en el body <script src="https://apis.google.com/js/platform.js" async defer></script>
y tambien <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
 -->

<!--  Levantar el proyecto en localhost:3000 
npm init
darle todo enter
npm install lite-server --save-dev
en el package.json que se creo insertar en "scripts":  
         "scripts": {
            "dev": "lite-server",
             "test": "mocha"
        },
-->
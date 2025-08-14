# sitio-spa

# en scripts agrega el alias de start:api
ejecuta como npm run start:api para simular el servidor json

Debe estar instalado express

# Servidor de prueba
Para Node.js 18, puedes usar versiones anteriores de json-server y json-server-auth que son compatibles.

Versiones recomendadas para Node 18
Agrega estas versiones en tu instalación:

npm install json-server@0.17.3 json-server-auth@2.1.0 express@4.18.2 --save-dev

Ejecutar donde se encuentra el archivo db.json

y luego ejecutar con el comando: 
npx json-server-auth db.json --port 3000
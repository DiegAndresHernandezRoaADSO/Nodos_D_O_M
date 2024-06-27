
primero revisamos la versiones "Deber salir v20.15.0 o similar"

node -v


Revisamos si tenemos  la version npm "Debe salir 10.7.0 o similar"

npm -v


Creamos una carpeta server

mkdir server


Instalamos json-server global

npm install -g json-server


Creamos un archivo dentro de la carpeta server y colocamos lo que vamos a consumir las api

touch db.json


Páselo a la CLI del servidor JSON

npx json-server db.json


Y colocamos en el navegador

http://localhost:3000/
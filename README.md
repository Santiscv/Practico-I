Este es el contenido principal del Practico I.

1)Para iniciar el repositorio del trabajo, se creo con anterioridad una carpeta en el escritorio:

-mkdir Practico

posteriormente nos movimos a ella con el comando:

cd Practico 

para luego iniciar un repositorio con el comando:

Git init.

2) Para hacer el commit inicial se debio agregar el archivo al stage con el comando:

Git add README.md

Consecuentemente se realizo el comando :

git commit -m "Texto" (Para dejar una muestra de lo que se hizo en el)

3) Se realizo un push con el comando:

Git push.
--------------------------------------------------------------------------------------------------------------

Estudiante 2


1) Se clonò el repositorio desde github con el comando:

git clone https://github.com/Santiscv/Practico-I

2) Se creò una nueva rama llamada "nueva-rama" con el comando:

git branch nueva-rama

3) Se paso de la rama "master" a "nueva-rama" con el comando:

git checkout nueva-rama

4) Se volviò a modificar el archivo README con nuevos puntos para el estudiante 2.

5) El estudiante 2 se olvido de agregar a la zona de stage y el commit del archivo README con sus nuevas modificaciones antes de hacer el push de nueva-rama, asi que se procede a hacerlo:

git add README.md

git commit -m "se añadio el contenido del estudiante II"
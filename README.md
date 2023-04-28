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

-----------------------------------------------------------------------------------------------------------
Estudiante 2:

1) Se pregunto en que rama estabamos parados con el comando:

git branch

esto retorno:

*master

es por ello que me movi a otra rama con el comando:

git checkout nueva-rama

para poder crear una nueva rama:

git branch segunda-rama

moverme a ella:

git checkout segunda-rama 


2)Ya en la rama nueva creada,se agregaron dos archivos:

Index.html
Style.css

para luego agregarle contenido apto.

2) Se pregunto que archivos habian fuera del stage:

git status.

esto retorno:
README.md M
Index.html U
Style.css U

3) se añadio el archivo correspondientes con el comando:

git add README.md 
git commit -m "Se modifico el archivo de informe.

git add index.html
git commit -m "Se añadio el archivo de la estructura de pagina web"

git add style.css
git commit -m "Se añadio el archivo de estilos para esa pagina web 



4) Se fueron realizando cambios en esos tres archivos y luego fueron agregados al stage:

git add README.md 
git commit -m "Se modifico el archivo de informe para nuevo contenido".

git add index.html
git commit -m "Se añadio una imagen a la pagina web"

git add style.css
git commit -m "Se añadio  estilos a ese contenedor de imagen"

Cambios 2:

git add README.md 
git commit -m "Se modifico el informe para nuevo contenido".

git add index.html
git commit -m "Se añadio un parrafo a la pagina web"

git add style.css
git commit -m "Se añadio estilos a ese parrafo"

5) Se hizo un push con el comando:

git push

6) se realizo una fusion de esas dos ramas con el comando:

git checkout master
git merge segunda-rama

7) fin del estudiante II:

git push




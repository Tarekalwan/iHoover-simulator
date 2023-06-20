
## Documentation pour l'Aspirateur Automatique iHoover

Cette application simule un aspirateur automatique (nommé iHoover) dans une pièce rectangulaire. L'utilisateur peut définir les dimensions de la pièce, positionner l'iHoover à une position initiale, et exécuter une série d'instructions pour déplacer l'iHoover.

### Exigences

Pour exécuter cette application, vous devez avoir Node.js, npm (Node Package Manager) et TypeScript installés sur votre machine.

### Comment exécuter l'application

1. Ouvrez un terminal.

2. Naviguez vers le répertoire contenant les fichiers source de l'application.

3. Compilez le fichier TypeScript avec la commande suivante : `tsc main.ts`.

4. Exécutez le fichier JavaScript généré avec la commande suivante : `node main.js`.

### Description de la structure du code

- `enum Orientation` : un énumérateur pour les quatre orientations cardinales (N, E, S, W).

- `class VacuumCleaner` : une classe représentant l'aspirateur. Elle contient la position de l'aspirateur et son orientation, ainsi que les méthodes pour déplacer et tourner l'aspirateur.

- `class Room` : une classe représentant la pièce. Elle contient les dimensions de la pièce et un objet de type `VacuumCleaner`. Elle possède une méthode pour exécuter une série d'instructions pour déplacer l'aspirateur.




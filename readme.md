﻿# Zeiterfassung

Zum installieren:

* Repo klonen
* [Docker Community Edition installieren](https://store.docker.com/editions/community/docker-ce-desktop-windows)
* Git Bash öffnen
* Docker machine starten `docker-machine create box`
* Docker RE überprüfen `docker run hello-world`   
* [Docker Get Startet, Part 2: Containers](https://docs.docker.com/get-started/part2/#the-app-itself) durchlesen und verstehen was ein Docker Container ist
* Der Ordner testdocker enthält die drei Dateien, die für get-started notwenig sind



# Webserver Docker zum Laufen bringen:

1. In der Bash in den webserver Ordner als Arbeitsverzeichnis wechseln.
2. `$ docker build -t zeiterfassung_web .` //erzeugt ein image mit dem namen zeiterfassung_web
3. `$ docker run -p 49160:8080 -d zeiterfassung_web:latest` //startet das image
4. Nun läuft die Webpage auf http://localhost:49160/
5. Es sei zu beachten, dass alle Pfade von src/app abhänig sind d.h. es wird die index.html automatisch geladen ([siehe hier](https://github.com/JonasSchade/Zeiterfassung/blob/master/webserver/server.js#L12))
6. zusl. dazu verweißt der Pfad /img auf den eigentlich Pfad /src/img ([siehe hier](https://github.com/JonasSchade/Zeiterfassung/blob/master/webserver/server.js#L13))
7. Um ein neues image auf dem gleichen port zu starten muss zuerst der alte container gestoppt werden, da dieser sonst den Port blockiert:
   * `$ docker ps -a` //listet alle aktiven conatiner auf
   * `$ docker stop <CONTAINER ID>` oder `$ docker stop <CONTAINER NAME>`


### Nice to know:
`$ docker rm <CONTAINER ID>` oder `$ docker rm <CONTAINER NAME>` //löscht container entgültig (muss gestoppt sein)  
  
`$ docker rmi <IMAGE ID>` oder `$ docker rm <IMAGE NAME>` //löscht image entgültig  
  
`$ docker stop $(docker ps -a -q); docker rm $(docker ps -a -q)` //stoppt und löscht alle container


Von Timm die Datenbank betreffend:
Name: mysql01
Password: Altijon
Datenbank wird mit
winpty docker exec -it mysql01 mysql -uroot -p
gestartet
Habe alles mit diesem Tutorial gemacht https://www.techrepublic.com/article/how-to-deploy-and-use-a-mysql-docker-container/

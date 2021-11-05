#/bin/bash
echo "*** REMOVIENDO CONTENEDOR E IMAGEN ***"
docker rm -f  gt-umg-api
docker rmi -f gt-umg-api:latest
echo "*** CONSTRUYENDO CONTENEDOR ***"
docker build -t gt-umg-api:latest .
echo "*** LEVANTANDO CONTENEDOR ***"
docker run -it --name gt-umg-api --network gt-umg-network -p 3000:3000 -d gt-umg-api:latest
echo "*** VISUALIZANDO LOG ***"
#docker exec -it gt-umg-api forever logs 0 -f
docker logs -f --tail 999 gt-umg-api
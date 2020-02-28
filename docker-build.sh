npm ci
npm run build

docker image build -t arasemami/react-enuygyn .
docker image push arasemami/react-enuygyn


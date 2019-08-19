# Docker project for running nodejs code


```bash
# Clone repo
git clone git@github.com:ajarv/docker-express.git
cd docker-express

#build docker image
docker build -t m7dock/kartik  .

# NPM Install
docker run -it -v $(pwd)/src:/usr/src/app  m7dock/kartik:latest npm install

# Docker Run

docker run -d -t --rm --name kartik -v $(pwd)/src:/usr/src/app -p 3000:3000  m7dock/kartik:latest  npm start 

# Test

curl localhost:3000/users

```
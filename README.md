## Jobs
Autodeploy to servers

Test:
- Install Nodejs
- Run npm install
- Run npm build --if-present
- Run npm test

Deploy:
- Make .env with secrets
- Connect with ssh to server
- Run git pull
- Run npm install
- Run pm2 ecosystem

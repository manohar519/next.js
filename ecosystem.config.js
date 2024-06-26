module.exports = {
  apps : [{
    script: 'npm start',
  },],

  deploy : {
    production : {
      key:"key.pem",
      user : 'ubuntu',
      host : '13.211.41.72',
      ref  : 'origin/main',
      repo : 'https://github.com/manohar519/next.js.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : ' source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options':"ForwardAgent=yes"
    }
  }
};

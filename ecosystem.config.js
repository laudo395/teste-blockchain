module.exports = {
    apps: [
        {
            name: "blockchain-teste",
            script: "./app/index.js",
            append_env_to_name: true,
            env_production: {
                PORT: 3000,
                PORT_P2P: 5000,
            }
        }],
    deploy : {
        app : {
          user : "REP_SSH_USERNAME",
          key  : "deploy.key",
          host : "REP_SSH_HOST",
          ref  : "REP_GITHUB_REF_NAME",
          repo : "git@github.com:REP_GITHUB_REPOSITORY.git",
          path : "/root/app",
          "post-deploy" : "yarn install && pm2 startOrRestart ecosystem.config.js --env production"
        },
    }
}
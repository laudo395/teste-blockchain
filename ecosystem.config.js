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
          user : process.env.SSH_USERNAME,
          key  : process.env.SSH_KEY,
          host : process.env.SSH_HOST,
          ref  : "origin/master",
          repo : "git@github.com:laudo395/teste-blockchain.git",
          path : "/root/app",
          "post-deploy" : "yarn install && pm2 startOrRestart ecosystem.config.js --env production"
        },
    }
}
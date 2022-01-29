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
          user : "root",
          key  : process.env.SSH_KEY,
          host : "137.184.79.60",
          ref  : process.env.GITHUB_REF_NAME,
          repo : "git@github.com:" + process.env.GITHUB_REPOSITORY + ".git",
          path : "/root/app",
          "post-deploy" : "yarn install && pm2 startOrRestart ecosystem.config.js --env production"
        },
    }
}
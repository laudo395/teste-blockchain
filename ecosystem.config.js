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
}
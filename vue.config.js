const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4200,
    proxy: {
      "/api/v1": {
        "target": "http://0.0.0.0:8080",
        "secure": false,
        changeOrigin: true,
      }
    }
  }
})

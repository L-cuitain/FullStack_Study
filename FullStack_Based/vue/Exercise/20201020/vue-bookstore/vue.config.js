module.exports = {
    devServer: {
    host: 'localhost',
    port: 3000,
    proxy: {
    '/books': {
    target: 'http://127.0.0.1:3000',
    // ws : true,
    changeOrigin: true,
    pathRewrite: {
    '^/books': ''
                   }
               }
           }
       }
   };
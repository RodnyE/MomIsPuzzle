 
module.exports = {
  // directories
  ROOT_DIR: __dirname, 
  PUBLIC_DIR: __dirname + "/client/dist", 

  SERVER_PORT: process.env.PORT || 3000,
  CLIENT_PORT: process.env.CLIENT_PORT || 3001,
}

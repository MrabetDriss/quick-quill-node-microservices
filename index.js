
const Server = require("./quick-quill/server");
const eurekaClient = require("./quick-quill/config/eureka-service");

const server = new Server(5005);
server.start();
eurekaClient.registerWithEureka("USER-SERVICE", 5005);


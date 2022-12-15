const grpc = require("grpc");
const productsProto = grpc.load("products.proto");
const usersProto = grpc.load("users.proto");

const products = require("./products.json");
const users = require("./users.json");

const server = new grpc.Server();

server.addService(productsProto.ProductService.service, {
  GET: (_, callback) => {
    callback(null, products);
  },
});

server.addService(usersProto.UserService.service, {
  GET: (_, callback) => {
    callback(null, users);
  },
});

server.bind("0.0.0.0:4000", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://localhost:4000");
server.start();

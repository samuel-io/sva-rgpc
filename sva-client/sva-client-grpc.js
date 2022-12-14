const grpc = require("grpc");
const PROTO_PATH = "../products.proto";
const ProductService = grpc.load(PROTO_PATH).ProductService;

const PROTO_PATH_USERS = "../users.proto";
const UserService = grpc.load(PROTO_PATH_USERS).UserService;

const client = new ProductService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const clientUsers = new UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = { client, clientUsers };

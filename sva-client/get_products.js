const { client } = require("./sva-client-grpc");

client.list({}, (error, products) => {
  if (!error) {
    console.log(products);
  } else {
    console.error(error);
  }
});

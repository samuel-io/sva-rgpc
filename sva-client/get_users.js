const { clientUsers } = require("./sva-client-grpc");

clientUsers.list({}, (error, users) => {
  if (!error) {
    console.log(users);
  } else {
    console.error(error);
  }
});

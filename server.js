const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

const startServer = async () => {
  try {
    console.log(DB_HOST);
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () =>
      console.log(`Database connection successful ${PORT}`)
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

startServer();

import app from "./app"
import client from "./config/mongodb";
const port = 3000


const server = async () => {
    // Connect with mongobd
    await client.connect();
    console.log("connectted with mongodb");

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

server();
import app from "./app"
import client from "./config/mongodb";
let server
const port = 3000


const bootstrap = async () => {
    // Connect with mongobd
    await client.connect();
    console.log("connectted with mongodb");

    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap();
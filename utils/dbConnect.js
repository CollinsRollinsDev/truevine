import mongoose from 'mongoose';

const connection = {};

async function dbConnection() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb+srv://admin:adminpassword@truevine-web.gmupg.mongodb.net/truevinedb?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(`Successfully accessed database: ${connection.isConnected}`)
}

export default dbConnection;
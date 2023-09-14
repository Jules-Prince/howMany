import mongoose from "mongoose";
require('dotenv').config()
const uri = process.env.DB_URI;
console.log(uri);
const visitorSchema = new mongoose.Schema({
    id: String,
    name: String
});

try {
    const connection = async () => {
        await mongoose.connect(uri, {
            // @ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    }

    connection();
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('MongoDB Connection Error:', error);
}

const Visitor = mongoose.model('visitors', visitorSchema, 'visitors');
console.log(Visitor)

export {Visitor}
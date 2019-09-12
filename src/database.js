import mongoose from 'mongoose';

export async function connect(){

    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
            useNewUrlParser: true
        });
        console.log('BD conectado');
    }
    catch (e) {
        console.log(e);
    }

    
}
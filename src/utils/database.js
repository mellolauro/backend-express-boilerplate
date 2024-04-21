import mongoose from 'mongoose'

const URI = 'mongodb+srv://lauromello:lZjJMnx0CsMr0qt1@cluster0.jmlbfzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection
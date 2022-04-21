import mongoose from 'mongoose'
import { MONGO_URI } from '../../commons/consts'
  ; ('mongodb+srv://tibas-labs:19062803@cluster0.pl4ql.mongodb.net/tibas-pad?retryWrites=true&w=majority')

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  }

  const connect = await mongoose.connect(MONGO_URI, opts).then((mongoose) => {
    return mongoose
  })
  return connect
}

export default dbConnect

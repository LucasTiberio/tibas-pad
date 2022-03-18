import mongoose from 'mongoose'
const MONGODB_URI =
  'mongodb+srv://tibas-labs:19062803@cluster0.pl4ql.mongodb.net/tibas-pad?retryWrites=true&w=majority'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  }

  const connect = await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose
  })
  return connect
}

export default dbConnect

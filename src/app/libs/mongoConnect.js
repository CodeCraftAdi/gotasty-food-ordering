// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { glob } from "fs"
import { MongoClient} from "mongodb"

if (!process.env.MONGO_URL) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGO_URL
const options = {}

let client
let clientPromise;

if (process.env.NODE_ENV === "development") {
  
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
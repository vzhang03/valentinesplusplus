require('dotenv').config(); // Load environment variables from .env file
const { MongoClient, ServerApiVersion } = require('mongodb');

// Use the environment variable for the MongoDB URI
const url = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    // Specify the database and collection
    const database = client.db("sampleDatabase"); // Replace with your database name
    const collection = database.collection("sampleCollection"); // Replace with your collection name

    // Example document to insert
    const doc = {
      name: "Alice",
      age: 25,
      hobbies: ["reading", "coding", "gardening"],
      createdAt: new Date(),
    };

    // Insert the document into the collection
    const insertResult = await collection.insertOne(doc);
    console.log("Document inserted with _id:", insertResult.insertedId);

    // Query the collection for the inserted document
    const query = { name: "Alice" }; // Filter criteria
    const foundDoc = await collection.findOne(query);

    console.log("Found document:", foundDoc);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Connection to MongoDB closed.");
  }
}

run().catch(console.dir);

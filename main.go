package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func main() {
	// Create a context with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Set up the MongoDB client options
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// Connect to the MongoDB server
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	// Check if the connection is successful
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal("Error pinging MongoDB:", err)
	}

	fmt.Println("Connected to MongoDB!")

	// Access a specific collection in your database
	theCollection := client.Database("your-database-name").Collection("your-collection-name")

	// Insert a document into the collection
	insertResult, err := theCollection.InsertOne(ctx, bson.D{
		"Name", "John Doe",
		"Song", "Don't Dance",
		"tags", bson.A{"New", "CodeJams", "Pop Culture"},
	})

	if err != nil {
		log.Println("There was an error in trying to migrate the data into the database:", err)
	}

	fmt.Println("Inserted ID:", insertResult.InsertedID)

	// Close the connection when you're done
	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			log.Fatal("Error disconnecting from MongoDB:", err)
		}
	}
}


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
	clientOptions := options.Client().ApplyURI("mongodb+srv://MongoDb:masooma2013@mongodb.o6t0sar.mongodb.net/")

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

	defer client.Disconnect(ctx)

	// Specify the database and collection you want to work with
	database := client.Database("MongoDb")
	collection := database.Collection("Create")

	insertResult, err := collection.InsertOne(ctx, bson.D{
		{"Name", "John Doe"},
		{"Song", "Don't Dance"},
		{"tags", bson.A{"New", "CodeJams", "Pop Culture"}},
	})
	if err != nil {
		log.Println("There was an error trying to insert data into the database")
	}

	fmt.Println("Inserted ID:", insertResult.InsertedID)
}

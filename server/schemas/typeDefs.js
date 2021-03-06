const { gql } = require('apollo-server-express');
//const dateFormat = require('../utils/dateFormat');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    location: String
    email: String
    password: String
    picURL: String
    items: [Item]
    orders: [Order]
    reviews: [Review]
  }

  type Item {
    _id: ID
    title: String
    item_name: String
    item_description: String
    item_quantity: Float
    item_unit: String
    item_price: Float
    category_name: String
    createdAt: String
    user: User
    reviews: [Review]!
  }

  type Review{
    _id: ID
    title: String!
    body: String!
    createdAt: String
    reviewee: String!
    rating: Float!
    user: User
    
  }

  type Auth {
    token: ID!
    user: User
  }
  type Checkout {
    session: ID
  }

  type Order{
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type S3Object {
    signedRequest: String
    URL: String
  }
  
  type Query {
    users: [User]
    user: User
    seller(username:String): User
    items: [Item]
    itemscat(category_name:String):[Item]
    itemsuser(username:String): [Item]
    item(_id:ID!): Item
    order(_id: ID!): Order
    checkout(items: [ID]!): Checkout   
    reviews(reviewee:String): [Review]
    review(reviewId: ID!): Review

  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, location: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(first_name: String!, last_name: String!, location: String!, email: String!): User
    createReview(_id: ID, body: String!, reviewee: String!, title: String!, rating: Float): Review
    deleteReview(_id: ID!): User!
    addOrder(items: [ID]!): Order
    uploadFile(filename: String!): S3Object

    addItem(
      _id: ID
      title: String
      item_name: String
      item_description: String
      item_quantity: Float
      item_unit: String
      item_price: Float
      category_name: String
      username: String
    ): Item
    updateItem(
      _id: ID
      title: String
      item_name: String
      item_description: String
      item_quantity: Float
      item_unit: String
      item_price: Float
      category_name: String
    ): Item
    removeItem( _id: ID!): Item

  }
`;

module.exports = typeDefs;
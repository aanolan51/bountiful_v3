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
    items: [Item]
    reviews: [Review]
  }

  type Category {
    _id: ID
    category_name: String
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
    user: User
    category: Category
    
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

  input ItemData {
    _id: ID
    title: String
    item_name: String
    item_description: String
    item_quantity: Float
    item_unit: String
    item_price: Float
    cat_name: String
  }

  type itemResponse{
    success: Boolean
    item: Item
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username:String!): User
    categories: [Category]
    items: [Item]
    itemscat(category:ID):[Item]
    itemsuser(username:String): [Item]
    item(_id:ID!): Item
    reviews: [Review]
    review(reviewId: ID!): Review
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, location: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(first_name: String!, last_name: String!, location: String!, username: String!, email: String!, password: String!): User
    createReview(userId: ID!, title: String, body: String!, createdAt: String, reviewee: String, rating: Float): User
    deleteReview(userId: ID!, reviewId: ID!): User
    rateUser(userId: ID!, rating_count:Float): User

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
      cat_name: String
    ): Item
    removeItem( itemId: ID!): Item

  }
`;

module.exports = typeDefs;
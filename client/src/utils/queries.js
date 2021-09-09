import { gql } from '@apollo/client';

//Query one user and all their associated items for sale:
export const QUERY_SELLER = gql`
  query singleSeller($username: String!) {
    seller(username: $username) {
        _id
        first_name
        last_name
        username
        location
        email
      items {
        _id
        title
        item_name
        item_description
        item_quantity
        item_unit
        item_price
        category_name
        createdAt
      }
    }
  }
`;

//Query a single user for the seller profile:
export const QUERY_SINGLE_USER = gql`
  query singleuser{
    user{
        _id
        first_name
        last_name
        username
        location
        email
        items {
          _id
          title
          item_name
          item_description
          item_quantity
          item_unit
          item_price
          category_name
          createdAt
        }
    }
  }
`;

//Query all items for sale:
export const QUERY_ITEMS = gql`
  query getItems {
    items {
        _id
        title
        item_name
        item_description
        item_quantity
        item_unit
        item_price
        category_name
        createdAt
        user{
          _id
          username
          location
        }
    }
  }
`;

//Query all items for sale for one user:
export const QUERY_ITEMS_USER = gql`
  query getItemsUser ($username:String!) { 
    itemsuser (username:$username) {
        _id
        title
        item_name
        item_description
        item_quantity
        item_unit
        item_price
        cat_name
        user{
          _id
          username
          location
        }
    }
  }
`;

//Query a single item:
export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem($_id: ID!) {
    item(_id: $_id) {
        _id
        title
        item_name
        item_description
        item_quantity
        item_unit
        item_price
        category_name
        createdAt
        user{
          _id
          username
          location
          email
        }
      }
    }
`;

//Query items based on category:
export const QUERY_CAT_ITEMS = gql`
  query getItems($category_name:String!) {
    itemscat(category_name: $category_name) {
        _id
        title
        item_name
        item_description
        item_quantity
        item_unit
        item_price
        category_name
        user{
          _id
          username
        }
    }
  }
`;

//Query all the categories:
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      category_name
    }
  }
`;

//TODO: QUERY REVIEWS
//export const QUERY_REVIEWS = gql`
//  {
//    reviews {
//     id
//      createdAt
//      username
//      body
//    }
//  }
//`;
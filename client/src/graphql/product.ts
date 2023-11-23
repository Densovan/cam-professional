import { gql } from "@urql/core";

export const GET_ALL_PRODUCTS = gql`
  query {
    themeProducts {
      id
      desc
      status
      createdAt
      title
      thumbnail
      images
      variants {
        price
        option
        label
        image
      }
      updatedAt
      category {
        image
        id
        title {
          en
          kh
        }
        subcategories {
          id
          title {
            en
            kh
          }
          image
        }
      }
    }
  }
`;

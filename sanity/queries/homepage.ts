import { defineQuery } from 'next-sanity'

export const HOMEPAGE_QUERY = defineQuery(
  `*[_type == "homepage"][0] {
    aboutSection {
      title,
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      text
    }
  }`
)

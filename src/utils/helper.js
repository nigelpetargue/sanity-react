/** @format */

import { client } from "../lib/sanity"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  console.log(source)
  return builder.image(source)
}

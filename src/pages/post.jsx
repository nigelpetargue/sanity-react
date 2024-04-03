/** @format */

import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getPostBySlug } from "../utils/handlers"
import { urlFor } from "../utils/helper"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export function SinglePost() {
  const { slug } = useParams()

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGetSinglePost = useCallback(async () => {
    setLoading(true)
    try {
      const response = await getPostBySlug(slug)
      setPost(response[0])
      console.log(response[0])
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    handleGetSinglePost()
  }, [])

  return (
    <>
      {loading ? (
        <Skeleton count={10} />
      ) : (
        <main className="container mx-auto max-w-[820px]">
          <p className="text-white">{post.title}</p>
          {/* <img
            className="object-cover w-[300px] h-[200px]"
            src={urlFor(post.mainImage).url()}
            alt={post.slug}
          /> */}
        </main>
      )}
    </>
  )
}

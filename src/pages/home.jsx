/** @format */

import { useEffect, useState } from "react"
import { getPost } from "../utils/handlers"
import { Post } from "../components/Post"
import { toast } from "react-toastify"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGetPosts = async () => {
    setLoading(true)

    try {
      const response = await getPost()
      setPosts(response)
    } 
    catch (error) {
      toast.warn(error.message)
    } 
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetPosts()
  }, [])

  return (
    <>
      <main className="container mx-auto max-w-[820px]">
        <section className="mt-16">
          <h1 className="text-white text-5xl sm:text-7xl font-bold">Node Curious.</h1>
          <p className="text-neutral-400 text-lg mt-5 mb-8 tracking-wide leading-7">
            Explore Narratives, Perspective, and Expertise Accross the Digital Realm.
          </p>
        </section>

        <div className="border-t border-gray-300 my-4"></div>

        <section className="contianer mx-auto max-w-[820px] mt-20 pb-10">
          {posts.length > 0 && (
            <>
              {posts.map((post) => (
                <div key={post._id}>
                  {loading ? <Skeleton count={5} /> : <Post key={post._id} post={post} />}
                </div>
              ))}
            </>
          )}
        </section>
      </main>
    </>
  )
}

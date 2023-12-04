import { useEffect, useState } from 'react';
import { getPost } from '../utils/handlers';
import { Post } from '../components/Post';

export function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost()
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className='container mx-auto max-w-[820px]'>
        <div className='mt-32 mb-24'>
          <h1 className='text-white text-5xl sm:text-7xl font-bold'>Node Curious.</h1>
          <p className='text-neutral-400 text-lg mt-5 mb-8 tracking-wide leading-7'>
            Explore Narratives, Perspective, and Expertise Accross the Digital Realm.
          </p>
        </div>

        <div className='border-t border-gray-300 my-4'></div>
      </div>

      <div className='contianer mx-auto max-w-[820px]'>
        <Post post={post[0]} />
      </div>
    </>
  );
}

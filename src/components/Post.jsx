import { format } from 'date-fns';
import { urlFor } from '../utils/helper';
import { FaRegBookmark } from 'react-icons/fa';

export function Post({ post }) {
  return (
    <>
      {post && (
        <div className='flex mt-10'>
          <div className='flex-1 mr-5'>
            <div className='flex items-center gap-4'>
              <img
                className='rounded-full'
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={35}
                height={35}
              />
              <div>
                <p className='text-white font-bold'>{post.author.name}</p>
                <p className='text-neutral-400 text-xs'>{post.author.bio[0]?.children[0].text}</p>
              </div>
            </div>
            <div className='my-4'>
              <p className='text-white text-xl font-bold'>{post.title}</p>
              <p className='text-neutral-400 text-sm font-semibold mt-2'>{post.subheading}</p>
            </div>

            <div className='text-white text-xs flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <p>{format(new Date(post.publishedAt), 'LLL e')}</p>
                <span>·</span>
                <p>{`${post.readingTime} min read`}</p>
                <span>·</span>
                <p className='bg-opaque py-2 px-3 rounded-full'>{post.categories[0].title}</p>
              </div>
              <FaRegBookmark size={18} cursor='pointer' />
            </div>
          </div>

          <img src={urlFor(post.mainImage).url()} alt={post.slug} />
        </div>
      )}
    </>
  );
}

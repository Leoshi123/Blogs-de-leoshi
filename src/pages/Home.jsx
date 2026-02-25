import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Post from '../components/Post'
import { usePosts } from '../hooks/usePosts'

export default function Home () {
  const { posts, loading } = usePosts()

  return (
    <div>
      <Header />
      <main className='p-4'>
        <div className='flex justify-end mb-4'>
          <Link to='/new' className='bg-blue-500 text-white px-4 py-2 rounded-md'>New Post</Link>
        </div>
        {loading
          ? <p>Loading...</p>
          : posts.map(post => <Post key={post.id} post={post} />)}
      </main>
    </div>
  )
}

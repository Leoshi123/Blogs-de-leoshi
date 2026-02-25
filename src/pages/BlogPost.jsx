import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { usePost } from '../hooks/usePost'
import { format } from 'date-fns'

export default function BlogPost () {
  const { id } = useParams()
  const { post, loading } = usePost(id)

  if (loading) {
    return <p>Loading...</p>
  }

  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <div>
      <Header />
      <main className='p-4'>
        <article>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <p className='text-gray-500'>
            {format(new Date(post.created_at), 'MMMM dd, yyyy')}
          </p>
          <div className='mt-4 prose'>
            {post.content}
          </div>
        </article>
        <div className='mt-4'>
          <Link to={`/edit/${post.id}`} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Edit</Link>
        </div>
      </main>
    </div>
  )
}

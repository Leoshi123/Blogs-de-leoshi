import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function Post ({ post }) {
  return (
    <div className='p-4 border-b'>
      <Link to={`/post/${post.id}`} className='text-2xl font-bold'>{post.title}</Link>
      <p className='text-gray-500'>
        {format(new Date(post.created_at), 'MMMM dd, yyyy')}
      </p>
    </div>
  )
}

import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PostForm from '../components/PostForm'
import { usePost } from '../hooks/usePost'
import { supabase } from '../lib/supabase'

export default function EditPost () {
  const { id } = useParams()
  const navigate = useNavigate()
  const { post, loading } = usePost(id)

  const handleSave = async (updatedPost) => {
    const { error } = await supabase
      .from('posts')
      .update(updatedPost)
      .eq('id', id)

    if (!error) {
      navigate(`/post/${id}`)
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Header />
      <main className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>Edit Post</h1>
        <PostForm post={post} onSave={handleSave} />
      </main>
    </div>
  )
}

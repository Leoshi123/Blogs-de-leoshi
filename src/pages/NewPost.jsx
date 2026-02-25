import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PostForm from '../components/PostForm'
import { supabase } from '../lib/supabase'

export default function NewPost () {
  const navigate = useNavigate()

  const handleSave = async (post) => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
      .from('posts')
      .insert([{ ...post, author_id: user.id }])
      .single()

    if (!error) {
      navigate(`/post/${data.id}`)
    }
  }

  return (
    <div>
      <Header />
      <main className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>New Post</h1>
        <PostForm onSave={handleSave} />
      </main>
    </div>
  )
}

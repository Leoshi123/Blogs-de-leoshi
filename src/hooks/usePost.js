import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function usePost (id) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost () {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

      if (!error) {
        setPost(data)
      }

      setLoading(false)
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  return { post, loading }
}

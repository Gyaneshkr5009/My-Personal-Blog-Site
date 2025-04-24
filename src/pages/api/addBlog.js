import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, content, date } = req.body;

  const user_id = process.env.VITE_SUPABASE_USER_ID;

  if (!user_id) return res.status(500).json({ error: 'User ID not set in environment' });

  const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, content, date, user_id }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json(data[0]);
}

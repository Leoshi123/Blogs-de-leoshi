-- Políticas para profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Políticas para posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published posts are viewable by everyone"
  ON posts FOR SELECT USING (published = true);

CREATE POLICY "Authors can view own drafts"
  ON posts FOR SELECT USING (author_id = auth.uid());

CREATE POLICY "Admins can view all posts"
  ON posts FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

CREATE POLICY "Admins can insert posts"
  ON posts FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

CREATE POLICY "Admins can update posts"
  ON posts FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

CREATE POLICY "Admins can delete posts"
  ON posts FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );
import React from 'react';
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import PostEdit from '../components/PostEdit'
import PostList from '../components/PostList'

export const all = ({match}) => (
  <div id="content">
    <PostList />
    <Link to="/new">New Post</Link>
  </div>
)

export const category = ({match}) => (
  <div id="content">
    <PostList path={match.params.category} />
    <Link to={`/new/${match.params.category}`}>New Post</Link>
  </div>
)

export const newPost = ({match}) => (
  <div id="content">
    <PostEdit
      post={{title:""}}
      category={match.params.category}
    />
  </div>
)

export const edit = ({match}) => (
  <div id="content">
    <PostEdit postId={match.params.post_id} />
  </div>
)

export const post = ({match}) => (
  <div id="content">
    <Post postId={match.params.post_id} />
  </div>
)
// You could move all of these components to a separate file. This way, you could have a view per file. In big projects, this is the more interesting solution, because it facilitates the developer experience in editing separate and smaller files.
// > but I'm not doing that because I don't need to break a forty-line file into five separate ten-line files

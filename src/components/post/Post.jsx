import React from 'react'
import UserPost from '../userpost/UserPost'

import './post.css'
const Post = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map(p=>( <UserPost post={p} /> ))}
     
  
    </div>
  )
}

export default Post
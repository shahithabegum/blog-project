import React from 'react'
import SinglePost from '../singlepost/SinglePost'
import './userpost.css'

const UserPost = ({post}) => {
  const PF='http://localhost:2000/';
console.log("userpost",post.photo)
  return (
    <div className='upost'>
      {post.photo && <img className='upostImg' src={PF+post.photo} alt="postimg" />}
        
        <div className="postInfo">
            <div className="postats">
                {post.categories.map(c=>(<span className="postcat">{c.name}</span>))}
                
            </div>
            <a href={`/post/${post._id}`}> <span className='postTitle'>{post.title}</span></a>
           
            <hr />
            <span className="postdtae">{new Date(post.createdAt).toDateString()}</span>
            <p className="postdep">{post.desc}</p>
        </div>
     </div>
  )
}

export default UserPost
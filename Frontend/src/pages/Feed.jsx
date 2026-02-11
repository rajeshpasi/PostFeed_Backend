import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {id: 1,
         image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*__f27S-qQF2CAASt5bOwqg.png',
         caption: 'Beautiful sunset!',
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:3000/get_posts') // Update with your backend URL
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    
           
    }, []);

  return (
    <section className='feed-section'>
        {posts.length > 0 ? (
            <div className='posts-container'>
                {posts.map(post => (
                    <div key={post.id} className='post'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>No posts available.</p>
        )}
    </section>
  )
}

export default Feed
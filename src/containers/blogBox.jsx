import React, { useEffect, useState } from 'react';
import { BlogBox } from '../components/bloglist';

const Blogcomponent = () => {
  const [postsList, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`https://tame-puce-chipmunk-hose.cyclic.app/api/v1/CRUD`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setIsPending(false);
        console.log(data);
        console.log(postsList);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="blogList">
          {isPending &&
           <div className='Loader'>Loading...
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96.1 103.6C85.7 112 72.6 116 59.3 114.7C48.8 113.7 39 109.6 31.1 102.9H44V94.9001H18V120.9H26V109C35.1 116.7 46.4 121.5 58.6 122.6C60.5 122.8 62.3 122.9 64.1 122.9C77.6 122.9 90.6 118.3 101.1 109.7C120.2 94.3 127.7 69.2 120.2 45.8L112.6 48.2001C119 68.6 112.6 90.3 96.1 103.6Z" fill="white"/>
                  <path d="M103 19.7C81.7999 1.00004 49.4999 -0.299956 26.8999 18.1C7.89992 33.5 0.399922 58.4 7.69992 81.7L15.2999 79.3C8.99992 59.2 15.4999 37.6 31.8999 24.4C51.5999 8.40004 79.6999 9.60004 97.9999 26H84.9999V34H111V8.00004H103V19.7Z" fill="white"/>
                </svg>
          </div>}
          {postsList && <BlogBox blogs={postsList}/>}
    </div>
    
  )
};


export default Blogcomponent;


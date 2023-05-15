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
      {isPending && <div style={{color:'white'}}>Loading...</div>}
      {postsList && <BlogBox blogs={postsList}/>}
    </div>
  );
};

export default Blogcomponent;


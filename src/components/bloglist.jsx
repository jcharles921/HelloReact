import React from 'react';

export const BlogBox = (props) => {
    const { blogs } = props;
  return (
    <main>
      <p className="Title">Blog Posts</p>

        {blogs.map((post) => (
          <div className="post" key={post.title}>
            <span>
              <a href="/blog" className="blogpost">
                <div className="postimage">
                  <img src={post.imageUrl} alt="" />
                </div>
                <div className="postdescription">
                  <p className="post_title">{post.title}</p>
                  <p className="post_date">{post.createdAt}</p>
                  <div className="likes_comments">
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p>{post.length}</p>
                    <p>0</p>
                  </div>
                </div>
              </a>
            </span>
          </div>
        ))}
    </main>
  );
};

export default BlogBox;

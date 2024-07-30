import React, { useEffect, useState } from "react";
import { List } from "antd";
import { fetchUserPosts } from "../api";
import "../App.css";

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchUserPosts(Math.floor(Math.random() * 10) + 1).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h3 className="blogs-header">All Blogs</h3>
      <div className="blogs-page">
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(post) => (
            <List.Item className="blog-list-item">
              <List.Item.Meta
                avatar={
                  <img
                    src="/logo512.png"
                    alt="React Logo"
                    style={{ width: "50px", height: "50px", margin: "10px" }}
                  />
                }
                title={<a href={`/details/${post.id}`}>{post.title}</a>}
                description={post.body}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Blogs;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import "../App.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        message.success("Post deleted successfully");
        navigate("/blogs");
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue({
      title: post?.title,
      body: post?.body,
    });
  };

  const handleSave = (values: Post) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, values)
      .then((response) => {
        setPost(response.data);
        setIsEditing(false);
        message.success("Post updated successfully");
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-details-page">
      {isEditing ? (
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="Description"
            rules={[
              { required: true, message: "Please enter the description" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div>
          <img
            src="/logo512.png"
            alt="React Logo"
            style={{ width: "150px", height: "150px", marginBottom: "20px" }}
          />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Button type="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button
            type="primary"
            onClick={handleDelete}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;

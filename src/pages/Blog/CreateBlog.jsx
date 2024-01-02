import React, { useState } from "react";
import "./Create_Blog.css";
import axios from "axios";
import { apiUrl } from "../../actions/apiUrl";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const alert = useAlert();
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(`${apiUrl}/api/v1/blog/new`, formData);
      if (resp?.data?.success) {
        alert.success("Blog Created Successfully !");
        history.push("/Read_Blog");
      } else {
        alert.error("Something went wrong");
      }
    } catch (error) {
      alert.error(error?.message);
    }
  };

  return (
    <div className="create__blog__container">
      <div className="blog-head">
        <h3 className="blog-heading" style={{ color: "wheat" }}>
          Wrtie your <span className="yellow-color">Amazing Blogs</span>
        </h3>
      </div>

      <form onSubmit={handleFormSubmit} className="form__container">
        <input
          required
          name="name"
          type="text"
          placeholder="Write Blog Title"
          onChange={handleOnChange}
        />
        <input
          required
          name="author"
          type="text"
          placeholder="Write Blog Author"
          onChange={handleOnChange}
        />
        <textarea
          required
          name="content"
          rows="10"
          placeholder="Write Blog Description"
          onChange={handleOnChange}
        ></textarea>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;

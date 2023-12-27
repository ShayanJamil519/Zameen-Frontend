import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogs from "./Blogdata";
import { apiUrl } from "../../actions/apiUrl";
import axios from "axios";

const BlogMain = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const response = await axios.get(`${apiUrl}/api/v1/blogs`);
      console.log("response?.data?.data");
      console.log(response?.data?.blogs);
      setAllBlogs(response?.data?.blogs);
    };

    getAllBlogs();
  }, []);

  return (
    <>
      <div className="blog-head">
        <h3 className="blog-heading" style={{ color: "wheat" }}>
          Read the <span className="yellow-color">Amazing Blogs</span> from Us!
        </h3>
      </div>
      <div className="bloglist">
        {allBlogs.length > 0 &&
          allBlogs.map((blog) => {
            return (
              <div className="blogPreview" key={blog.id}>
                <Link to={`/Blog/Blogdata/${blog?._id}`}>
                  <div className="blogImages">
                    <img src={blogs[0].img} alt="logo" />
                  </div>

                  <div className="blogInfo">
                    <div>
                      <img
                        className="blog-verify"
                        src="/verification.jpg"
                        alt="verification"
                      />
                    </div>
                    <h2 className="blog-title">{blog?.name}</h2>
                    <p className="blog-para">Written by {blog?.author}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BlogMain;

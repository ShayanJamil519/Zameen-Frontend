import React, { useEffect, useState } from "react";
import blogs from "./Blogdata";
import "./Blog.css";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../actions/apiUrl";
import axios from "axios";

const BlogViewDetails = () => {
  const { id } = useParams();
  const [blogDetails, setGetBlogDetails] = useState({});

  useEffect(() => {
    const getAllBlogs = async () => {
      const response = await axios.get(`${apiUrl}/api/v1/blog/${id}`);
      console.log("response?.data?.data");
      console.log(response?.data?.blog);
      setGetBlogDetails(response?.data?.blog);
    };

    getAllBlogs();
  }, []);

  return (
    <div className="BlogViewDetails" key={id}>
      <article>
        <div className="blogViewHeader">
          <div className="blogViewHeadInfo">
            <h1>{blogDetails?.name}</h1>
            <h2>Written By {blogDetails?.author}</h2>
          </div>
          <div className="blogViewHeadImg">
            <img src={blogs[0].img} alt="img"></img>
          </div>
        </div>

        <div className="blogParadetails">
          <p>{blogDetails?.content}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogViewDetails;

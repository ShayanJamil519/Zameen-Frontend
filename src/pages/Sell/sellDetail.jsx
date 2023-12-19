import React,{useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { clearErrors, getPropertyDetails } from "../../actions/sellAction";
import "./sellDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const SellDetail = ({match}) => {


  const dispatch = useDispatch();
  const alert = useAlert();

  const { property, 
    // loading,
     error } = useSelector(
    (state) => state.propertyDetails
  );


  // const property = {
  //   _id: 1,
  //   image: "/s1.jpg",
  //   views: 4,
  //   price: 45000,
  //   address: "House-No:210 near azizabad malir",
  //   city: "Karachi",
  //   landArea: "200",
  //   propertyTitle: "This is property title",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   createdAt: "14-7-22",
  // };

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
  
    }
    dispatch(getPropertyDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);


  return (
    <div className="sellCard">
      <div className="sell-head">
        <h1>
          Thank You for showing interest in <br />
          Buying a House{" "}
          <span className="yellow-color" style={{ textAlign: "center" }}>
            With Us!
          </span>
        </h1>
      </div>
      <h2 className="sellDet-heading">{property.propertyTitle}</h2>
      <p className="sellDet-para">
        <span className="sellDet-label">Description: </span>
        {property.description}
      </p>

<div className="sell-detail-carousal">

      <Carousel fade className="sell-carousel">
        {property.images &&
          property.images.map((item, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100 CarouselImage"
                key={i}
                src={item.url}
                alt={`${i} Slide`}
              />
              <Carousel.Caption>
                {/* <h3>{item.purpose}</h3> */}
                {/* <h3>First slide label</h3> */}
                {/* <p>{item.propertyTitle}</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
          </div>

      <div className="sell-detail">
        <p className="sellDet-para">
          <span className="sellDet-label">Price: </span>
          {property.price}
        </p>
        {/* {order.user && order.user.name} */}
        <p className="sellDet-para">
          <span className="sellDet-label">Property Owner: </span>
          {property.user && property.user.name}
        </p>
        {/* <p className="sellDet-para">
          <span className="sellDet-label">Owner Contact: </span>
          {property.user}
        </p> */}
        {/* <p className="sellDet-para">
          <span className="sellDet-label">Owner Email: </span>
          {property.user}
        </p> */}
        <p className="sellDet-para">
          <span className="sellDet-label">Address: </span>
          {property.address}
        </p>
        <p className="sellDet-para">
          <span className="sellDet-label">City: </span>
          {property.city}
        </p>
        <p className="sellDet-para">
          <span className="sellDet-label">Land Area: </span>
          {property.landArea}
        </p>
        <p className="sellDet-para">
          <span className="sellDet-label">Views: </span>
          {property.views}
        </p>
        <Link to="/book-property" style={{ textDecoration: "none" }}>
          <button className="sellDet-btn">
            Buy Now{" "}
            <span>
              <BsArrowRight
                style={{
                  marginLeft: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SellDetail;


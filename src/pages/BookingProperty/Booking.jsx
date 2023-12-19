import React, { Fragment, useState, useEffect } from "react";
import "./Booking.css";
import FaceIcon from "@material-ui/icons/Face";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import {  getProjectDetails } from "../../actions/projectAction";


import {clearErrors, createNewProjectRegisteration} from "../../actions/registerationAction";
import { NEW_REGISTERATION_RESET } from "../../constants/registerationConstants";



const Booking = ({ match }) => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();

  // const [cID, setCID] = useState("");
  const [pID, setPID] = useState(0);
  const [pName, setPName] = useState("");
  const [totalInstallments, setTotalInstallments] = useState(0);

  const installation = [6];

  const {
    user,
    //  loading,
    // isAuthenticated,
  } = useSelector((state) => state.user);

  const {
    project,
    // , loading
    // error,
  } = useSelector((state) => state.projectDetails);

  const {
    // loading,
    error,
    success,
  } = useSelector((state) => state.newRegisteration);

  useEffect(() => {
    if (project) {
      setPID(project._id);
      setPName(project.projectName);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProjectDetails(match.params.id));

    if (success) {
      alert.success("Registered Successfully");
      history.push("/");
      dispatch({ type: NEW_REGISTERATION_RESET });
    }
  }, [
    dispatch, alert, error, history, success, project, match.params.id
  ]);



  const createPropertyRegisteration = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("totalInstallments", totalInstallments);

    dispatch(createNewProjectRegisteration(project._id, myForm));

  };

  return (
    <div className="BookingCont">
      <Fragment>
        {/* {loading ? (
        <Loader />
      ) : ( */}
        <Fragment>
          <div className="BookingCont">
            <div className="bookingBox">
              <h1 className="bookingHeading">Book Your Project</h1>
              <h3 className="bookingSubHeading">Make a safe future!</h3>

              <form
                className="bookingForm"
                encType="multipart/form-data"
                onSubmit={createPropertyRegisteration}
              >
                <div className="bookingName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Customer ID"
                    value={`Customer ID: ${user._id}`}
                    required
                    name="name"
                    readOnly
                  />
                </div>

                <div className="bookingName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Project ID"
                    required
                    name="name"
                    value={`Project ID: ${pID}`}
                    readOnly
                  />
                </div>

                <div className="bookingName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Project Name"
                    required
                    name="name"
                    value={`Project Name: ${pName}`}
                    readOnly
                  />
                </div>

                <div className="bookingEmail">
                  <label for="installments"> Installments </label>
                  <select
                    name="installments"
                    id="installments"
                    className="bookingDropdown"
                    onChange={(e) => setTotalInstallments(e.target.value)}
                  >
                    <option>Choose Installation Period</option>
                    {installation.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="submit"
                  value="Confirm Boooking"
                  className="bookingBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
        {/* )} */}
      </Fragment>
    </div>
  );
}

export default Booking


// import React, { Fragment, useState, useEffect } from "react";
// import "./Booking.css";
// import FaceIcon from "@material-ui/icons/Face";
// import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
// import { clearErrors, getProjectDetails } from "../../actions/projectAction";
// import {
//   clearErrors,
//   createNewProjectRegisteration,
// } from "../../actions/registerationAction";
// import { NEW_REGISTERATION_RESET } from "../../constants/registerationConstants";
// // import { useHistory } from "react-router-dom";

// const Booking = ({ match }) => {
//   const dispatch = useDispatch();
//   // const alert = useAlert();
//   // const history = useHistory();

  // const {
  //   user,
  //   //  loading,
  //   isAuthenticated,
  // } = useSelector((state) => state.user);

  // const {
  //   project,
  //   // , loading
  //   error,
  // } = useSelector((state) => state.projectDetails);

  // const {
  //   // loading,
  //   err,
  //   success,
  // } = useSelector((state) => state.newRegisteration);

  // const [cID, setCID] = useState("");
  // const [pID, setPID] = useState(0);
  // const [pName, setPName] = useState("");
  // const [totalInstallation, setTotalInstallation] = useState("");

  // const installation = [3, 6, 9];

  // const createPropertyRegisteration = (e) => {
  //   e.preventDefault();

  //   // const myForm = new FormData();

  //   // myForm.set("totalInstallments", totalInstallation);

  //   // dispatch(createNewProjectRegisteration(myForm));
  // };

  // useEffect(() => {
  //   if (project) {
  //     setPID(project._id);
  //     setPName(project.projectName);
  //   }
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   // if (success) {
  //   //   alert.success("Registered Successfully");
  //   //   history.push("/");
  //   //   dispatch({ type: NEW_REGISTERATION_RESET });
  //   // }
  //   dispatch(getProjectDetails(match.params.id));
  // }, [
  //   // dispatch, alert, error, history, success
  // ]);

  // return (
  //   <div className="BookingCont">
  //     <Fragment>
  //       {/* {loading ? (
  //       <Loader />
  //     ) : ( */}
  //       <Fragment>
  //         <div className="BookingCont">
  //           <div className="bookingBox">
  //             <h1 className="bookingHeading">Book Your Project</h1>
  //             <h3 className="bookingSubHeading">Make a safe future!</h3>

  //             <form
  //               className="bookingForm"
  //               encType="multipart/form-data"
  //               // onSubmit={createPropertyRegisteration}
  //             >
  //               <div className="bookingName">
  //                 <FaceIcon />
  //                 <input
  //                   type="text"
  //                   placeholder="Customer ID"
  //                   value={`Customer ID: ${user._id}`}
  //                   required
  //                   name="name"
  //                   readOnly
  //                 />
  //               </div>

  //               <div className="bookingName">
  //                 <FaceIcon />
  //                 <input
  //                   type="text"
  //                   placeholder="Project ID"
  //                   required
  //                   name="name"
  //                   value={`Project ID: ${pID}`}
  //                   readOnly
  //                 />
  //               </div>

  //               <div className="bookingName">
  //                 <FaceIcon />
  //                 <input
  //                   type="text"
  //                   placeholder="Project Name"
  //                   required
  //                   name="name"
  //                   value={`Project Name: ${pName}`}
  //                   readOnly
  //                 />
  //               </div>

  //               <div className="bookingEmail">
  //                 <label for="installments"> Installments </label>
  //                 <select
  //                   name="installments"
  //                   id="installments"
  //                   className="bookingDropdown"
  //                   onChange={(e) => setTotalInstallation(e.target.value)}
  //                 >
  //                   <option>Choose Installation Period</option>
  //                   {installation.map((cate) => (
  //                     <option key={cate} value={cate}>
  //                       {cate}
  //                     </option>
  //                   ))}
  //                 </select>
  //               </div>

  //               <input
  //                 type="submit"
  //                 value="Confirm Boooking"
  //                 className="bookingBtn"
  //               />
  //             </form>
  //           </div>
  //         </div>
  //       </Fragment>
  //       {/* )} */}
  //     </Fragment>
  //   </div>
  // );
// };

// export default Booking;

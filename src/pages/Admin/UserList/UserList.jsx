import React, { useEffect, useRef, useState } from "react";
import "./UserList.css";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataGrid } from "@material-ui/data-grid";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-ui/core";
import { useAlert } from "react-alert";
import { getAllUsers, clearErrors } from "../../../actions/userAction";

import { useSelector, useDispatch } from "react-redux";

const UserList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, users } = useSelector((state) => state.allUsers);

  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);

  const controlSidebar = (e, tab) => {
    if (tab === "yes") {
      sidebarTab.current.classList.add("sideBarMoveToLeft");
      sidebarTab.current.classList.remove("admin-sidebar");
      setShow("no");
    } else {
      sidebarTab.current.classList.add("admin-sidebar");
      sidebarTab.current.classList.remove("sideBarMoveToLeft");
      setShow("yes");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAllUsers());
  }, [dispatch, error, alert]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 220, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "phoneNo",
      headerName: "Phone No",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "Joined Since",
      type: "number",
      minWidth: 250,
      flex: 0.3,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button
            // onClick={() => deleteUserHandler(params.getValue(params.id, "id"))}
          >
            <MdDelete style={{ fontSize: "1.2rem" }} />
          </Button>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        email: item.email,
        phoneNo: item.phoneNo,
        createdAt: item.createdAt,
      });
    });

  return (
    <div className="dashboard">
      <div className="admin-sidebar" ref={sidebarTab}>
        <Sidebar />
      </div>
      <div className="admin-container">
        <div className="dashboard-nav">
          <button onClick={(e) => controlSidebar(e, show)}>
            <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
        <div>
          <div className="userListContainer">
            <h1 id="userListHeading">All Users</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
              disableSelectionOnClick
              className="userListTable"
              autoHeight
              style={{ textAlign: "start" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

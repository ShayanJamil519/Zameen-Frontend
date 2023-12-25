import React, { useEffect, useRef, useState } from "react";
import "./ProjectList.css";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataGrid } from "@material-ui/data-grid";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { getProject, clearErrors } from "../../../actions/projectAction";

const ProjectList = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, project } = useSelector((state) => state.project);
  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProject());
  }, [dispatch, error, alert]);

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

  const columns = [
    { field: "id", headerName: "Project ID", minWidth: 250, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 350,
      flex: 0.5,
    },
    {
      field: "city",
      headerName: "City",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "landArea",
      headerName: "Land Area",
      type: "number",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "units",
      headerName: "Units",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "startedTime",
      headerName: "Start Time",
      type: "date",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "endTime",
      headerName: "End Time",
      type: "date",
      minWidth: 350,
      flex: 0.3,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 250,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button>
            <MdDelete style={{ fontSize: "1.2rem" }} />
          </Button>
        );
      },
    },
  ];

  const rows = [];

  project &&
    project?.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        location: item.location,
        city: item.city,
        description: item.description,
        price: item.price,
        landArea: item.landArea,
        units: item.units,
        startedTime: item.startedTime,
        endTime: item.endTime,
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
          <div className="projectListContainer">
            <h1 id="projectListHeading">All Projects</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="projectListTable"
              autoHeight
              style={{ textAlign: "start" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

import "./TeachersManagement.css";
import { useEffect, useState } from "react";
import TeacherService from "../../services/teachersService";
//componenets
import TeacherPopup from "./TeacherPopup/TeacherPopup";
import DeletePopup from "../../components/DeletePopup/DeletePopup";
//MUI MODULES
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";

import { getAllTeachersRequest } from "../../store/thunks/teachersThunk";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function TeachersManagement() {
  const dispatch = useDispatch<any>();
  //local state
  const [IsTeacherPopup, setIsTeacherPopup] = useState(false);
  const [deletePopup, setdeletePopup] = useState({
    IsDeletePopup: false,
    id: "",
    name: "",
  });
  //redux states
  const teachers = useSelector((state: any) => state.TeachersReducer);

  useEffect(() => {
    //dispatch a thunk
    dispatch(getAllTeachersRequest());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "speciality",
      headerName: "Speciality",
      flex: 1,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row: any) => {
        return (
          <>
            <IconButton size="large" title="Edit Teacher" onClick={() => {}}>
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              title="Delete Teacher"
              onClick={() => {
                setdeletePopup({
                  IsDeletePopup: true,
                  id: row.row.id,
                  name: row.row.name,
                });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  //to close the popup turn the IsTeacherPopup state to false
  const closePopup = () => {
    setIsTeacherPopup(false);
    setdeletePopup({ IsDeletePopup: false, id: "", name: "" });
  };

  return (
    <>
      {IsTeacherPopup ? <TeacherPopup closePopup={closePopup} /> : null}
      {deletePopup.IsDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
          name={deletePopup.name}
        />
      ) : null}

      <div className="data-grid">
        <div className="button-container">
          <Button
            onClick={() => {
              setIsTeacherPopup(true);
            }}
            className="create-button"
            color="inherit"
            variant="contained"
          >
            Create Teacher
          </Button>
        </div>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={teachers}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
}

export default TeachersManagement;

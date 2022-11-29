import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import "./TeacherPopup.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
//thunks
import {
  createTeacherRequest,
  updateTeacherRequest,
} from "../../../store/thunks/teachersThunk";

type TeacherPopupProps = {
  id?: string;
  closePopup: any;
};

type TeacherState = {
  name: string;
  email: string;
  speciality: string;
};

function TeacherPopup(props: TeacherPopupProps) {
  const dispatch = useDispatch<any>();

  //redux states
  const teachers = useSelector((state: any) => state.TeachersReducer);

  //local state
  const [teacher, setTeacher] = useState<TeacherState>({
    name: "",
    email: "",
    speciality: "",
  });
  const getTeacherById = () => {
    return teachers.filter((teacher: any, index: number) => {
      if (teacher.id == props.id) {
        setTeacher(teachers[index]);
      }
    });
  };
  useEffect(() => {
    getTeacherById();
  }, []);

  // console.log("teacher", teacher);
  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, name: value });
  };

  const handleOnEmailChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, email: value });
  };
  const handleOnSpecialityChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, speciality: value });
  };
  const handleOnSubmit = () => {
    props.id
      ? dispatch(
          updateTeacherRequest(
            props.id,
            { name: teacher.name, speciality: teacher.speciality },
            props.closePopup
          )
        )
      : dispatch(createTeacherRequest(teacher, props.closePopup));
  };

  return (
    <div className="teacher-popup-container">
      {/*overlay*/}
      <div onClick={props.closePopup} className="teacher-popup-overlay"></div>
      <div className="teacher-popup-content">
        {/*Popup header (title + closeicon)*/}
        <div className="teacher-popup-header">
          <Typography variant="h3" fontWeight="bold" color="inherit">
            {props.id ? "Update Teacher" : "Create Teacher"}
            {/*conditional rendering*/}
          </Typography>
          <IconButton
            size="large"
            title="closeIcon"
            color="error"
            onClick={props.closePopup}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Teacher Name"
              variant="outlined"
              fullWidth
              name="name"
              value={teacher.name}
              onChange={handleOnNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Email"
              variant="outlined"
              fullWidth
              disabled={props.id ? true : false}
              name="email"
              value={teacher.email}
              onChange={handleOnEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Speciality"
              variant="outlined"
              fullWidth
              name="speciality"
              value={teacher.speciality}
              onChange={handleOnSpecialityChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="inherit"
              variant="contained"
              type="submit"
              onClick={handleOnSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TeacherPopup;

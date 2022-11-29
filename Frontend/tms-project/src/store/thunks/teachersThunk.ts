//services
import TeachersService from "../../services/teachersService";

//actions
import {
  deleteTeacherSuccess,
  getAllTeachersSuccess,
} from "../actions/teachersAction";
import { createTeacherSuccess } from "../actions/teachersAction";
import { updateTeacherSuccess } from "../actions/teachersAction";
export const getAllTeachersRequest = () => (dispatch: any) => {
  try {
    //API Call
    TeachersService.getAllTeachers().then((response: any) => {
      //dispatch an action
      dispatch(getAllTeachersSuccess(response.data));
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createTeacherRequest =
  (teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      //API Call
      TeachersService.createTeacher(teacher).then(
        (response: any) => {
          dispatch(createTeacherSuccess(response.data));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
export const updateTeacherRequest =
  (id: string, teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      //API Call
      TeachersService.updateTeacher(id, teacher).then(
        (response: any) => {
          dispatch(updateTeacherSuccess(response.data));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteTeacherRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      //API Call
      TeachersService.deleteTeacher(id).then(
        (response: any) => {
          dispatch(deleteTeacherSuccess(response.data.id));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

import { GET_ALL_TEACHERS_SUCCESS } from "../actions/teachersAction";
import { CREATE_TEACHER_SUCCESS } from "../actions/teachersAction";
import { DELETE_TEACHER_SUCCESS } from "../actions/teachersAction";
import { UPDATE_TEACHER_SUCCESS } from "../actions/teachersAction";
const initialState = [] as any;

const TeachersReducer = (state = initialState, action: any) => {
  const { type, payload } = action; //distract them from action
  console.log("Payload", payload);
  let tempArray = [] as any;
  switch (type) {
    case GET_ALL_TEACHERS_SUCCESS:
      return payload;
    case CREATE_TEACHER_SUCCESS:
      return [...state, payload];
    case UPDATE_TEACHER_SUCCESS:
      let array = [...state];
      array.map((teacher: any, index: number) => {
        if (teacher.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;
    case DELETE_TEACHER_SUCCESS:
      tempArray = state.filter((teacher: any) => teacher.id !== payload);
      return tempArray;
    default:
      return state;
  }
};
export default TeachersReducer;

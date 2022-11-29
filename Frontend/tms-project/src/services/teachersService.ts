import { httpCommon } from "./http-common";

const getAllTeachers = () => {
  return httpCommon.get("Teachers");
};
const createTeacher = (teacher: any) => {
  return httpCommon.post("Teachers", teacher);
};
const updateTeacher = (id: string, teacher: any) => {
  return httpCommon.put(`Teachers/${id}`, teacher);
};
const deleteTeacher = (id: string) => {
  return httpCommon.delete(`Teachers/${id}`);
};
const TeachersService = {
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};

export default TeachersService;

import { useDispatch } from "react-redux";

import "./DeletePopup.css";

import { Button } from "@mui/material";
import { deleteTeacherRequest } from "../../store/thunks/teachersThunk";

type DeletePopupProps = {
  id: string;
  name: string;
  closePopup: any;
};
function DeletePopup(props: DeletePopupProps) {
  const dispatch = useDispatch<any>();
  return (
    <div className="delete-popup-container">
      <div onClick={props.closePopup} className="delete-popup-overlay"></div>
      <div className="delete-popup-content">
        <h2>Are you sure you want to delete {props.name} teacher?</h2>

        <div>
          <Button
            color="inherit"
            variant="contained"
            type="submit"
            onClick={props.closePopup}
          >
            Cancel
          </Button>
          <Button
            color="inherit"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(deleteTeacherRequest(props.id, props.closePopup))
            }
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;

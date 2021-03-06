import { useDispatch, useSelector } from "react-redux";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";
import "./UserMenu.css";
import Container from "../Container/Container";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    display: "block",
    letterSpacing: "1px",
    textTransform: "none",
    fontSize: "14px",
  },
});

function UserMenu() {
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);
  const avatarURL = useSelector(selectors.getUserAvatarURL);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Container>
      <div className="userMenu">
        <img src={avatarURL} alt="" width="32" className="userAvatar" />
        <span className="userName">
          HELLO, <b>{name}</b> {` (${email})`}
        </span>
        <Button
          type="button"
          size="small"
          variant="contained"
          onClick={() => dispatch(operations.logOut())}
          className={classes.button}
        >
          Logout
        </Button>
      </div>
    </Container>
  );
}
export default UserMenu;

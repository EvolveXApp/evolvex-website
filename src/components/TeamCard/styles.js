import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    background: "#121212",
    margin: 20,
    height: 275,
    position: "relative",
  },
  text: {
    color: "white",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    alignSelf: "center",
    position: "relative",
  },
  profileImage: {
    borderRadius: "50%",
    zIndex: "2",
    width: 200,
    height: 200,
  },
  trapezoid: {
    position: "absolute",
    bottom: -15,
    left: -10,
  },
  textContainer: {
    zIndex: "2",
  },
});

export default styles;

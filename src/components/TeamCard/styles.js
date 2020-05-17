import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    background: "#121212",
    margin: 20,
    height: 250,
    position: "relative",
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
  name: {
    width: "120%",
    maxWidth: 200,
    flexWrap: true,
    padding: "10px 0",
    borderBottom: "1px solid white",
  },
  title: {
    fontWeight: 400,
    color: "#c1d2ee",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    height: 250,
    alignItems: "flex-end",
    position: "relative",
  },
  profileImage: {
    margin: "30px 0",
    borderRadius: "50%",
    zIndex: "2",
    width: 175,
    height: 175,
    boxShadow: "5px 5px 20px black",
  },
  trapezoid: {
    position: "absolute",
    bottom: -15,
    left: -15,
  },
  textContainer: {
    zIndex: "2",
    margin: "15px 0",
  },
});

export default styles;

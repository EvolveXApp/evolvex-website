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
  mouseOver: {
    margin: 0,
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    height: 250,
    alignItems: "flex-end",
    position: "relative",
  },
  profileMOver: {
    display: "flex",
    justifyContent: "space-around",
    background: "#3671B7",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  profileImage: {
    margin: "30px 0",
    borderRadius: "50%",
    zIndex: "2",
    width: 175,
    height: 175,
    boxShadow: "5px 5px 20px black",
  },
  profileImageMOver: {
    borderRadius: "50%",
    width: 100,
    height: 100,
    boxShadow: "5px 5px 20px black",
    transform: "translate(0, -20%)",
  },
  trapezoid: {
    position: "absolute",
    bottom: -15,
    left: -15,
  },
  textContainer: {
    zIndex: "2",
  },
  textContainerMOver: {
    zIndex: "2",
    margin: "10px 0",
  },
  description: {
    textAlign: "center",
    color: "#c1d2ee",
    margin: "10px auto",
    maxWidth: "75%",
    maxHeight: 125,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
});

export default styles;

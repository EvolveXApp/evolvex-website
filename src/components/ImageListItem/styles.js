import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    background: "#111111",
    padding: "50px 0",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageContainer: {
    borderRadius: 5,
    position: "relative",
    margin: "50px 0",
    padding: "0px 35px 0px 100px",
    "& img": {
      transform: `translate(00px, -30px)`,
    },
  },
  flipImage: {
    borderRadius: 5,
    position: "relative",
    margin: "50px 0",
    padding: "0px 100px 0px 35px",
    "& img": {
      transform: `translate(00px, -30px)`,
    },
    display: "grid",
    order: 2,
  },
  textContainer: {
    padding: "0 0 0 300px",
  },
  flipText: {
    display: "grid",
    padding: "0 0 0 500px",
    order: 1,
  },
  titleContainer: {
    borderBottom: "2px solid #ECB71F",
    width: 300,
  },
  title: {
    width: "90%",
    color: "#f1f1f1",
    fontSize: 24,
  },
  description: {
    width: 500,
    color: "#939393",
    fontSize: 18,
  },
});

export default styles;

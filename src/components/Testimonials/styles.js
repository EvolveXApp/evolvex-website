import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    backgroundColor: "#111111",
  },
  testimonials: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr  ",
    width: "60vw",
    margin: "0 auto",
  },
  cardTitle: {
    fontSize: "5rem",
    fontWeight: 600,
    textShadow: "white -2px 1px",
    color: "#3671B7",
    textAlign: "center",
  },
  OffSet: {
    color: "#ECB71F",
  },
  OffSetSecond: {
    color: "#DE1C54",
  },
  card: {
    margin: "0 auto",
    borderRadius: 5,
    marginTop: 35,
    textAlign: "center",
    width: 300,
    backgroundColor: "white",
    padding: 25,
  },
  profile: {
    width: 125,
    borderRadius: "50%",
  },
});

export default styles;

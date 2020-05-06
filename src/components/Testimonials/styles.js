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
  card: {
    margin: "0 auto",
    marginTop: 25,
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

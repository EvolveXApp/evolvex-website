import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    backgroundColor: "#111111",
  },
  testimonials: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 50,
  },
  section: {
    margin: "0 15px",
  },
  cardTitle: {
    fontSize: "5rem",
    fontWeight: 600,
    textShadow: "white -2px 1px",
    color: "#3671B7",
    textAlign: "center",
  },
  card: {
    maxHeight: 400,
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

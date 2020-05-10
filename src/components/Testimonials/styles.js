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
  nameContainer: {
    margin: "0 auto",
    maxWidth: 250,
    borderBottom: "2px solid #d7e3f1",
  },
  name: {
    marginBottom: 5,
  },
  title: {
    margin: 5,
    fontSize: "0.9rem",
    color: "#d3d3d3",
    fontWeight: 500,
  },
  comment: {
    fontSize: "1.05rem",
    color: "#7b7b7b",
    fontWeight: 400,
  },
});

export default styles;

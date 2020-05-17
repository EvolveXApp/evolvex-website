import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  teams: {
    maxWidth: "70vw",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    margin: "50px auto",
    fontSize: "2rem",
    borderBottom: "2px solid #3671B7",
    width: 400,
  },
});

export default styles;

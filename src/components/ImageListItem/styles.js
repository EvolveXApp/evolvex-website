import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    background: "#111111",
  },
  item: {
    display: "flex",
    flexDirection: "row",
  },
  flipImage: {
    display: "grid",
    order: 2,
  },
  flipText: {
    display: "grid",
    order: 1,
  },
  title: {
    color: "#f1f1f1",
  },
  description: {
    color: "#939393",
  },
});

export default styles;

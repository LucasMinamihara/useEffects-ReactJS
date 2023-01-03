import classes from "./Tela.module.css";

function Tela(props) {
  console.log(props);
  return <div className={classes.lado}>Oiiii!</div>;
}

export default Tela;

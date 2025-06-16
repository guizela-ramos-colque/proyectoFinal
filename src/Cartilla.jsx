import './App.css'

function Cartilla(props) {
  return (
    <>
      <dir className="cards" >
        <dir  className="ima">
          <img src={props.Images} alt="" />
        </dir>
        <dir className="titulobody">
          <h2 >
            {props.titulo}
          </h2>
        </dir>
      </dir>
    </>
  );
}

export default Cartilla;
import './App.css'

function Cartilla(props) {
  return (
    <>
      <dir className="cards img-hover" >
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
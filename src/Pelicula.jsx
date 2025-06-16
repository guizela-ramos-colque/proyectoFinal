import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Pie from './Pie';
import './App.css'
function Pelicula(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
    <div className="Row">
      <div>
        <Button color="danger" onClick={toggle}>
          BATMAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Batman explora la corrupción existente en la ciudad de Gotham 
            y el vínculo de esta con su propia familia. Además, entra en 
            conflicto con un asesino en serie conocido como "el Acertijo".
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          SUPER MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            El título Superman: Legacy se anunció el mes siguiente, se confirmó que Gunn dirigiría en marzo de 2023 y Corenswet y Brosnahan fueron elegidos en junio. El subtítulo se abandonó a fines de febrero de 2024, cuando comenzó el rodaje en Noruega.
        
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          ATN-MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
        Un ladrón con la habilidad de encogerse de tamaño pero crecer en fuerza debe sacar su héroe interior y ayudar a su mentor a llevar a cabo un plan para salvar al mundo.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          JOKER
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
          Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          SPIDERMAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para recuperar su vida, pero algo sale mal y provoca una fractura en el multiverso.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          BATMAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Batman explora la corrupción existente en la ciudad de Gotham 
            y el vínculo de esta con su propia familia. Además, entra en 
            conflicto con un asesino en serie conocido como "el Acertijo".
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
    <Pie></Pie>
    
    </>
    
  );
}

export default Pelicula;
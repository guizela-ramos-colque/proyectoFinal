import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css'
function Pelicula(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
    <div className="Row">
      
      <div>
        <Button color="danger"  className="botones btn-hover"  outline size="lg"   onClick={toggle}>
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
        <Button className="botones btn-hover" color="danger"   outline size="lg" onClick={toggle}>
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
        <Button className="botones btn-hover" color="danger"   outline size="lg" onClick={toggle}>
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
        <Button className="botones btn-hover" color="danger"   outline size="lg" onClick={toggle}>
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
        <Button className="botones btn-hover" color="danger"   outline size="lg" onClick={toggle}>
          IRON - MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
           Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.
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
    
    </>
    
  );
}

export default Pelicula;
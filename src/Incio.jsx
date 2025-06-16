import React, { useState } from 'react';
import './App.css'
import Cartilla from './Cartilla';
function Inicio(props) {
  
  return (
    <>
      <dir className="Row">
      <Cartilla Images="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlUjnW4GMG3cx1xpy3OYt5clvwv2HM98oSFqQGgRYOhQ5TfjthAYab2JJwqdAi7VR3GJUQjrNPUorAfdL6eGf7GyEZzwo3dKJ_uspVRg" titulo="Jonny Depp" ></Cartilla>
      <Cartilla Images="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSL982PKh4kiAMO_nXZA4qwKwr3Fq14GL1YsYGvITYzHGITrRnnjZER7o-15Vmj3bPqu4bGnPFPh73Y28NTdzZ3Pg" titulo="Tom Holland" ></Cartilla>
      <Cartilla Images="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOKsQsFlO-s88Vfyi4vANb8COrbaL2eAtPQq5nvFQhT-PeW7akqCw0XNE-wzqVqJt8_F6buYlqqezEJenooQ0jww" titulo="Keira Knightley" ></Cartilla>

      </dir>
    </>
  );
}

export default Inicio;
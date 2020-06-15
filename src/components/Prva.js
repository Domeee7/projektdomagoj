import React from 'react';
import {Link} from 'react-router-dom';
import BMWlogo from '../bmwlogo.png';
function Prva() {
    return (
      <div className="div2">
      <table>

      <tr>
       
          <td><Link to='/Druga' >O BMW-u</Link></td>
          
          <td><Link to='/Treca' >Proizvodnja</Link></td>

          <td><Link to='/Cetvrta'>Modeli</Link></td>

          <td><Link to='/Peta'>Lokacije</Link></td>
          
          </tr>
          </table>
          <img className="slika1" src = {BMWlogo}></img>

          </div>

    
    
    );
  }
  
  
  export default Prva;
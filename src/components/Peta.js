import React from 'react';
import {Link} from 'react-router-dom';
import Lokacija from '../lokacija.JPG';
function Peta() {
    return (
      <div className="div1">

      <table>

      <tr>
       
          <td><Link to='/Druga' >O BMW-u</Link></td>
          
          <td><Link to='/Treca' >Proizvodnja</Link></td>

          <td><Link to='/Cetvrta'>Modeli</Link></td>

          <td><Link to='/Peta'>Lokacije</Link></td>
          
          </tr>
          </table>
          <h2>Lokacije</h2>
          <img className="slika1" src = {Lokacija}></img>
          <p className="lok">A</p><p>BMW Tomić & Co. Split - ovlašteni servis i prodaja</p>
          <p className="lok">B</p><p>BMW servis Marinić - Solin</p>
          <p className="lok">C</p><p>BMW KLUB DALMACIJA</p>
          <br></br>
          <Link className="povratak" to="/">Povratak na početnu stranicu</Link>
          </div>

    
    
    );
  }
  
  
  export default Peta;
import React from 'react';
import {Link} from 'react-router-dom';
import Tvornica from '../tvornica.jpg';

function Treca() {
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
          <h2>Mjesta Proizvodnja</h2>
          <img className="slika2"  src = {Tvornica}></img>
          <p className="tekst1">Njemačka
                                <li>Munchen</li>
                               <li>Berlin</li>
                               <li>Dingolfing</li>
                               <li>Landshut</li>
                               <li>Ragensburg</li>
                               <li>Wackersdorf</li>
                               <li>Eisenach</li>
                               <li>Leipzig</li>
                               Južna Afrika
                               <li>Rossslyn</li>
                               Austrija
                               <li>Steyr</li>
                               Engleska
                               <li>Hams Hall</li>
                               <li>Swindon</li>
                               <li>Oxford</li>
                               SAD
                               <li>Spartanburg</li>
                               Kina
                               <li>Shenyang</li>
                               </p>
            
            <Link className="povratak" to="/">Povratak na početnu stranicu</Link>
          </div>

    
    
    );
  }
  
  
  export default Treca;
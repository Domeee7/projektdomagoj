import React from 'react';
import {Link} from 'react-router-dom';
import Bmw1 from '../bmw1.png';
import Bmw2 from '../bmw2.png';
import Bmw3 from '../bmw3.png';
import Bmw4 from '../bmw4.png';
import Bmw5 from '../bmw5.png';
import Bmw6 from '../bmw6.png';
import Bmw7 from '../bmw7.png';
import Bmw8 from '../bmw8.png';

function Treca() {
    return (
      <div className="div3">
      <table>

      <tr>
       
          <td><Link to='/Druga' >O BMW-u</Link></td>
          
          <td><Link to='/Treca' >Proizvodnja</Link></td>

          <td><Link to='/Cetvrta'>Modeli</Link></td>

          <td><Link to='/Peta'>Lokacije</Link></td>
          
          </tr>
          </table>
          <h2>Najnoviji Modeli</h2>
          <a href="https://www.bmw.hr/hr/all-models/1-series/5-door/2019/bmw-1-series-inspire.html"><img className="slike" src = {Bmw1}></img></a><p className="serije">BMW serija 1</p>
          <a href="https://www.bmw.hr/hr/all-models/2-series/coupe/2019/bmw-2-series-coupe-inspire.html"><img className="slike" src = {Bmw2}></img></a><p className="serije">BMW serija 2</p>
          <a href="https://www.bmw.hr/hr/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire.html"><img className="slike" src = {Bmw3}></img></a><p className="serije">BMW serija 3</p>
          <a href="https://www.bmw.hr/hr/all-models/4-series/coupe/2019/bmw-4-series-coupe-inspire.html"><img className="slike" src = {Bmw4}></img></a><p className="serije">BMW serija 4</p>
          <a href="https://www.bmw.hr/hr/all-models/5-series/sedan/2016/iperformance.html"><img className="slike" src = {Bmw5}></img></a><p className="serije">BMW serija 5</p>
          <a href="https://www.bmw.hr/hr/all-models/6-series/gran-turismo/2017/at-a-glance.html"><img className="slike" src = {Bmw6}></img></a><p className="serije">BMW serija 6</p>
          <a href="https://www.bmw.hr/hr/all-models/7-series/sedan/2019/bmw-7-series-sedan-inspire.html"><img className="slike" src = {Bmw7}></img></a><p className="serije">BMW serija 7</p>
          <a href="https://www.bmw.hr/hr/all-models/8-series/gran-coupe/2019/bmw-8-series-gran-coupe-inspire.html"><img className="slike" src = {Bmw8}></img></a><p className="serije">BMW serija 8</p>
          <br></br><br></br><br></br>
        <Link className="povratak" to="/">Povratak na početnu stranicu</Link>
          </div>

    
    
    );
  }
  
  
  export default Treca;
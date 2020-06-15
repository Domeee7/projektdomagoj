import React from 'react';
import {Link} from 'react-router-dom';
import Motor from '../motor.png';

function Druga() {
    return (
      <div className="div4">
      <table>

      <tr>
       
          <td><Link to='/Druga' >O BMW-u</Link></td>
          
          <td><Link to='/Treca' >Proizvodnja</Link></td>

          <td><Link to='/Cetvrta'>Modeli</Link></td>

          <td><Link to='/Peta'>Lokacije</Link></td>
          
          </tr>
          </table>
          <h2>O BMW-u</h2>
          <p className="tekst1">Bayerische Motoren Werke AG (skraćeno BMW) njemački je proizvođač automobila, motorkotača i bicikala sa sjedištem u Münchenu.<br></br><br></br>
            Tvrtku je 7. ožujka 1916. u Münchenu osnovao Karl Friedrich Rapp kao Bayerische Flugzeugwerke (BFW) (Bavarska tvornica aviona),
            koja je 21. srpnja 1917. godine preimenovana u Bayerische Motoren Werke (BMW GmbH) (Bavarska tvornica motora), da bi dva mjeseca 
            prije kraja Prvog svjetskog rata postala dioničko društvo. <br></br><br></br>Tvrtka u svojem vlasništvu ima i britanske tvrtke MINI (od 1994. godine,
            kupnjom tvrtke British Rover Group) i Rolls-Royce Motor Cars (od 1998. godine).<br></br><br></br> Godine 2000. uprava tvrtke je odlučila prodati robne 
            marke Rover i MG za iznos od 10 britanskih funta[nedostaje izvor].<br></br><br></br> Land Rover prodan je ubrzo nakon toga, ali je BMW donio odluku da 
            zadrži robnu marku MINI.</p>
            <h2>BMW Motorsport</h2>
            <p className="tekst1">BMW je sudjelovao i sudjeluje u raznim motorsport natjecanjima. Prije Drugog svjetskog rata BMW-ovi motorkotači su bili uspješni u Isle of Man TT natjecanju.<br></br><br></br>
                 BMW je sudjelovao i u Formuli 1, Formuli 2, raznim auto utrkama. <br></br><br></br>
                 Trenutno je BMW aktivan u sljedećim natjecanjima: ALMS, WTCC, raznim 24 sata natjecanjima, Superbike svjetsko prvenstvo a 2012. godine BMW će se vratiti u Deutsche Tourenwagen Masters.<br></br><br></br>
                  BMW M6 se natjecao u Rolex Sports Car Series natjecanju.<br></br><br></br></p>
                  <img className="slika3"  src = {Motor}></img>
            <h2>BMW-ovo Groblje</h2>
            <p className="tekst1">Jako zanimljiva stvar u svijetu BMW-a jest groblje.<br></br><br></br> Radi se o mjestu zatvorenome za javnost gdje se otpremaju modeli koji nisu doživjeli serijsku proizvodnju.<br></br><br></br>
             Jedna od najvećih tajni je BMW M8 model, jedni fanatici su vjerovali da je proizveden 1 prototip koji se čuva u groblju što se pokazalo istinitim, dok su drugi bili sigurni 
             da M8 nikad nije postojao.<br></br><br></br> Skoro 20 godina nakon što je M8 skriven od javnosti BMW ga je predstavio u svome muzeju. Motor je V12, nastao je iz M70 motora, obujam i snaga nisu
             objavljeni.<br></br><br></br> Ono što je poznato jest ručni mjenjač sa 6 stupnjeva prijenosa, stražnji pogon, olakšan je cijeli automobil, kotači su 17 inčni, straga dimenzija 285/40 ZR17.[4].
             Krajem 2010. godine BMW je javnosti predstavio još jednu tajnu, M5 E34 model u kabriolet inačici, zbog mogućeg pada prodaje serije 3 kabriolet, M5 u kabriolet izdanju nikad
             nije dospio na tržište.<br></br><br></br> 1998. godine je došao novi E39 M5, s obzirom da je prošla generacija imala karavansku inačicu svi su očekivali jednaku stvar i s E39 modelom.<br></br><br></br>  No BMW 
             nikad nije serijski proizveo karavan M5 E39 zbog tržišta.[5]</p>
            <br></br><br></br><br></br>
            <Link className="povratak" to="/">Povratak na početnu stranicu</Link>
          </div>
          

    
    
    );
  }
  
  
  export default Druga;
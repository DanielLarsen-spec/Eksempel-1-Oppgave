function openTab() {
  if (document.getElementById("verktøy").innerHTML == "") {
    drill();
  } else {
    document.getElementById("verktøy").innerHTML = "";
  }
}
function drill() {
  document.getElementById("verktøy").innerHTML = /*html*/ `
    <div class="Innercard">
  De to viktigste verktøyene vi skal bruke er disse:
            <div>
                
                <ul>
                    
                    <li>
                        Koderedigeringsprogrammet 
                        
                        <a href="https://code.visualstudio.com/">
                            Visual Studio Code</a> 
                            
                            <br/>
                            Vi skal bruke noen <i>extensions</i>
                            <ul> 
                                <li>JavaScript-booster</li>
                                <li>es6-string-html</li>
                                <li>live-server</li> 
                                <li>live-share</li> 
                            </ul>
                            <li> Nettleseren
                                <a href="https://www.google.com/intl/no/chrome/">
                                    Google Chrome
                                    
                                </a>
                            </li>
                            
                            
                            
                        </li>
                    </ul>
                    
                </div>
    </div>
    
    
    `;
}

function OpenTab2() {
  if (document.getElementById("HTML").innerHTML == "") {
    dlTag1();
  } else {
    document.getElementById("HTML").innerHTML = "";
  }
}

function dlTag1() {
  document.getElementById("HTML").innerHTML = /*HTML*/ `
  <div class="Innercard">
  
  <div>
  Vi bruker HTML til å definere et dokument.
  <ul>
  <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
  <li>Tagger for grunnleggende formatering av tekst</li>
  <li><tt>&lt;div&gt;</tt></li>
  <li><tt>&lt;input type="text"&gt;</tt></li>
  <li><tt>&lt;button&gt;</tt></li>
  <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
  </li>
  <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
  </li>
  </ul>
  
  </div>
  </div>

                `;
}

function OpenTab3() {
  if (document.getElementById("CSS").innerHTML == "") {
    drill2();
  } else {
    document.getElementById("CSS").innerHTML = "";
  }
}

function drill2() {
  document.getElementById("CSS").innerHTML = /*HTML*/ `
  <div  class="Innercard">
  
  <div>
  
  
  Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
  <ul>
  <li><tt>background-color</tt></li>
  <li><tt>color</tt></li>
  <li><tt>padding</tt></li>
  <li><tt>margin</tt></li>
  <li><tt>border</tt></li>
  <li><tt>text-align</tt></li>
  <li><tt>font-size</tt></li>
  <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
  <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
  <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
  </li>
  <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
  </li>
  </ul>
  
  </div>
  </div>
  
  `;
}

function OpenTab4() {
  if (document.getElementById("JavaScript").innerHTML == "") {
    drill3();
  } else {
    document.getElementById("JavaScript").innerHTML = "";
  }
}

function drill3() {
  document.getElementById("JavaScript").innerHTML = /*HTML*/ `
  <div class="Innercard" >
  <div>
  Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
  ved
  å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
  <ul>
  <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
  Moodle.</li>
  <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
  Reference</a></li>
  
  </ul>
  
  </div>
  </div>
  
      `;
}

function OpenTab5() {
  if (document.getElementById("HodeKroppBen").innerHTML == "") {
    HKB();
  } else {
    document.getElementById("HodeKroppBen").innerHTML = "";
  }
}

function HKB() {
  document.getElementById("HodeKroppBen").innerHTML = /*HTML*/ `
    <div class="Innercard">
    
    
    
    
    <div>
    
    <div id="Switch1">
    <button onclick="Head4()">◀</button>
    <img src="Img/head1.png"/>
    <button onclick="Head2()">▶</button>  
    
    
    </div>
    <div id="Switch2">
    
    <button onclick="Body4()">◀</button>
    <img src="Img/body1.png"/>
    <button onclick="Body2()">▶</button>
    </div>
    <div id="Switch3">
    
    
    <button onclick="Legs4()">◀</button>
    <img src="Img/legs1.png"/>
    <button onclick="Legs2()">▶</button>
    
    </div>
    </div>
    </div>
    `;
  }


function Head4() {
  document.getElementById('Switch1').innerHTML = /*HTML*/ `

<button onclick="Head3()">◀</button>
<img src="Img/head4.png"/>
<button onclick="Head1()">▶</button>  
`;
}
function Head1() {
  document.getElementById('Switch1').innerHTML = /*HTML*/ `

<button onclick="Head4()">◀</button>
<img src="Img/head1.png"/>
<button onclick="Head2()">▶</button>  
`;
}
function Head2() {
  document.getElementById('Switch1').innerHTML = /*HTML*/ `

<button onclick="Head1()">◀</button>
<img src="Img/head2.png"/>
<button onclick="Head3()">▶</button>  
`;
}
function Head3() {
  document.getElementById('Switch1').innerHTML = /*HTML*/ `

<button onclick="Head2()">◀</button>
<img src="Img/head3.png"/>
<button onclick="Head4()">▶</button>  
`;
}

function Body4() {
  document.getElementById('Switch2').innerHTML = /*HTML*/ `

<button onclick="Body3()">◀</button>
<img src="Img/body4.png"/>
<button onclick="Body1()">▶</button>  
`;
}
function Body1() {
  document.getElementById('Switch2').innerHTML = /*HTML*/ `

<button onclick="Body4()">◀</button>
<img src="Img/body1.png"/>
<button onclick="Body2()">▶</button>  
`;
}
function Body2() {
  document.getElementById('Switch2').innerHTML = /*HTML*/ `

<button onclick="Body1()">◀</button>
<img src="Img/body2.png"/>
<button onclick="Body3()">▶</button>  

`;
}
function Body3() {
  document.getElementById('Switch2').innerHTML = /*HTML*/ `

<button onclick="Body2()">◀</button>
<img src="Img/body3.png"/>
<button onclick="Body4()">▶</button>  
`;
}

function Legs4() {
  document.getElementById('Switch3').innerHTML = /*HTML*/ `

<button onclick="Legs3()">◀</button>
<img src="Img/legs4.png"/>
<button onclick="Legs1()">▶</button>  
`;
}
function Legs1() {
  document.getElementById('Switch3').innerHTML = /*HTML*/ `

<button onclick="Legs4()">◀</button>
<img src="Img/legs1.png"/>
<button onclick="Legs2()">▶</button>  
`;
}
function Legs2() {
  document.getElementById('Switch3').innerHTML = /*HTML*/ `

<button onclick="Legs1()">◀</button>
<img src="Img/legs2.png"/>
<button onclick="Legs3()">▶</button>  
`;
}
function Legs3() {
  document.getElementById('Switch3').innerHTML = /*HTML*/ `

<button onclick="Legs2()">◀</button>
<img src="Img/legs3.png"/>
<button onclick="Legs4()">▶</button>  
`;
}

function Layout2() {
  Layout1();
  document.getElementById('container').classList.add("verticalLayout");
}

function Layout1() {
  document.getElementById('container').classList.remove("verticalLayout");
  document.getElementById('container').classList.remove("horisontalLayout");
  document.getElementById('container').classList.remove("gridLayout");
}
function Layout3() {
  Layout1();
  document.getElementById('container').classList.add("horisontalLayout");
}
function Layout4() {
Layout1();
  document.getElementById('container').classList.add("gridLayout");
}































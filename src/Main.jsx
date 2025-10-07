import React from "react"
import {Link} from 'react-router-dom';
import Firstmovie from "./apply/Firstmovie";
import Products from "./practise/Products";
import SecondMovie from "./complex/SecondMovie";
import MunnaBhayya from "./duplex/MunnaBhayya";
import JhonSnow from "./Death/JhonSnow";
import Jack from "./bacho/Jack";
import Vidyuth from "./martial/Vidyuth";
import Hellboy from "./animal/Hellboy";
import Naruto from "./anime/Naruto";
import Prabhas from "./superhit/Prabhas";
import Case from "./cid/Case";
import Runner from "./bigboss/Runner";
import Ram from "./ramayan/Ram";
import Arjun from "./mahabharat/Arjun";
import Jetahlal from "./tarakmehtha/Jetahlal";
import Teja from "./hanuman/Teja";
import Saaho from "./saaho/Sahoo";
import Aditya from "./radhesyam/Aditya";
import Ranbir from "./sandeepreddy/Ranbir";

export default function Main() {
    return(
        <div>
  <div class="caraousal-container">
    <div class="caraousal">
      <div class="slider">
        <div class="slide-content">
          <h1 class="movie-title">Money Hiest</h1>
          <p class="movie-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga consectetur
                               corrupti iure quis facere aliquid velit neque recusandae vel iste laborum ullam, nulla possimus sapiente.
                               Recusandae qui ex eveniet.
         </p>
        </div>
        <img src="https://th.bing.com/th/id/OIP.vqsTLle8Z2_zOBxSZlXANwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt=""/>
      </div>
    </div>
  </div>
    <h1 class="title">recommended for you</h1>
    <div class="movie-list">
      <button class="pre-btn" title="btn">
      <img src="https://th.bing.com/th/id/OIP.V7VLD6VsrIb0xeBW1cb5TwHaIh?pid=ImgDet&w=184&h=211&c=7&dpr=1.3&cb=idpwebpc1" alt="" height="50px" width="50px"/>
      </button>
       <button class="nxt-btn" title="btn">
        <img src="https://th.bing.com/th/id/OIP.SBM9o4qvBZOmKuiZix-yIwHaIh?pid=ImgDet&w=184&h=211&c=7&dpr=1.3&cb=idpwebpc1" alt="" height="50px" width="50px"/>
      </button>
      <div class="card-container">
        <Link to= "/Firstmovie"><div class="card">
         <img src="https://thereelbits.com/wp-content/uploads/2021/07/loki-poster.jpeg" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Loki</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn" type="button">add to watchlist</button>
          </div>
        </div></Link>
         <Link to= "/SecondMovie"><div class="card">
         <img src="https://th.bing.com/th/id/OIP.Cg0xFIYWLUtPsexGvP1zwgAAAA?pid=ImgDet&w=184&h=258&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">money hiest</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/MunnaBhayya"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.lcw49NP2ILfv9dJSWveDSwHaKh?pid=ImgDet&w=184&h=261&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Mirzapur</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/JhonSnow"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.bX9_RECVSYCOat6B-MRrZwHaLb?pid=ImgDet&w=184&h=284&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Game of thrones</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/Jack"><div class="card">
          <img src="https://th.bing.com/th/id/R.a4d953164c6d3c3f174cac35deaa8d25?rik=IfEQFIpC36Zx0w&riu=http%3a%2f%2fwww.slashfilm.com%2fwp%2fwp-content%2fimages%2fstranger-things-1.jpg&ehk=4Ze%2bL3r5gM%2b7GgdQywfHdjFI%2fUJPBMgU6fBiFVFUwwo%3d&risl=1&pid=ImgRaw&r=0" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Stranger Things</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/Vidyuth"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.KvdOSzMzOPjwoWZLwFptAgHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Commando</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/Hellboy"><div class="card">
          <img src="https://image.tmdb.org/t/p/original/21hS8mD8uxBVvf8xVYR30LbbmPO.jpg" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Hellboy</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/Naruto"><div class="card">
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/naruto-shippuden-tv-series-poster.jpg" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Naruto</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to= "/Prabhas"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.2XprsF7BusSIXQCF3NBlWwHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Bahubali 2</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
       
      </div>
    </div><br/><br/><br/><br/><br/><br/><br/>
    <h1 class="title">popular shows</h1>
    <div class="movie-list">
      <button class="pre-btn" title="btn">
        <img src="https://th.bing.com/th/id/OIP.V7VLD6VsrIb0xeBW1cb5TwHaIh?pid=ImgDet&w=184&h=211&c=7&dpr=1.3&cb=idpwebpc1" alt="" height="50px" width="50px"/>
      </button>
       <button class="nxt-btn" title="btn">
        <img src="https://th.bing.com/th/id/OIP.SBM9o4qvBZOmKuiZix-yIwHaIh?pid=ImgDet&w=184&h=211&c=7&dpr=1.3&cb=idpwebpc1" alt="" height="50px" width="50px"/>
      </button>
      <div class="card-container">
       <Link to= "/Case"> <div class="card">
          <img src="https://th.bing.com/th/id/OIP.McnHA1prcwelPOXGQxVj1QAAAA?pid=ImgDet&w=159&h=212&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">CID</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
       <Link to="/Runner"> <div class="card">
          <img src="https://th.bing.com/th/id/OIP.959ffabRAFPz0BK_UHjBlQHaKk?pid=ImgDet&w=184&h=263&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Bigboss</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
      <Link to="/Ram">  <div class="card">
          <img src="https://th.bing.com/th/id/OIP.JBDzPOz73-RXt_OeiqrJVgHaKs?pid=ImgDet&w=184&h=265&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Ramayan</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
       <Link to="/Arjun"> <div class="card">
          <img src="https://th.bing.com/th/id/OIP.u_m-fyEivZeQHOK7L-fIXwAAAA?rs=1&pid=ImgDetMain&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Mahabharath</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to="/Jetahlal"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.YnLmaIbEnPJFYUHlrmIbNgAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Tarak Mehtha</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to="/Teja"><div class="card">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7VuflYVfmarfBrrh-1ENV4sama3kg_iOzt-r3xmTd45nOaC0txorp72JuNv5lifpDTHLdtcaqySritZBBpczytJTwUAL8wHPddv-1c2AJA8jTn4bPQrmtBAoJ2KIJ9r_nltoK4pW82aDKjgsNvOtunSVMuju7iredlIsk1bqpcNh1Nn5tB6bZSdJrBlY/s1083/Hanu-Man-Makers-Dropped-Hanuman-Chalisa-Rendition--1680783652-1156.jpg" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Hanuman</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to="/Sahoo"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.oJHCWP83-gxrIADQ81CYNQAAAA?pid=ImgDet&w=184&h=270&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Saaho</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to="/Aditya"><div class="card">
          <img src="https://th.bing.com/th/id/OIP.x-2B2YkTigWFP6UYn8xnnAHaLG?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&cb=idpwebpc1" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Radhe shyam</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
        <Link to="/Ranbir"><div class="card">
          <img src="https://i.pinimg.com/originals/c4/7a/64/c47a6446810f052da682845f2d28cb55.jpg" alt="" class="card-img"/>
          <div class="card-body">
            <h2 class="name">Animal</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
          </div>
        </div></Link>
       
      </div>
    </div>
        
    </div>
    )
    }


import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import '../../../../index.css';


//css prefix FirstSc
const FirstScreen = ({handleClick}) => {
    return (
   
        <div className="FS-item-center">

            <div className="FS-row-1"> 
                <h1>Welcome to Toronto Cupcake</h1>
            </div>

            <div class="FS-row-2"> 
                <h2> 
                    "We make cupcake <br/> from scratch"<br/>
                    <span><GiCupcake size={30}/></span>
                </h2>
            </div>

            <div class="FS-row-3"> 
                <div> 
                    <button onClick={handleClick}>Get to know us</button>
                </div>
                <div></div>
            </div>
          

        </div>

    )
}

const SecondScreen = ({handleClick}) => {
    return (
        <div className="SS-item-center">
            <div className="SS-column-1">
                <div className="SS-box1">
                    <h2>One dozen, one click</h2> 
                </div>
                <div className="SS-box2">$37.99/doz</div>
                <div className="SS-box3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, eum deleniti tempore mollitia hic minus voluptatum
                    voluptates fugit cupiditate perferendis. Architecto dolorum sint dolore fuga atque harum optio repellat necessitatibus! 
                </div>
            </div>
            <div className="SS-column-2">
                <div className="SS-box5"> 
                    <img className='SS-img' src="https://media.discordapp.net/attachments/939646721061974107/1015333248894763129/unknown.png?width=1112&height=941" alt="-"/>
                </div>
            </div>
            <div className="SS-box4">
                <button onClick={handleClick} className='buy'>Add to Cart<FaCartPlus className='add-cart-icon' size={30}/></button>
            </div>
        </div>
    )
}


const Welcome = () => {

    const [carousel, setCarousel] = useState(true)
    
    const handleChange = () => {
        setCarousel(!carousel)
    }
    //true? first : second 

    //settimeout (()=>{})

    return (
        <div className={`${carousel? 'fsItem1':'fsItem2'} slideShowContainer`}> {/* contaoner : toggle la clase para cambiar el bg*/ }
            <div onClick={handleChange} className="fsControl" > <IoIosArrowBack size={80}/> </div>
                {carousel? <FirstScreen/> : <SecondScreen/>}
            <div onClick={handleChange} className="fsControl"> <IoIosArrowForward size={80}/> </div>
        </div>
    )
}

export default Welcome

import { AiFillCheckSquare } from 'react-icons/ai';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay,Pagination }  from "swiper";
import Image from 'next/image';
import Image1 from '../public/images/Image1.jpeg'
import Image2 from '../public/images/Image2.jpeg'
import Image3 from '../public/images/Image3.jpeg'
import Image4 from '../public/images/Image4.jpeg'

const legalnotice = () => {
    SwiperCore.use([Autoplay])
    return (
        <div className="legalnotice">


            {/* NAVIGATION */}
            <Header/>



            {/* MAIN BODY */}
            <div className="main-body">

                {/* Left */}
                <div className="left">
                    <h1 style={{fontSize: "5rem", marginBottom: "5rem"}}>Règle du jeu</h1>
                    <p>Un infuseur à thé. </p>
                    <p>Une boite de 100g d’un thé détox ou d’infusion</p> 
                    <p>Une boite de 100g d’un thé signature</p>  
                    <p>Un coffret découverte d’une valeur de 39€ </p>
                    <p>Un coffret découverte d’une valeur de 69€</p>
                    <p>Une chance de gagné un an de thé d’une valeur de 360€ vers la fin du concours.</p>
                    <div className="check">
                        <h3>Les étapes pour participer </h3>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>S’inscrire / Se connecter.</p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>Entrer le numéro de ticket a 10 chiffres une fois. </p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>Jouer et recevoir un gain. </p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>Récupérer du magasin en fournissant la pièce d’identité entrant lors de l’inscription.</p>
                        </div>
                    </div>
                    <div className='legalnotice-btn'>
                        <button className='legalnotice-btn'>Participer</button>
                    </div>
                </div>

                {/* Right */}
                <div className="right">
                    <div className="image">
                        <img src="joy.jpg"/>
                    </div>
                </div>

            </div>



            {/* Slider Section */}
            <div className='slider-section'>
                <h1>Les Gains</h1>
                <Swiper
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                     
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                    
                      slidesPerView: 3,
                    },
                  }}
                    pagination={{
                    dynamicBullets: true,
                    }}
                    
                    autoplay={true}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{width: "80%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}
                >
                    <SwiperSlide >
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%" ,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center", position: 'relative', overflow: 'hidden'}}>
                        <Image src={Image1} alt='Image' style={{ width: '100%', position: 'absolute'}} />
                        <p style={{color:"#fff",padding:"10px"}}>
                        un infuseur à thé  
                        </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center", position: 'relative', overflow: 'hidden'}}>
                        <Image src={Image2} alt='Image' style={{ width: '100%', position: 'absolute'}} />

                            <p style={{color:"#fff",padding:"10px"}}>
                            une boite de 100g d’un thé détox ou d’infusion
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center", position: 'relative', overflow: 'hidden'}}>
                        <Image src={Image3} alt='Image' style={{ width: '100%', position: 'absolute'}} />

                            <p style={{color:"#fff",padding:"10px"}}>
                            une boite de 100g d’un thé signature
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center", position: 'relative', overflow: 'hidden'}}>
                        <Image src={Image4} alt='Image' style={{ width: '100%', position: 'absolute'}} />

                            <p style={{color:"#fff",padding:"10px"}}>
                            un coffret découverte d’une valeur de 39€
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center", position: 'relative', overflow: 'hidden'}}>
                        <Image src={Image1} alt='Image' style={{ width: '100%', position: 'absolute'}} />

                            <p style={{color:"#fff",padding:"10px"}}>
                            un coffret découverte d’une valeur de 69€
                            </p>
                        </div>
                    </SwiperSlide>
                 
                </Swiper>
                <div className='grand-prix'>
                    <h1>grand prix</h1>
                    <p>Après la fin du concours un de nos chers clients gagnera un an de thé d’une valeur de 360 €.</p>
                </div>
                <p className='newsletter-p'>inscrivez vouz a notre newsletter <br/> pour rester informer a notre prochains jeux</p>
                <button className='newsletter-button'>S'inscribe</button>
            </div>
        </div>
    );
}

export default legalnotice;
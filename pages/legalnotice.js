import { AiFillCheckSquare } from 'react-icons/ai';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const legalnotice = () => {
    return (
        <div className="legalnotice">


            {/* NAVIGATION */}
            <Header/>



            {/* MAIN BODY */}
            <div className="main-body">

                {/* Left */}
                <div className="left">
                    <h1 style={{fontSize: "5rem", marginBottom: "5rem"}}>Reglement du jeux</h1>
                    <p>un infuseur à thé  / 
                    une boite de 100g d’un thé détox ou d’infusion / une boite de 100g d’un thé signature  / un coffret découverte d’une valeur de 39€ /  un coffret découverte d’une valeur de 69€</p>
                    <div className="check">
                        <h3>les atapes pour participer</h3>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>insourivez vous</p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>insourivez vous</p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>insourivez vous</p>
                        </div>
                        <div className='check-item'>
                            <AiFillCheckSquare className='ai'/>
                            <p>insourivez vous</p>
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
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{width: "80%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}
                >
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{backgroundColor: "#4a4d50", height: "38rem", width: "38rem", borderRadius: "50%"}}></div>
                    </SwiperSlide>
                </Swiper>
                <div className='grand-prix'>
                    <h1>grand prix</h1>
                    <p>apres la fin du concours un <br/> de notre chers client gagnera un an de the d'une valuer de 360</p>
                </div>
                <p className='newsletter-p'>inscrivez vouz a notre newsletter <br/> pour rester informer a notre prochains jeux</p>
                <button className='newsletter-button'>S'inscribe</button>
            </div>
        </div>
    );
}

export default legalnotice;
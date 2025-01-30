import './Hero.css'
import { motion } from 'motion/react';
import Lottie from "lottie-react";
import devAnimation from "./../../../public/animation/Animation - 1738250495743.json"
const Hero = () => {
    return (
        <section className='hero flex'>
            <div className="left-section ">
                <div className="parent-avatar flex">
                    <motion.img
                    
                    initial={{scale: 0}}
                
                    animate={{scale: 1}}
    
                    transition={{duration:0.7 , type : "spring" , stiffness: 100}}
                    
                    
                    className='avatar' src="./e6a8cdd9-8b6a-4dd3-904c-ac440c780254.jpg" alt="" />
                    <div className='icon-verified'></div>


                </div>

                <  motion.h1 
                initial={{opacity: 0}}
                
                animate={{opacity: 1}}

                transition={{duration:2}}

                
                className='title'>  Hello, I am a Full Stack Web Developer.
                </ motion.h1>


                <p className='sub-title'>Hello, I am Mohamed Khair Mohamed, a Full Stack Web Developer, and I am based in Turkey.</p>

<div className="all-icons flex">
<div className="icon icon-twitter  "></div>
<div className="icon icon-instagram "></div>
<div className="icon icon-github  "></div>
<div className="icon icon-linkedin  "></div>


</div>

            </div>

            <div className="right-section animation ">
             
            <Lottie
                className='contact-animation'
                style={{
                    height:455
                }}
                
                animationData={devAnimation} />


            </div>
        </section>
    );
}
export default Hero;
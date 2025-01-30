
import './Contact.css'
import Lottie from "lottie-react";
import contactAnimation from "../../../public/animation/Animation - 1738247920289 (2).json"

const Contact = () => {
    return (
        <section className='contact-us '>
            <h1 className='title '>
                <span className='icon-envelope'></span>
                Contact us
            </h1>
            <p className='sub-title'>Contact us for more information and Get notified when l publish something new.</p>

            <div style={{ justifyContent : "space-between"}} className="flex">
                <form className='' >
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="" id="email" />

                    </div>

                    <div className='flex' style={{ marginTop: "25px" }}>
                        <label htmlFor="message">your message:</label>
                        <textarea required name="" id="message"></textarea>
                    </div>

                    <button className='submit'>submit</button>
                </form>

                <div className="animation">
                    
                    
                <Lottie
                className='contact-animation'
                style={{
                    height:355
                }}
                
                animationData={contactAnimation} />
                    
                    
                    
                      </div>

            </div>




        </section>
    )
}
export default Contact
import './Hero.css'
const Hero = () => {
    return (
        <section className='hero flex'>
            <div className="left-section ">
                <div className="parent-avatar flex">
                    <img className='avatar' src="./e6a8cdd9-8b6a-4dd3-904c-ac440c780254.jpg" alt="" />
                    <div className='icon-verified'></div>


                </div>

                <h1 className='title'>  Hello, I am a Full Stack Web Developer.</h1>
                <p className='sub-title'>Hello, I am Mohamed Khair Mohamed, a Full Stack Web Developer, and I am based in Turkey.</p>

<div className="all-icons flex">
<div className="icon icon-twitter  "></div>
<div className="icon icon-instagram "></div>
<div className="icon icon-github  "></div>
<div className="icon icon-linkedin  "></div>


</div>

            </div>

            <div className="right-section animation border">
               animation
            </div>
        </section>
    );
}
export default Hero;
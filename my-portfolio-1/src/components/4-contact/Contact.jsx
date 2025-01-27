
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-us '>
            <h1 className='title '>
                <span className='icon-envelope'></span>
                Contact us
            </h1>
            <p className='sub-title'>Contact us for more information and Get notified when l publish something new.</p>

            <div className="flex">
                <form className='' >
                    <div  className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="" id="email" />

                    </div>

                    <div className='flex' style={{marginTop:"25px"}}>
                        <label htmlFor="message">your message:</label>
                        <textarea required  name="" id="message"></textarea>
                    </div>

                    <button className='submit'>submit</button>
                </form>

                <div className="animation border"> animation  </div>

            </div>




        </section>
    )
}
export default Contact


import './Main.css'

const Main = () => {
    return (
        <>
            <main className='flex '>
                <section className=' flex left-section  '>
                    <button className='active'>All Projects</button>
                    <button>HTML & CSS </button>
                    <button>JavaScript</button>
                    <button>React & CSS </button>
                    <button>React & Bootstrap </button>


                </section>
                <section className=' right-section  flex '>


                    {[1,2,3,4,5].map((item) => {
                        return (
                            <article key={item} className=' card'>
                                <img width={266} src="./wp5134484.webp" alt="" />


                                <div style={{ width: "266px" }} className="box ">
                                    <h1 className='title'>lading page 2</h1>
                                    <p className='sub-title'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur esse alias? </p>



                                    <div className="flex icons">
                                        <div style={{ gap: "12px" }} className="flex ">
                                            <div className="icon-link"></div>
                                            <div className="icon-github"></div>
                                        </div>


                                        <a className='link flex' href=""  > more
                                            <span style={{ alignSelf: "center" }} className='icon-arrow-right'></span>
                                        </a>
                                    </div>

                                </div>
                            </article>
                        );


                    })};



                </section>
            </main>

        </>
    )
}
export default Main;
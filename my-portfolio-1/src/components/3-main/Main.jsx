

import { useState } from 'react'
import './Main.css'
import { myProjects } from './myprojects';




const Main = () => {


    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);

        const newArr = myProjects.filter((item) => {
            const ZZZ = item.category.find((myItem) => {
                return myItem === buttonCategory;
            });

            return ZZZ === buttonCategory;
        });

        setArr(newArr);
    };







    return (
        <>
            <main className='flex '>
                <section className=' flex left-section  '>





                    <button
                        onClick={() => {
                            setcurrentActive("all");
                            setArr(myProjects);
                        }}
                        className={currentActive === "all" ? "active" : null}
                    >
                        All projects
                    </button>

                    <button
                        onClick={() => {
                            handleClick("css");
                        }}
                        className={currentActive === "css" ? "active" : null}
                    >
                        HTML & CSS
                    </button>

                    <button
                        onClick={() => {
                            handleClick("jss");
                        }}
                        className={currentActive === "jss" ? "active" : null}
                    >
                        JavaScript
                    </button>

                    <button
                        onClick={() => {
                            handleClick("react");
                        }}
                        className={currentActive === "react" ? "active" : null}
                    >
                        React & CSS
                    </button>




                    <button
                        onClick={() => {
                            handleClick("boot");
                        }}
                        className={currentActive === "boot" ? "active" : null}
                    >
                        React & Bootstrap
                    </button>













                </section>




                <section className=' right-section  flex '>


                    {arr.map((item) => {
                        return (
                            <article key={item.imgPath} className=' card'>
                                <img width={266} src={item.imgPath} alt="" />


                                <div style={{ width: "266px" }} className="box ">
                                    <h1 className='title'>{item.projectTitle}</h1>
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
                        )


                    })}



                </section>




            </main>

        </>
    )
}
export default Main;
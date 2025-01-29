

import { useState } from 'react'
import './Main.css'
const myprojects = [

    { projectTitle: "react project", category: "react", imgPath: "a" },




    { projectTitle: "css project", category: "css", imgPath: "./wp5134484.webp" },





    { projectTitle: "js project", category: "jss", imgPath: "./wp5134484.webp" },



    { projectTitle: "boot project", category: "boot", imgPath: "gh" },


]




const Main = () => {


    const [currentActive, setcurrentActive] = useState("all");

    const [arr, setArr] = useState(myprojects);
    return (
        <>
            <main className='flex '>
                <section className=' flex left-section  '>





                    <button onClick={() => {
                        setcurrentActive("all");

                        const newArr = myprojects.filter((item) => {
                            return item.category === "all"

                        })

                        setArr(newArr)
                    }} className={currentActive === "all" ? "active" : null}>All Projects</button>




                    <button onClick={() => {
                        setcurrentActive("css")
                        const newArr = myprojects.filter((item) => {
                            return item.category === "css"

                        })
                        setArr(newArr)

                    }} className={currentActive === "css" ? "active" : null} >HTML & CSS </button>



                    <button onClick={() => {
                        setcurrentActive("jss")
                        const newArr = myprojects.filter((item) => {
                            return item.category === "jss"

                        })
                        setArr(newArr)


                    }} className={currentActive === "jss" ? "active" : null}

                    >JavaScript</button>



                    <button onClick={() => {
                        setcurrentActive("react")

                        const newArr = myprojects.filter((item) => {
                            return item.category === "react"

                        })
                        setArr(newArr)

                    }} className={currentActive === "react" ? "active" : null}

                    >React & CSS </button>

















                    <button onClick={() => {
                        setcurrentActive("boot")
                        const newArr = myprojects.filter((item) => {
                            return item.category === "boot"
                        })
                        setArr(newArr)
                    }} className={currentActive === "boot" ? "active" : null}

                    >React & Bootstrap </button>





















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


import { useState } from 'react'
import './Main.css'
const myprojects = [

    { projectTitle: "react project", category: ["react"], imgPath: "a" },




    { projectTitle: "css project", category: ["css"], imgPath: "./wp5134484.webp" },





    { projectTitle: "js project", category: ["jss"], imgPath: "./wp5134484.webp" },



    { projectTitle: "boot project & cod", category: ["boot", "cod"], imgPath: "gh" },


]




const Main = () => {


    const [currentActive, setcurrentActive] = useState("all");

    const [arr, setArr] = useState(myprojects);

    const handleClick = (buttonCategory) => {


        setcurrentActive(buttonCategory)

        const newArr = myprojects.filter((item) => {

            const zzz = item.category.find((myitem) => {
                return myitem === buttonCategory
            })




            return zzz === buttonCategory
        })
        setArr(newArr)





    }








    return (
        <>
            <main className='flex '>
                <section className=' flex left-section  '>





                    <button onClick={() => {
                        setcurrentActive("all");

                     setArr(myprojects)

                    }} className={currentActive === "all" ? "active" : null}>All Projects</button>




                    <button onClick={() => {
                        handleClick("css")

                    }} className={currentActive === "css" ? "active" : null} >HTML & CSS </button>







                    <button onClick={() => {
                        handleClick("jss")


                    }} className={currentActive === "jss" ? "active" : null}>JavaScript</button>



                    <button onClick={() => {
                        handleClick("react")
                    }} className={currentActive === "react" ? "active" : null}>React & CSS </button>

















                    <button onClick={() => {
                        handleClick("boot")

                    }} className={currentActive === "boot" ? "active" : null}>React & Bootstrap </button>





















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
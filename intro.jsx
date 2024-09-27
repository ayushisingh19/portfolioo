import img2 from "../images/ayu.png";

const Intro =()=>{
    return(
        <>
        <div className="intro">
       <h3>Welcome To My Portfolio</h3>
       <h1>HELLO! I'm Ayushi Singh Baghel Web <br/>Devloper </h1>
       <p>As a passionate web developer, I specialize in creating dynamic, user-centric web applications and websites.<br/> My expertise spans front-end technologies such as HTML, CSS, and JavaScript, as well as back-end frameworks and databases.<br/> I am proficient in React, Python/Django,c++.</p>
       <h4>DOWNLOAD CV <button><i class="fa-solid fa-arrow-right"></i></button></h4>
       <img src={img2}/>
       </div>
        </>
    )
}
export default Intro

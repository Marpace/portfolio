import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer"
import { useEffect } from "react";


function Hero(props){

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if(inView) props.setCurrentSection(entry.target.id) 
  }, [inView])

  useEffect(() => {
    if(props.currentSection === "home" && !inView) {
      window.scrollTo({
        top: entry.target.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
    }
  }, [props.currentSection])


  function handleContactClick() {
    props.setCurrentSection("contact")
  }

  return (
    <section id="home" className="home" ref={ref}>
      <header className="header">
        <h1 className="header__name">Pablo Almonacid</h1>
        <h2 className="header__title">Full Stack developer</h2>
        <button onClick={handleContactClick} className="button--green">contact</button>
        <Link className="button--green" to={"/resume"}>View resume</Link>
      </header>
      <div className="arrow-down">
        <img className="arrow-down__icon" src="./images/arrow-down.png"></img>
      </div>
    </section>
  )
}



export default Hero;
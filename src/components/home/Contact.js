import { useEffect } from "react";
import {useInView} from "react-intersection-observer";



function Contact(props) {

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });


  useEffect(() => {
    if(inView) props.setCurrentSection(entry.target.id);
  }, [inView])
  
  useEffect(() => {

    if(props.currentSection === "contact" && !inView) {
      window.scrollTo({
        top: entry.target.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
    }
  }, [props.currentSection])

  return (
    <section id="contact" className="contact" ref={ref}>
    <h2 className="section-title">Contact me</h2>
    <form className="contact-form" action="https://formsubmit.co/2d2ae6054f364c0649d09383e5aa88ef" method="POST">

        {/* FORMSUBMIT OPTIONS */}
        <input type="hidden" name="_next" value="https://Marpace.github.io/portfolio/#/success"></input>
        <input type="hidden" name="_subject" value="New message from portfolio!"></input>
        <input type="text" name="_honey" style={{display: "none"}}></input>
        <input type="hidden" name="_template" value="table"></input>
        <input type="hidden" name="_captcha" value="false"></input>

        {/* FORM INPUTS */}
        <input className="contact-form__input" type="text" name="name" placeholder="Name" required></input>
        <input className="contact-form__input" type="email" name="email" placeholder="Email" required></input>
        <input className="contact-form__input" type="number" name="phone" placeholder="Phone (optional)"></input>
        <textarea className="contact-form__textarea" type="text" name="message" rows="5" placeholder="Message" required></textarea>
        <button className="button--green">Send</button>
    </form>
</section>
  )
}



export default Contact;
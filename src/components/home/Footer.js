
function Footer(props) {

    function handleClick() {
        props.setCurrentSection("home");
    }


  return (
    <footer className="footer">
    <div onClick={handleClick} className="back-to-top">
        <img className="arrow-up js-arrow-up" src="images/arrow-up.png"></img>
        <span className="back-to-top__text js-back-to-top-btn">Back to top</span>
    </div>
    
    <div className="attribution">
        <div className="attribution__icons">
            <a href="https://www.linkedin.com/in/almonacid-pablo">
                <img className="social-icon" src="images/linkedin-icon.png"></img>
            </a>
        </div>
        <div className="attribution__text">
            <p>Designed and coded by&nbsp;</p>
            <p className="attribution__name">Pablo Almonacid</p>
        </div>
    </div>
</footer>
  )
}


export default Footer;
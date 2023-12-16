import imagenes from '../assets/imagenes'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Footer() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Submit
        </Tooltip>
    );
    return (
        <>
            <footer id='CONTACT'>
                <div className="footer_texto">
                    <div className="info">
                        <div className="logotxt">
                            <a href="#HOME"><img src={imagenes.logo} alt="" /></a>
                        </div>
                        <div className="num_mail">
                            <div>
                                <img src={imagenes.telefono} alt="" />
                                <p>+333</p>
                            </div>
                            <div>
                                <img src={imagenes.mail} alt="" />
                                <p>maxxfiguera765@gmail.com</p>
                            </div>
                        </div>
                        <div className="redes_footer">
                            <a target='_BLANK' href=""><img className="icons_redes" src={imagenes.instagram} alt="" /></a>
                            <a target='_BLANK' href=""><img className="icons_redes" src={imagenes.facebook} alt="" /></a>
                            <a target='_BLANK' href=""><img className="icons_redes" src={imagenes.whatsapp} alt="" /></a>
                        </div>
                    </div>

                    <div className="contacto">
                        <h4>Contact Me</h4>
                        <form method="POST" action="https://formsubmit.co/maxxfiguera765@gmail.com">


                            <input type='name' placeholder='Your Name...' required />
                            <input type='email' placeholder='Your Email...' required />
                            <textarea placeholder='Message...' required ></textarea>
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 300 }}
                                overlay={renderTooltip}
                            >
                                <input type="submit" className="btnsubmit" />
                            </OverlayTrigger>

                            <input type="hidden" name="_next" value="http://localhost:5173" />
                            <input type="hidden" name="_captcha" value="false" />

                        </form>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <span>Copyright Clothes © 2023.</span>
                <span>| Designed by deg</span>
            </div>
        </>
    )
}

export default Footer
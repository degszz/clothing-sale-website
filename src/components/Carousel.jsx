import Carousel from 'react-bootstrap/Carousel'
import imagenes from '../assets/imagenes'

function IndividualIntervalsExample() {
    return (
        <Carousel style={{ marginBottom: '1.5em' }}>
            <Carousel.Item interval={1000} id='HOME'>
                <img src={imagenes.wallpaper} className='img-carousel' alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={imagenes.wallpaper} className='img-carousel' alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={imagenes.wallpaper} className='img-carousel' alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
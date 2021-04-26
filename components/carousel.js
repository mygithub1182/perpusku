import Carousel from 'react-bootstrap/Carousel'

export default function Carouse(){
    return(
    <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/education-3571630.jpg"
                alt="First slide"
                style={{height: 450}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/book-stack-3964568_1920.jpg"
                alt="Second slide"
                style={{height: 450}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/education-3571630.jpg"
                alt="Third slide"
                style={{height: 450}}
                />
             </Carousel.Item>
    </Carousel>
   
    )
    
}
{/* <section className="features-boxed" style={{background: 'rgb(255,255,255)', marginBottom: '-19px'}}>
<div className="container" style={{borderBottomColor: 'var(--bs-pink)', background: '#ffffff'}}> */}
{/* <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
    <div className="carousel-inner">
    <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/education-3571630.jpg" alt="Slide Image" style={{height: 400}} /></div>
    <div className="carousel-item"><img className="w-100 d-block" src="assets/img/book-stack-3964568_1920.jpg" style={{height: 400}} /></div>
    <div className="carousel-item"><img className="w-100 d-block" src="assets/img/books-2840585_1920.jpg" alt="Slide Image" style={{height: 400}} /></div>
    </div>
    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" /><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" /><span className="visually-hidden">Next</span></a></div>
    <ol className="carousel-indicators">
    <li data-bs-target="#carousel-1" data-bs-slide-to={0} className="active" />
    <li data-bs-target="#carousel-1" data-bs-slide-to={1} />
    <li data-bs-target="#carousel-1" data-bs-slide-to={2} />
    </ol>
</div>
<div className="intro">
    <p className="text-center" />
</div>
</div>
</section> */}
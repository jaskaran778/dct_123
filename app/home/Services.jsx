// import AppleCardsCarouselDemo from "./AppleCardsDemo";
import Carousel from "./Carousel"

export default function Services(){
    return(
        <div className="services-section flex flex-col items-center justify-center mt-20 text-white">
            <h1 className="text-[10vh] font-bold mq750:text-[5vh]">DCT SERVICES</h1>
            <Carousel />
        </div>
    )
}

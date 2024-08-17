// import AppleCardsCarouselDemo from "./AppleCardsDemo";
import { useEffect } from "react";
import Carousel from "./Carousel";
import { useSearchParams } from "next/navigation";

export default function ServicesPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const openCard = searchParams.get("openCard");
    if (openCard !== null) {
      const cardIndex = parseInt(openCard, 10);
      const card = document.getElementById(`card-${cardIndex}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth" });
        const cardButton = card.querySelector("button");
        if (cardButton) {
          cardButton.click();
        }
      }
    }
  }, [searchParams]);

  return (
    <div className="services-section flex flex-col items-center justify-center mt-20 text-white">
      <h1 className="text-[10vh] font-bold mq750:text-[5vh]">DCT SERVICES</h1>
      <Carousel />
    </div>
  );
}

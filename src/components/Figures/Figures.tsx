import { useEffect, useRef } from "react";
import { FiguresContainer, Image } from "./Figures.style";
import { FiguresProps, ImageType } from "../../utils/types/types";

export default function Figures({images, maxPage, page, setPage}: FiguresProps) {

  const lastImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if(lastImage.current !== null) {
      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting && maxPage !== page) {
            let nextPage = page;
            nextPage++;
            if(nextPage > maxPage) { return; } 
            else { setPage(nextPage); }
        }
      }, {rootMargin: "50%", threshold: 0.5});
      observer.observe(lastImage.current);
    }
  }, [maxPage, page, setPage])

  return (
    <FiguresContainer>
      {
        images.map((image: ImageType, index: number) => (
            images.length === index + 1
            ? (<Image ref={lastImage} key={`${index}-${image.id}`} src={image.urls.small} alt={image.alt_description} />)
            : (<Image key={`${index}-${image.id}`} src={image.urls.small} alt={image.alt_description} />)
        ))
      }
    </FiguresContainer>
  )
}

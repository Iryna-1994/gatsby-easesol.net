import React from 'react';
import { useWindowSize } from "@react-hook/window-size/throttled"
import { useAllOurWork } from "@/hooks/use-our-work"
import Carousel from 'nuka-carousel';
import Slider from './slider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './styles.css'

const HireUsSlider = () => {

  const { primeWorks } = useAllOurWork()

  const [maxWidth, maxHeight] = useWindowSize({ fps: 60 })
  const sliderSize = maxWidth < 1023 ? 1 : 1.3

  return (
    <section className='slider-section mt-10 mb-5'>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <ArrowBackIosIcon />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </button>
        )}
        slidesToShow={sliderSize}
        wrapAround={true}
        cellSpacing={40}
      >
        {
          primeWorks.map((work: any, index: number) => {
            const { node } = work
            const { frontmatter, slug } = node
            const { title, color, embeddedImagesLocal, pageIntro } = frontmatter
            const { publicURL } = embeddedImagesLocal[0]

            return (
              <Slider imgLink={publicURL} color={color} title={title} slug={slug} desc={pageIntro} key={index} />
            )
          })
        }
      </Carousel>
    </section>
  );
}

export default HireUsSlider
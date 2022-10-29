import React from 'react';
import { Link } from "gatsby"
import IHeading from '../IHeading';
import IParagraph from '../IParagraph';

const Slider = (props: any) => {

  const { imgLink, title, slug, color, desc } = props

  return (
    <div className={`group relative h-full flex flex-col justify-between md:flex-row items-center gap-6 rounded-lg px-5 py-5 md:py-10 lg:py-5 bg-${color}-500`}>
      <div className='flex flex-col items-center justify-evenly h-full w-full md:w-1/2'>
        <img src={imgLink} className='w-full pointer-events-none duration-300 group-hover:scale-105' />
      </div>
      <div className='w-full h-full flex flex-col justify-end md:justify-center items-center md:w-1/2'>
        <IHeading size='three' align='text-center' color='white'>
          {title}
        </IHeading>
        <div className={`absolute flex flex-col items-start justify-evenly top-0 right-0 bottom-0 left-0 p-8 rounded-xl bg-${color}-700 duration-300 opacity-0 group-hover:opacity-100 shadow-xl`}>
          <IParagraph color='white' size='sm'>
            {desc}
          </IParagraph>
          <Link to={`/${slug}`} className="inline-flex items-center mt-8 duration-300 gap-x-2 hover:gap-x-4 hover:text-secondary-300 text-white underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider
 import  heroMobileImage  from '../assets/image-header-mobile.jpg'
 import  heroDesktopImage  from '../assets/image-header-desktop.jpg'

function Image() {
  return (
    <div className='h-72 rounded-t-2xl relative overflow-hidden lg:h-full lg:basis-1/2 lg:rounded-t-none lg:rounded-tr-2xl lg:rounded-br-2xl lg:order-2'>
        <div className='absolute inset-0 bg-accent bg-opacity-60'></div>
        <picture>
            <source media="(min-width:1024px )" srcSet={heroDesktopImage}/>
            <img src={heroMobileImage} alt="" className='block w-full h-full rounded-t-2xl object-auto lg:rounded-t-none lg:rounded-tr-2xl lg:rounded-br-2xl'/>
        </picture>
    </div>
  )
}

export default Image
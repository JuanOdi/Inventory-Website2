import React from 'react'

const Banner = () => {
  return (
    <>
    <main className='main top'>
        <div class="top-banner swiper js-swiper">
            <div class="swiper-wrapper">
                <img class="swiper-slide" src="https://picsum.photos/1920/1080.jpg?random=1" alt=""/>
                <img class="swiper-slide" src="https://picsum.photos/1920/1080.jpg?random=2" alt=""/>
                <img class="swiper-slide" src="https://picsum.photos/1920/1080.jpg?random=3" alt=""/>
            </div>
        </div>
    </main>
    </>
  )
}

export default Banner
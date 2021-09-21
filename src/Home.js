import React from 'react';
import './Home.css';
import Product from './Product';
import useFetch from './useFetch';
import Carousel from 'nuka-carousel';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

function Home() {
  const { data, isPending, error } = useFetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products');
  console.log(data);
  const banners = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg',
  ];
  if (!error) {
    return (
      <div className="home">
        <div className="h-banner __carousel">
          <Carousel
            autoplay
            autoplayReverse
            className="h-banner"
            renderCenterLeftControls={({ previousSlide }) => (
              <Icon
                className="h-banner__control"
                size={3}
                path={mdiChevronLeft}
                onClick={previousSlide}
              />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Icon
                className="h-banner__control"
                size={3}
                path={mdiChevronRight}
                onClick={nextSlide}
              />
            )}
            renderBottomCenterControls={() => null}
          >
            {banners.map((bannerSrc, index) => (
              <img className="home__image" key={index} alt={`Banner ${index + 1}`} src={bannerSrc} />
            ))}
          </Carousel>
        </div>

        <div className="col">
        { error && <div>{ error }</div> }
          {isPending && <h1 >Loading...</h1>}
          
          {data && data.map((datas) => (

            <div className="home__row" key={datas.id}>

              <Product
                id={datas.id}
                title={datas.title}
                price={datas.price.value}
                rating={datas.rating.value}
                image={datas.images[0]}

              />

            </div>
          ))}
        </div>

        {data && <div className="home__gif">
        <img src="https://www.amazon.in/images/G/31/IMG19/Furniture/WFH/Header/PC_Banner_1500x350.gif" alt="" />
      </div>}
     {data && <div className="home__gif home__bottomAd">
        <img src="https://www.amazon.in/images/G/31/img17/AmazonBusiness/Anniversary2019/B2Ccustomer_Strip_1500_100_0705_1._CB1588869535_.jpg" alt="" />
      </div>}
      </div>

    );
  }
}
export default Home;
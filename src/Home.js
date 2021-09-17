import React from 'react';
import './Home.css'; 
import Product from './Product';
import useFetch from './useFetch';

function Home() {
  const { data, isPending, error } = useFetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products');
  console.log(data);
  if(!error){
    return (
        <div className="home">
            <img 
              className="home__image"
              src="https://www.amazon.in/images/G/31/img17/AmazonDevices/2019/pushnotification/PD_GW_Teaser-PC-hero_2x._CB409675246_.jpg"
              alt=""/>
              
              <div className="col">
            
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
            
                <div className="home__gif">
            <img src="https://www.amazon.in/images/G/31/IMG19/Furniture/WFH/Header/PC_Banner_1500x350.gif" alt=""/>
          </div>
              <div className="home__gif home__bottomAd">
                <img src="https://www.amazon.in/images/G/31/img17/AmazonBusiness/Anniversary2019/B2Ccustomer_Strip_1500_100_0705_1._CB1588869535_.jpg" alt=""/>
              </div>
              </div>
          
    );}
}
export default Home;
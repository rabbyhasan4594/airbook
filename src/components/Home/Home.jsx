import React from 'react';
import Featured from '../Featured/Featured';
import Deals from '../Deals/Deals';
import Popular from '../Popular/Popular';
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div className=''>
             <Banner></Banner>
           <Featured></Featured>
          
           <Deals></Deals>
           <Popular></Popular>
           <Travel></Travel>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;
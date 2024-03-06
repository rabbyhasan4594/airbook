import React from 'react';
import Featured from '../Featured/Featured';
import Deals from '../Deals/Deals';
import Popular from '../Popular/Popular';


const Home = () => {
    return (
        <div className=''>
           <Featured></Featured>
           <Deals></Deals>
           <Popular></Popular>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from '../../components/Header/Header';
import Fotter from '../../components/Footer/Fotter';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
      <>
        <h3>
          <Header />
          <Banner />
          <Fotter />
          
        </h3>
      </>
    );
}

export default Home;

import React from 'react'
import Banner from '../Components/Home/Banner';
import Category from '../Components/Home/Category/Category';
import TrendyProducts from '../Components/Home/TrendyProducts';
import SpringCollection from '../Components/Home/SpringCollection';
import StartingCollection from '../Components/Home/StartingCollection';
import LimitedProduct from '../Components/Home/LimitedProduct';
import InstagramCard from '../Components/Home/InstagramCard';
import MobileTrandyProducts from '../Components/Layout/MobileTrandyProducts';
import MobileSpringCollection from '../Components/Layout/MobileSpringCollection';
import MobileStartingCollection from '../Components/Layout/MobileStartingCollection';


const Home = () => {
  return (
    <>
    <Banner/>
    <Category/>
    <TrendyProducts/>
    <MobileTrandyProducts/>
    <SpringCollection/>
    <MobileSpringCollection/>
    <StartingCollection/>
    <MobileStartingCollection/>
    <LimitedProduct/>
  
    <InstagramCard/>
    </>
  )
}

export default Home;
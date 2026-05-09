import React from 'react'
import Banner from '../Components/Home/Banner';
import Category from '../Components/Home/Category';
import TrendyProducts from '../Components/Home/TrendyProducts';
import SpringCollection from '../Components/Home/SpringCollection';
import StartingCollection from '../Components/Home/StartingCollection';
import LimitedProduct from '../Components/Home/LimitedProduct';
import InstagramCard from '../Components/Home/InstagramCard';

const Home = () => {
  return (
    <>
    <Banner/>
    <Category/>
    <TrendyProducts/>
    <SpringCollection/>
    <StartingCollection/>
    <LimitedProduct/>
    <InstagramCard/>
    </>
  )
}

export default Home;
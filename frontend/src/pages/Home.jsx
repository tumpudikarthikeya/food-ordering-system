import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import DetailSection from '../components/Home/DetailSection'
import RestaurantCard from '../components/Home/RestaurantCard'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DetailSection
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        heading={'Pasta, Sushi, Steaks, Tacos Everything you want in just{" "}'}
        highlight={"1 order."}
        body={"No more waiting for separate deliveries, get all the different foods together.*"}
      />


      <div className='flex flex-wrap gap-10 px-40 place-content-center'>

      <RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={4}
      />

<RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={4.5}
      />

<RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={5.5}
      />

<RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={5.5}
      />

<RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={5.5}
      />

<RestaurantCard
        name={"ABVDCDS"}
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        cuisine={"DCSDDS"}
        rating={5.5}
      />
      </div>





    <DetailSection
        img_url={"https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1740359704~exp=1740363304~hmac=9118c386592072242d7be605b2cc1bdeebf80f56225af32c3422d9677d898b41&w=996"}
        heading={'Pasta, Sushi, Steaks, Tacos Everything you want in just{" "}'}
        highlight={"1 order."}
        body={"No more waiting for separate deliveries, get all the different foods together.*"}
      />
    </div>
  )
}

export default Home
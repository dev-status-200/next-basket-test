import "/app/css/home.css";
import Hero from "./Components/Home/Hero";
import BestSeller from "./Components/Home/BestSeller"
import Services from "./Components/Home/Services";
import Posts from "./Components/Home/Posts";
import { getItems } from "./utils/products";
import About from "./Components/Home/About";
import Problem from "./Components/Home/Problem";

export default async function Home() {

  const params = {
    limit:10,
    skip:0,
    select:'title,category,price,thumbnail,discountPercentage'
  }
  const data = await getItems(params);

  return (
  <main className='home-styles'>
    <div className="py-5">
      <div className="container-main">
        <Hero/>
      </div>
      <div className="py-5 container-main">
        <BestSeller data={data} />
      </div>
      <div className="py-5 mb-5">
        <Services />
      </div>
      <div className="py-5 mb-5">
        <Posts />
      </div> 
      <div className="">
        <About />
      </div>
    </div>
    <div className="">
      <Problem />
    </div>
  </main>
  );
}
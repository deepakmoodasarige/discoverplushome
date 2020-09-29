import * as React from "react";

import Header from "../../components/organisms/Header/Header";
import Rail from "../../components/organisms/Rail/Rail";
import Hero from "../../components/organisms/Hero/Hero";
import Footer from "../../components/organisms/Footer/Footer";

// image
import HeroIMG from "../../assets/images/hero/BBC.jpeg";
import  ListIMG from "../../assets/images/WildKarnataka.jpeg";
import HeroTitleImage from "../../assets/images/HistoryExtraPodCast.jpeg";

// Interface

import { ShowListProps } from "../../components/molecules/ShowsList/ShowList";


const Home = () => {



  const ShowList: ShowListProps[] = [
    {
      Image: ListIMG,
      linkurl: "/",
    },
    {
      Image: ListIMG,
      linkurl: "/",
    },
    {
      Image: ListIMG,
      linkurl: "/",
    },
    {
      Image: ListIMG,
      linkurl: "/",
    },
    {
      Image: ListIMG,
      linkurl: "/",
    },
    {
      Image: ListIMG,
      linkurl: "/",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          bgImg={HeroIMG}
          image={HeroTitleImage}
          primaryText="Blue Planet two"
          secendoryText="Behaviour of marine life and intrigues of sea are captured"
          className=""
        />
        <section className="mt-2">
          <Rail
            type="episode"
            headerText="Continue Watching"
            railList={ShowList}
          />
        </section>
       
        <section className="mt-2">
          <Rail
            type="playlist"
            headerText="Playlist"
            railList={ShowList}
          />
        </section>
      </main>
      <Footer className="mt-2" />
    </>
  );
};

export default Home;

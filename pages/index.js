import Head from "next/head";
import Hero from "../components/Hero";
import requests from "../components/Request";
import Row from "../components/Row";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MovieZone</title>
      </Head>
      <>
        <Hero />
        <Row rowID="1" title="UpComing" fetchUrl={requests.requestUpcoming} />
        <Row rowID="2" title="Popular" fetchUrl={requests.requestPopular} />
        <Row rowID="3" title="Trending" fetchUrl={requests.requestTrending} />
        <Row rowID="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
        <Row rowID="5" title="Horror" fetchUrl={requests.requestHorror} />
      </>
    </div>
  );
}

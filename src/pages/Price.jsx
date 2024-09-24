import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import.meta.env.VITE_COIN_API_KEY;

export default function Price(props) {
  // Replace with your own API key from coinapi.io
  //const apiKey = "7923824F-B32B-4F62-A402-C2B93B12539C";
  const apiKey = import.meta.env.VITE_COIN_API_KEY;


  const params = useParams();
  const symbol = params.symbol;
  //console.log(import.meta.env.VITE_COIN_API_KEY);

  
 // const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

 // console.log(import.meta.env.VITE_COIN_API_KEY);

  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, [symbol]);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => <h1>Loading...</h1>;

  return coin && coin.rate ? loaded() : loading();
}

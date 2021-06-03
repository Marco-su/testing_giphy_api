import { useEffect, useState } from "react";
import axios from "axios";

const GetAndDestructuring = () => {
  // State
  const [myData, setMyData] = useState({});

  // Effect
  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      const { data } = await axios.get(
        "http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN"
      );

      setMyData(data.data);
    };

    getData();

    return () => abortController.abort();
  }, []);

  // Render
  return (
    <div className="gif-container">
      <h2>{myData.title}</h2>
      <figure>
        <img src={myData.image_original_url} alt={myData.title} />
      </figure>
    </div>
  );
};

export default GetAndDestructuring;

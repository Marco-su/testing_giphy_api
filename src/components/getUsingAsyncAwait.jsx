import { useEffect, useState } from "react";
import axios from "axios";

const GetUsingAsyncAwait = () => {
  // State
  const [data, setData] = useState({});

  // Effect
  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      const res = await axios.get(
        "http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN"
      );

      setData(res.data.data);
    };

    getData();

    return () => abortController.abort();
  }, []);

  // Render
  return (
    <div className="gif-container">
      <h2>Async Await</h2>
      <h3>{data.title}</h3>
      <figure>
        <img src={data.image_original_url} alt={data.title} />
      </figure>
    </div>
  );
};

export default GetUsingAsyncAwait;

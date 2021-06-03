import { useEffect, useState } from "react";

const GetByFetch = () => {
  // State
  const [data, setData] = useState({});

  // Effect
  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN"
    )
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, []);

  // Render
  return (
    <div className="gif-container">
      <h2>Promises with fetch</h2>
      <h3>{data.title}</h3>
      <figure>
        <img src={data.image_original_url} alt={data.title} />
      </figure>
    </div>
  );
};

export default GetByFetch;

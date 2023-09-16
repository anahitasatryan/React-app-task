import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

const Astronomy = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const fetchImageByDate = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=bectL3bsjTkAbs4PA6Ldmgwf5nfgIsyVJbzn44UB&date=${date}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dataPicker-wrapper">
      <div className="dataPicker">
        <div className="input-container">
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <button onClick={fetchImageByDate}>Go</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <h2>{data.title}</h2>
          <p>{data.explanation}</p>
          <img src={data.url} alt={data.title} />
        </>
      ) : null}
    </div>
  );
};

export default Astronomy;

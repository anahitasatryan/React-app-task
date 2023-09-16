import axios from "axios";
import React, { useState } from "react";
import "./style.scss";

const Asteroids = () => {
  const [date, setDate] = useState("");
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const searchAsteroids = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=bectL3bsjTkAbs4PA6Ldmgwf5nfgIsyVJbzn44UB`
      );
      setAsteroids(response.data.near_earth_objects[date]);
    } catch (error) {
      console.error("Error fetching asteroid data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>Search for Asteroids based on their closest approach date to Earth</p>
      <div className="dataPicker">
        <div className="input-container">
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="input-container">
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <button onClick={searchAsteroids}>GO</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : asteroids.length > 0 ? (
        <div>
          <table>
            {asteroids.map((asteroid) => (
              <tbody key={asteroid.id}>
                <strong>Title</strong> {asteroid.name}
                <br />
                <strong>Closest Approach Date:</strong>{" "}
                {asteroid.close_approach_data[0].close_approach_date_full}
                <br />
                <strong>Relative Velocity (km/h):</strong>{" "}
                {
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }
                <strong>Diameter (meters):</strong>{" "}
                {asteroid.estimated_diameter.meters.estimated_diameter_min} -{" "}
                {asteroid.estimated_diameter.meters.estimated_diameter_max}
                <br />
              </tbody>
            ))}
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Asteroids;

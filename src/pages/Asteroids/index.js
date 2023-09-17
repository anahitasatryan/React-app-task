import axios from "axios";
import React, { useState } from "react";
import getTodayDate from "../../components/GetToday";
import "./style.scss";

const Asteroids = () => {
  const [startDate, setStartDate] = useState(getTodayDate());
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setError("");
  };

  const searchAsteroids = async () => {
    const selectedDate = new Date(startDate);
    const today = new Date();
    const oneWeekFromToday = new Date(today);
    oneWeekFromToday.setDate(today.getDate() - 6);

    if (selectedDate < oneWeekFromToday) {
      setError("Range should not exceed 1 week");
      setAsteroids([]);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=bectL3bsjTkAbs4PA6Ldmgwf5nfgIsyVJbzn44UB`
      );
      setAsteroids(response.data.near_earth_objects[startDate]);
    } catch (error) {
      console.error("Error fetching asteroid data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="asteroids">
      <p>Search for Asteroids based on their closest approach date to Earth</p>
      <div className="dataPicker">
        <div className="input-container">
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="input-container">
          <input type="date" value={getTodayDate()} readOnly />
        </div>
        <button onClick={searchAsteroids}>GO</button>
      </div>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {asteroids.length > 0 && (
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Distance (km)</th>
                    <th>Absolute Magnitude</th>
                    <th>Is potentially hazardous</th>
                    <th>Diameter (meters)</th>
                  </tr>
                </thead>
                <tbody>
                  {asteroids.map((asteroid) => (
                    <tr key={asteroid.id}>
                      <td>{asteroid.name}</td>
                      <td>
                        {
                          asteroid.close_approach_data[0].miss_distance
                            .kilometers
                        }
                      </td>
                      <td>{asteroid.absolute_magnitude_h}</td>
                      <td>
                        {asteroid.is_potentially_hazardous_asteroid
                          ? "Yes"
                          : "No"}
                      </td>
                      <td>
                        {`${asteroid.estimated_diameter.meters.estimated_diameter_min} - ${asteroid.estimated_diameter.meters.estimated_diameter_max}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Asteroids;

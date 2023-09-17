import React, { useState } from "react";
import "./style.scss";
import Button from "../../components/Button";

const Planet = () => {
  const [planetData, setPlanetData] = useState({
    planet_name: "",
    galaxy: "",
    diametr: "",
    distance: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanetData({ ...planetData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    for (const key in planetData) {
      if (!planetData[key]) {
        newErrors[key] = "Required";
      }
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (planetData.email && !emailPattern.test(planetData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted with data:", planetData);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <section id="planet">
        <p>
          If you found a new planet, you can add it to our directory (Reactive
          forms demo)
        </p>
        <div className="planet_submit">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="planet_name"
              placeholder="Planet Name"
              value={planetData.planet_name}
              onChange={handleInputChange}
            />
            {errors.planet_name && (
              <span className="error">{errors.planet_name}</span>
            )}

            <select
              name="galaxy"
              value={planetData.galaxy}
              onChange={handleInputChange}
            >
              <option value="">Galaxy name</option>
              <option value="Milky Way">Milky Way</option>
              <option value="Messier 83">Messier 83</option>
              <option value="Black Eye Galaxy">Black Eye Galaxy</option>
              <option value="Pinwheel">Pinwheel</option>
              <option value="Canis Major Dwarf">Canis Major Dwarf</option>
              <option value="Somewhere else...">Somewhere else...</option>
            </select>
            {errors.galaxy && <span className="error">{errors.galaxy}</span>}

            <input
              type="number"
              name="diametr"
              placeholder="Diameter (km)"
              value={planetData.diametr}
              onChange={handleInputChange}
            />
            {errors.diametr && <span className="error">{errors.diametr}</span>}

            <input
              type="number"
              name="distance"
              placeholder="Distance (mln km)"
              value={planetData.distance}
              onChange={handleInputChange}
            />
            {errors.distance && (
              <span className="error">{errors.distance}</span>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={planetData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={planetData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <Button title="Submit" />
          </form>
          {submitted && (
            <div className="success-message">Planet added successfully!</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Planet;

import React from "react";
import "./style.scss";
import Button from "../../components/Button";

const Planet = () => {
  return (
    <div>
      <section id="planet">
        <p>
          If you found new planet you can add it to our directory (Reactive
          forms demo)
        </p>
        <div className="planet_submit">
          <form>
            <input
              type="text"
              name="planet_name"
              placeholder="Planet Name"
              value=""
            />
            <select name="galaxy">
              <option>Galaxy name</option>
              <option value="Milky Way">Milky Way</option>
              <option value="Messier 83">Messier 83</option>
              <option value="Black Eye Galaxy">Black Eye Galaxy</option>
              <option value="Pinwheel">Pinwheel</option>
              <option value="Canis Major Dwarf">Canis Major Dwarf</option>
              <option value="Somewhere else...">Somewhere else...</option>
            </select>
            <input
              type="number"
              name="diametr"
              placeholder="Diametr (km)"
              value=""
            />
            <input
              type="number"
              name="distance"
              placeholder="Distance (mln km)"
              value=""
            />
            <input type="text" name="name" placeholder="Your Name" value="" />
            <input type="text" name="email" placeholder="Email" value="" />
            <Button title="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Planet;

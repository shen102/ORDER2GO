import ServicesItem from "./ServicesItem";
import { ServicesList } from "./ServicesList";
import "./Services.css";
function Services() {
  return (
    <div className="Services">
      <h1 className="menuTitle">Our Services</h1>
      <div className="ServicesList">
        {ServicesList.map((servicesItem, key) => {
          return (
            <ServicesItem
              key={key}
              
              name={servicesItem.name}
              image={servicesItem.image}
              price={servicesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
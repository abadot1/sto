import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceCreate, serviceLoad } from "../actions";
import Service from "./Service";
import jsonData from "../../data.json";

function Services(props) {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  const dispatch = useDispatch();

  const service = useSelector((state) => {
    const { servicesReducer } = state;
    return servicesReducer.service;
  });

  console.log("wqe>>>", service);

  const handleInputName = (e) => {
    setServiceName(e.target.value);
  };
  const handleInputPrice = (e) => {
    setServicePrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = service.length + 1;
    dispatch(serviceCreate(id, serviceName, servicePrice));
  };

  useEffect(() => {
    dispatch(serviceLoad(jsonData));
  }, []);

  return (
    <div className="services">
      <div className="add-services">
        <form>
          <label>
            <p>Название услуги</p>
            <input type="text" onChange={handleInputName} />
          </label>
          <label>
            <p>Цена</p>
            <input type="text" onChange={handleInputPrice} />
          </label>
          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
      {!!service.length &&
        service.map((res) => {
          return <Service key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Services;

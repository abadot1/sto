import { useDispatch, useSelector } from "react-redux";
import jsonData from "../../data.json";
import { useEffect } from "react";
import { serviceLoad } from "../actions";

function Services() {
  const service = useSelector((state) => {
    const { servicesReducer } = state;
    return servicesReducer.service;
  });

  console.log(service);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceLoad(jsonData));
  }, []);

  return (
    <div className="container">
      <table className="table-price">
        <thead className="head__table-price">
          <tr className="column__table-price">
            <th className="line__table-price">Наименование работ / Размер </th>
            {service.map((res) => {
              if (res.id <= 10)
                return (
                  <th className="line__table-price" key={res.id}>
                    {res.size}
                  </th>
                );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Демонтаж покрышки</td>
            {service.map((res) => {
              if (res.name === "Демонтаж покрышки")
                return <td key={res.id}>{res.price}</td>;
            })}
          </tr>
          <tr>
            <td>Монтаж покрышки</td>
            {service.map((res) => {
              if (res.name === "Монтаж покрышки")
                return <td key={res.id}>{res.price}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;

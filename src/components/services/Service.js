import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { serviceDelete, serviceUpdate } from "../actions";

function Service({ data }) {
  const [nameService, setNameService] = useState("");
  const [priceService, setPriceService] = useState("");

  const { id, name, price } = data;

  useEffect(() => {
    if (name || price) {
      setNameService(name);
      setPriceService(price);
    }
  }, [name, price]);

  const dispatch = useDispatch();

  const handleInputName = (e) => {
    setNameService(e.target.value);
  };
  const handleInputPrice = (e) => {
    setPriceService(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(serviceUpdate(id, nameService, priceService));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(serviceDelete(id));
  };

  return (
    <form>
      <input type="text" value={nameService} onChange={handleInputName} />
      <input type="text" value={priceService} onChange={handleInputPrice} />
      <input type="submit" value="Сохранить" onClick={handleUpdate} />
      <span className="service-delete" onClick={handleDelete}>
        &times;
      </span>
    </form>
  );
}

export default Service;

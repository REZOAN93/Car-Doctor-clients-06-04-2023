import React, { useEffect, useState } from "react";

const OrderList = ({ orderdata, handleDelete, handleUpdate }) => {
  const { email, product, name, _id,status } = orderdata;
  const [service, setServices] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${product}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [product]);

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <input
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-secondary"
              type="button"
              value="X"
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 h-24 rounded">
                <img src={service.img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service.title}</div>
              <div className="text-sm opacity-50">$ {service.price}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">{name}</span>
        </td>
        <td>Purple</td>
        <th>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? status : "Pending"}
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default OrderList;

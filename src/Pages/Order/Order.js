import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OrderList from "./OrderList";

const Order = () => {
  const [order, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((or) => or._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  const handleDelete = (id) => {
    const OrderDeletion = window.confirm(
      "would you like to delete this ORder ?"
    );
    if (OrderDeletion === true) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order is Deleted");
            const remaingOrder = order.filter((da) => da._id !== id);
            setOrders(remaingOrder);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto grid my-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Status</th>
          </tr>
        </thead>
        {order.map((or) => (
          <OrderList
            orderdata={or}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          ></OrderList>
        ))}
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Order;

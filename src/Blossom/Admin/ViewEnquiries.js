import React, { useEffect, useState } from "react";
import useFetchAPIdata from "./FetchAPI";

const ViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const data = useFetchAPIdata(`http://localhost:4000/enquiries`);
  useEffect(() => {
    setEnquiries(data);
  });
  return (
    <div className="container p-5 text-center">
      <h3>View Enquiries</h3>
      <table className="table table-bordered text-bg-light p-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq, index) => {
            return (
              <tr key={index}>
                <td>{enq.username}</td>
                <td>{enq.number}</td>
                <td>{enq.email}</td>
                <td>{enq.products}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEnquiries;

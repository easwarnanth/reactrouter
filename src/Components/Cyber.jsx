import React from "react";
import Card from "./Card";
const Cyber = ({ data }) => {
  const cyber = data.filter((item) => item.head === "Cyber security");
  return (
    <div>
      <div className="container">
        <div className="row">
          {cyber.map((item, index) => {
            return (
              <>
                <Card item={item} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cyber;
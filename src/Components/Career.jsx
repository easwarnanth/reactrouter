import React from 'react';
import Card from "./Card";
const Career = ({data}) => {
    const job = data.filter((item) => item.head === "Career");
    return (
        <div>
           <div className="container">
        <div className="row">
          {job.map((item, index) => {
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

export default Career;
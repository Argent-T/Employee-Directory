import React from "react";

function Col(props) {
 if(props.size !== undefined){
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
 }
 else{
   return <div className="col" {...props} />;
 }
  
}

export default Col;

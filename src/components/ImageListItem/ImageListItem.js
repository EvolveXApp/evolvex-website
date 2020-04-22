import React from "react";
const ImageListItem = (props) => {
  const { data } = props;
  console.log("Data", data);
  return (
    <div>
      {data.map((item) => (
        <div>
          <img
            src={item.image}
            alt={item.title}
            title={item.title}
            style={{ width: 100, height: 100 }}
          />
          <p>Hello World</p>
        </div>
      ))}
    </div>
  );
};

export default ImageListItem;

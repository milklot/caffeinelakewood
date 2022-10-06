import React from "react";

export const MenuCard = (props) => {
  const { itemsData } = props;
  console.log(itemsData);
  return (
    <div className="menu-card-container">
      {itemsData.map(({ category, items }, index) => {
        return (
          <div>
            <h2 className="menu-card-category" key={index}>
              {category}
            </h2>
            {items.map(({ name, info }, i) => {
              return (
                <div className="menu-card-text" key={i}>
                  <p className="menu-card-name">{name}</p>
                  <p className="menu-card-info">{info}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

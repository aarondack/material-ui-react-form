import React, { PropTypes } from 'react';
import Item from '../Item';
import './ShopList.css';

const ShopList = ({ shopItems }) => {
  return (
    <div className="list">
      {shopItems.map((value, key) =>
        <Item
          key={key}
          name={value.name}
          description={value.description}
          price={value.price}
          date={value.date}
          taxable={value.taxable}
        />
      )}
    </div>
  );
}

ShopList.propTypes = {
  shopItems: PropTypes.array.isRequired
};

export default ShopList;

import React from 'react';
import { connect } from 'react-redux';
import ShopList from '../../components/ShopList';
import ItemForm from '../../components/ItemForm';
import './Shop.css';
import { addItemToStore } from '../../actions';

class Shop extends React.Component {
  render() {
    const { shopItems, addItem } = this.props;
    return (
    <div className="container">
      <div className="shopList">
        {shopItems.length === 0 &&
          <h1>There are currently no items in your shop!</h1>
        }
        {shopItems.length > 0 &&
          <ShopList shopItems={shopItems} />
        }
        </div>
        <div className="itemForm">
          <ItemForm addItem={addItem}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopItems: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItemToStore(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

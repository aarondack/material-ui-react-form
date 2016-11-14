import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import moment from 'moment';
import './Item.css';

const Item = ({
    ...props
}) => {
    return (
        <div className="item">
            <Card>
                <h2>Name: {props.name}</h2>
                <h3>Price: ${parseInt(props.price).toLocaleString('USD')}</h3>
                <p>Description: {props.description}</p>
                <p>Available on: {moment(props.date).format('MMMM Do YYYY')}</p>
                <div>
                  {props.taxable && <span>Tax will be applied</span>}
                  {!props.taxable && <span>Tax will not be applied</span>}
                </div>
            </Card>
        </div>
    );
}

export default Item;

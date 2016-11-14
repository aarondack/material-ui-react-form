import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import './ItemForm.css';

class ItemForm extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
        date: '',
        taxable: true
    };

    change = event => this.setState({
        ...this.state.item,
        [event.target.id]: event.target.value
    })

    checked = () => this.setState({
        ...this.state.item,
        taxable: !this.state.taxable
    });

    clearValues = () => this.setState({name: '', description: '', price: '', date: '', taxable: true});

    render() {
        const {addItem} = this.props;
        const date = moment().format('YYYY-MM-DD');
        return (
            <div className="stickyForm">
                <Paper zDepth={2}>
                    <h2 className="formHeader">Add an item!</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addItem(this.state);
                        this.clearValues();
                    }} className="form">
                        <div>
                            <TextField hintText="Enter your items name" id="name" value={this.state.name} onChange={this.change} required/>
                        </div>
                        <div>
                            <TextField hintText="Enter your items description" multiLine={true} id="description" value={this.state.description} onChange={this.change} required/>
                        </div>
                        <div>
                            <TextField hintText="Enter your items price" type="number" id="price" min='0' step="0.01" value={this.state.price} onChange={this.change} required/>
                        </div>
                        <div>
                            <TextField type="date" id="date" value={this.state.date} onChange={this.change} min={date} required/>
                        </div>
                        <div className="checkboxCentering">
                            <Checkbox label="Taxable" id="taxable" defaultChecked={true} onCheck={this.checked}/>
                        </div>
                        <div>
                            <RaisedButton type="submit" label="Add Item"/>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

ItemForm.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default ItemForm;

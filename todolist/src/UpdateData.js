import React, { useState, useEffect, Component } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function withRouter(Component) {
    function TodoList(props) {
        let params = useParams();
        let navigate = useNavigate();
        return <Component {...props} params={params} navigate={navigate} />;
    }
    return TodoList;
}
class UpdateData extends Component {
    constructor(props) {
        super(props);
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeTypeItem = this.onChangeTypeItem.bind(this);
        this.onChangeRadio = this.onChangeRadio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Item: '',
            TypeItem: '',
            Radio: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/todo/' + this.props.params._id)
            .then(response => {
                console.log(response.data)
                this.setState({
                    Item: response.data.Item,
                    TypeItem: response.data.TypeItem,
                    Radio: response.data.Radio
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeItem(e) {
        this.setState({ Item: e.target.value })
    }
    onChangeTypeItem(e) {
        this.setState((prevCount) => ({
            TypeItem: !prevCount.TypeItem
        }));
    }
    onChangeRadio(e) {
        this.setState((prevCount) => ({
            Radio: !prevCount.Radio
        }));
    }
    onSubmit(event) {
        event.preventDefault();
        const obj = {
            Item: this.state.Item,
            TypeItem: this.state.TypeItem,
            Radio: this.state.Radio
        };
        axios.patch('http://localhost:8080/api/todo/' + this.props.params._id, obj)
            .then(res => console.log(res.data));
        this.setState({
            Item: ''
        })
        this.props.navigate('/')
    }

    render() {
        // const check = 
        console.log(this.state.TypeItem)
        return (
            <div className='Container'>
                <h3 align="center">ID:{this.props.params._id}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Item}
                            onChange={this.onChangeItem}
                            placeholder="Item"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group"> <input class="form-check-input" type="checkbox" id="flexCheckChecked" value={this.state.TypeItem} checked={this.state.TypeItem} onChange={this.onChangeTypeItem} /><label>Premium</label> </div>
                    </div>
                    <div className="form-group">
                         <div className="form-group"><input class="form-check-input" type="radio" name="flexRadioDefault" value={this.state.TypeItem} id="flexRadioDefault2" checked={this.state.Radio} onChange={this.onChangeRadio} /><label>Gold</label></div>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(UpdateData)

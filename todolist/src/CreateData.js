import React, { Component } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
function withRouter(Component) {
    function TodoList(props) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate}/>;
    }
    return TodoList;
}
class CreateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Item: "",
            TypeItem: "",
            Radio: ""
        }

        this.handleItem = this.handleItem.bind(this)
        this.handleTypeItem = this.handleTypeItem.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleItem(e) {
        this.setState({
            Item: e.target.value
        })
    }
    handleTypeItem(e) {
        this.setState(() => ({
            TypeItem: e.target.value
          }));
    }
    handleRadio(e) {
        this.setState(() => ({
            Radio: e.target.value
          }));
    }
    onSubmit(e) {
        e.preventDefault()
        const DataPost = {
            Item: this.state.Item,
            TypeItem: this.state.TypeItem,
            Radio: this.state.Radio
        }
        axios.post("http://localhost:8080/api/todo", DataPost).then(res => {
            console.log(res)
        })
        this.props.navigate('/')
    }
    render() {
        return (
            <div className='Container' style={{marginTop:'2rem'}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" onChange={this.handleItem} />
                    </div>
                    <div className="form-group">  
                    <input class="form-check-input" type="checkbox" value="Premium" id="flexCheckDefault" onChange={this.handleTypeItem} />
                    <label>Premium</label>
                    </div>
                    <div className="form-group">
                        
                    <input class="form-check-input" type="radio" value="Gold" name="flexRadioDefault" id="flexRadioDefault1" onChange={this.handleRadio}/>
                    <label>Gold</label>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Post"
                            className="btn btn-primary" />

                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(CreateData)
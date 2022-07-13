import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetBySubmit from './GetBySubmit';
function GetData() {
    const [Data, setData] = useState([]);
        useEffect(() => {
            axios
                .get("http://localhost:8080/api/todo")
                .then((response) => {
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, []);
        return (
            <div className='App'>
                <div className='tableSub'>
                    <GetBySubmit/>
                </div>
                <div className='table'>
                    <div className='header_table'>
                        <Link to='/'><h5>ListItem</h5></Link>

                        <Link to='/Create'><h5>Create</h5></Link>
                    </div>
                    {Data.map((getData) => (
                        <div className='Item_table_list' key={getData._id}>
                            <h5>{getData.Item}</h5>
                            <Link to={"/Update/" + getData._id} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-danger" onClick={() => deleteRequestHandler(getData._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
export default GetData

const deleteRequestHandler = async (_id) => {
    axios.delete(
      `http://localhost:8080/api/todo/${_id}`
      
    );
    window.location.reload(true);
  };
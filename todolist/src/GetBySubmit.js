import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function GetBySubmit() {
    const [SearchBySub, setSearchBySub] = useState([])
    const [SubName, setSubName] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8080/api/todo").then(res => {
            // console.log(res.data)
            setSearchBySub(res.data)
        })
    }, [])

    const handItemName = e => {
        setSubName(e.target.value)
    }
    const values = Object.values(SearchBySub)
    const Filter = values.filter((element, e) => {
        return element.Item == SubName
    })
    const ChilFil = Filter.map((ele) => {
        return (
            <div key={ele._id}>
                <h5>{ele.Item}</h5>
                <h5>{ele._id}</h5>
            </div>
        )
    })
    console.log(Filter)
    return (
        <div className='Container' style={{ marginTop: '2rem' }}>
            <h3 style={{color:'white'}}>Tự lọc dữ liệu khi bạn nhập </h3>
            <form>
                <div className="form-group x">
                    <input className="form-control" type="text" value={SubName} onChange={handItemName} />
                </div>

                <div>{ChilFil}</div>

            </form>
        </div>
    )

}

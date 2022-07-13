import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function GetBySubmit() {
    const [SearchBySub, setSearchBySub] = useState([])
    const [SubName, setSubName] = useState("")
    const [SubCheck, setSubCheck] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/api/todo").then(res => {
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
    const FilterList = Filter.map((element) => {
        return element.Item
    })
    const FilterCheck = values.filter((element) => {
        return (element.Radio == SubCheck , element.Item == SubName)
    })
    const ChilFilCheck = FilterCheck.map((ele) => {
        if(FilterList[0] == ele.Item || FilterCheck == ele.Radio){
            return (
                <div>
                    <div key={ele._id}>
                        <h5>{ele.Item}</h5>
                        <h5>{ele._id}</h5>
                    </div>
                </div>
            )
        }else if ( FilterCheck == ele.Radio){
            return (
                <div key={ele._id}>
                    <h5>{ele.Item}</h5>
                    <h5>{ele._id}</h5>
                </div>
        )
        }else{
            return null
        }
    })

    console.log(ChilFilCheck)
    return (
        <div className='Container' style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'white' }}>Tự lọc dữ liệu khi bạn nhập </h3>
            <form>
                <div className="form-group x">
                    <input className="form-control" type="text" value={SubName} onChange={handItemName} />
                </div>
                <div className="form-group"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => setSubCheck(prevCount => !prevCount)} /><label>Gold</label> </div>
               <div>
                <div className='ChilFilCheck'>{ChilFilCheck}</div>
               </div>
            </form>
        </div>
    )
}

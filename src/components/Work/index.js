import React, { useState , useEffect } from "react"
import './style.css'
import axios from 'axios'


function Work() {

    var [work, setWork] = useState([])

    
    useEffect(() => {
        axios.get('js/data.json').then((res) => {
            setWork(res.data.works)
        })
    }, [])

    var content = work.map(e => {
        if (e.id === 1) {
            return (
                <div className="part first" key={e.id}>
                    <i className={e.icon_name}></i>
                    <h4 className="part-title">{e.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        {e.body}
                    </p>
                </div>
            )
        }else if (e.id === 2) {
            return (
                <div className="part" key={e.id}>
                    <i className={e.icon_name}></i>
                    <h4 className="part-title">{e.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        {e.body}
                    </p>
                </div>
            )
        }else {
            return (
                <div className="part last" key={e.id}>
                    <i className={e.icon_name}></i>
                    <h4 className="part-title">{e.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        {e.body}
                    </p>
                </div>
            )
        }
    })



    return (
        <div className="work">
            <div className="container">
                <h2 className="work-title"><span>My</span> Work</h2>
                
                {content}
                
            </div>
        </div>
    )
}

export default Work
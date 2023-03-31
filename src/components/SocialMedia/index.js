import React, {useState, useEffect} from "react"
import axios from 'axios'
import './style.css'

function SocialMedia() {

    var [haaland, houwari] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => {
            houwari(res.data.social)
        })
    }, [])

    var content = haaland.map(e => {
        return (
            <div className={e.id === 1 ? 'social face' : e.id === 2 ? 'social twitter' : 'social pin'} key={e.id}>
            <i className={e.icon}></i>
            <p>
                <span className="info1">{e.title}</span>
                <span className="info2">{e.body}</span>
            </p>
        </div>
        )
    })

    return (
        <div className="social-media">
            
        {content}
        
    </div>
    
    )
}

export default SocialMedia
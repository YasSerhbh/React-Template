import React, { useState, useEffect } from "react"
import './style.css'
import axios from 'axios'

function Portfolio() {

    var [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setPortfolio(res.data.portfolio)
        })
    }, [])

    var content = portfolio.map(e => {
        return (
            <div key={e.id}>
                    <img src={e.image} alt="" />
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
        )
    })

    return (
        <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
                
                {content}
                
            </div>
            
        </div>
    )
}

export default Portfolio
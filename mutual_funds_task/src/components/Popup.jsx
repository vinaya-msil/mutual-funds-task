import React from "react";
import "./Popup.css"
export default function Popup(){
    
    return (
        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <div className="filter-popup">
                            <h5>Date</h5>
                            <p>Date From</p><input type="date"></input>
                            <p>Date To</p><input type="date"></input>
                            <h5>Status</h5>
                            <input id="Completed" type="checkbox" />
                            <label for="Completed">Completed</label>

                            <input id="Inprogress" type="checkbox" />
                            <label for="Inprogress">Inprogress</label>

                            <input id="Failed" type="checkbox" />
                            <label for="Failed">Failed</label>
                            <br/>
                            <button>Close</button>
                    </div>
                </div>

            </div>
        </>
    )
}
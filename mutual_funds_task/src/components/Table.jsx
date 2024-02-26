import React from "react";

export default function Table(){
    return(
        <>
            {/* Table Here */}
            <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Fund Name</th>
                                <th>Client Code</th>
                                <th>Order Date</th>
                                <th>Order Type</th>
                                <th>Amount</th>
                                <th>FreshOrder / Investment</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"   />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"   />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"   />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"   />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"  />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
        </>
    )
}
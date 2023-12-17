import React from 'react'
import '../../css/loading.css'
export default function Loading() {
    return (
        <div className='d-flex align-items-center' style={{ width: "100%", height: "300px" }}>
            <div className="loader container"></div>
        </div>
    )
}

import React from 'react'

const Loader = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
            <h4 className='ms-2'>Loading...</h4>
        </div>
    )
}

export default Loader
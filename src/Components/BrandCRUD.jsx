import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Loader from './Loader';

const BrandCRUD = () => {

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);
    const [brandsData, setBrandsData] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    console.log({ brandsData })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoader(true);
        try {
            fetch('http://localhost:3005/getallbrands')
                .then(res => res.json())
                .then(data => {
                    data && data?.length === 0 && setEmpty(true)
                    setBrandsData(data);
                    setLoader(false);
                }).catch((err)=>{
                    setError(err)
                    setLoader(false);
                })
        } catch (err) {
            setLoader(false);
            console.log(err);
        }
    };
    return (
        <div>
           
            <div>
                <h3 className='text-center my-2'>Welcome to BRANDS</h3>
            </div>

            {
                loader && <Loader />
            }

            <Button size='large' onClick={() => modalToggle()}>Open</Button>
            <div className='d-flex justify-content-around'>
                {
                    brandsData && brandsData?.length > 0 && brandsData?.map((brand, index) => (
                        <div className="card">
                            <div className="card-header">
                                <h4>Brand name : {brand?.brandName}</h4>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Vendor name : {brand?.vendor_name}</h5>
                                <p className="card-text">Phone : {brand?.vendor_phone}</p>
                                <a href="#" className="btn btn-sm btn-primary me-2">Edit</a>
                                <a href="#" className="btn btn-sm btn-danger">Delete</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                empty && <h2 className='text-center mt-4'>Empty BRANDS</h2>
            }
            {
                error && <h2 className='text-center text-danger mt-4'>Something Wrong with server</h2>
            }

            <Modal
                size="lg"
                isOpen={modal}
                toggle={() => {
                    modalToggle()
                }}
            >
                <ModalHeader>Add Brand</ModalHeader>
                <ModalBody></ModalBody>
                <ModalFooter>
                    <button
                        className="btn-danger btn"
                        onClick={() => modalToggle()}
                    >
                        Cancel
                    </button>
                </ModalFooter>{" "}
            </Modal>
        </div>
    )
}

export default BrandCRUD
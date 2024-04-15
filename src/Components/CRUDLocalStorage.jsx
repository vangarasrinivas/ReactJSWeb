import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const CRUDLocalStorage = () => {
    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    const initial = {
        name: '',
        age: '',
        phone: '',
        qualification: '',
        notes: ''
    }


    const [details, setDetails] = useState(initial)
    console.log(details['name'])
    const [storedData, setStoredData] = useState([])
    console.log({storedData})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const storedData = JSON.parse(localStorage.getItem('data')) || []
        setStoredData(storedData)
    }

    const submitData = () => {
        const info = JSON.stringify([...storedData, details])
        localStorage.setItem('data', info)
        fetchData()
    }
    const onEdit = (index) => {
        console.log({ index })
        const editInfo = storedData?.find((v, i) => i === index)
        setDetails(editInfo)
        modalToggle()
        fetchData()

    }
    const onUpdate=()=>{

    }

    const onDelete = (index) => {
        console.log({index})
        const deleteInfo = storedData?.filter((v, i) => i !== index)
        console.log({deleteInfo})
        localStorage.setItem('data', JSON.stringify(deleteInfo))
        fetchData()

    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3 className=''>CRUD Local Storage</h3>
                </div>
                <div>
                    <button className='btn btn-primary btn-sm' onClick={modalToggle}>Add</button>
                </div>
            </div>
            <div>

                <table className='table text-center'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone no</th>
                            <th>Qualification</th>
                            <th>Notes</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storedData?.length > 0 ? storedData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item?.name}</td>
                                        <td>{item?.age}</td>
                                        <td>{item?.phone}</td>
                                        <td>{item?.qualification}</td>
                                        <td>{item?.notes}</td>
                                        <td>
                                            <button className='btn btn-warning btn-sm me-2 text-white' onClick={() => onEdit(index)}>Edit</button>
                                            <button className='btn btn-danger btn-sm' onClick={() => onDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }) : (
                                <tr>
                                    <td colSpan={6}><h5>No Records</h5></td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>

            </div>

            <Modal
                size="md"
                isOpen={modal}
                toggle={() => {
                    modalToggle()
                    setDetails(initial)
                }}
                scrollable
            >
                <ModalHeader>Add Details</ModalHeader>
                <ModalBody>
                    <div className='mb-2'>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={details?.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" value={details?.age} onChange={(e) => setDetails({ ...details, age: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label className="form-label">Phone no</label>
                        <input type="number" className="form-control" value={details?.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label className="form-label">Qualification</label>
                        <input type="text" className="form-control" value={details?.qualification} onChange={(e) => setDetails({ ...details, qualification: e.target.value })} />
                    </div>
                    <div>
                        <label className="form-label">Notes</label>
                        <textarea className="form-control" value={details?.notes} onChange={(e) => setDetails({ ...details, notes: e.target.value })} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        className="btn-danger btn"
                        onClick={() => {
                            modalToggle()
                            setDetails(initial)
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn-primary btn"
                        onClick={() => {
                            submitData()
                            modalToggle()
                        }}
                    >
                        Add
                    </button>
                </ModalFooter>{" "}
            </Modal>
        </>
    )
}

export default CRUDLocalStorage
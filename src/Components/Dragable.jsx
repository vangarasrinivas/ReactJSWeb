import React, { useState } from 'react'

const Dragable = () => {
    const [draggedData, setDraggedData] = useState([]);
    const [dropHover, setDropHover] = useState(false);
    const [data, setData] = useState([
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
    ]);
    console.log({ dropHover });
    let dragged = null;

    const startDrag = (dataItem, i) => {
        // e.dataTransfer.setData();

        dragged = { data: dataItem, index: i };
    };

    const onDrop = (e) => {
        e.preventDefault();

        if (e.target.className === "dropzone") {
            setData(data.toSpliced(dragged.index, 1));
            setDraggedData((prev) => [...prev, dragged.data]);
        }
    };
    return (
        <>
           
            <div style={{ textAlign: "center" }}>
                {data.map((item, i) => (
                    <p key={item + i} draggable onDragStart={() => startDrag(item, i)}>
                        {item}
                    </p>
                ))}

                {/* Droppable Area */}

                <div
                    className="dropzone"
                    style={{
                        border: "1px solid green",
                        // minHeight: 100,
                        padding: 10,
                        marginTop: 10,
                    }}
                    
                    onDrop={onDrop}
                    onDragOver={(e) => {
                        e.preventDefault();
                        // setDropHover(true);
                    }}
                >
                    {draggedData.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dragable
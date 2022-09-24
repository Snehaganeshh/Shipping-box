import React,{ useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
  const[items,setItems] = useState([]);

  const addToList =(item) => {
    console.log(item);
    const itemsCopy = [...items];
    itemsCopy.push(item)
    setItems(itemsCopy);
  }
    return (
    <div>
        <ShippingForm addToListCallback={(value) => addToList(value)} />
        <table>
            <thead>
                <th>Item Name</th>
                <th>Item Weight</th>
                <th>Item Color</th>
                <th>Shipping Place</th>
            </thead>
            <tbody>
             {
                items.map((item) => {
                    return (
                        <tr key={item.itemname}>
                            <td>{item.itemname}</td>
                            <td>{item.itemweight}</td>
                            
                            <td>
                                <div style={{
                                    backgroundcolor: item.itemcolor,
                                    alignContent: 'center',
                                    width: '60px',
                                    height: '30px'
                                }}>
                                    </div>
                            </td>
                            <td>{item.itemplace}</td>

                        </tr>
                    )
                })
             }   
            </tbody>

        </table>

    </div>
    );
  
}

export default ShippingList
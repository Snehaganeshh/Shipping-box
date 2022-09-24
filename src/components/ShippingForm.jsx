 import React,{ useState } from 'react'


// function ShippingForm() {
//   return (
//     <div>
//         <form>
//             <h3>Shipping Form</h3>
//             <input type="text" placeholder='Title'/>
//             <input type="number" placeholder='Weight'/>
//             <label>Color</label>
//             <input type="color" />
//             <input type="text" placeholder='Place'/>
//         </form>

//     </div>
//   )
// }


//                         OR

function ShippingForm(props) {

    const [itemname,setName]= useState('');
    const [itemweight,setWeight]= useState('')
    const [itemcolor,setColor]= useState('')
    const [itemplace,setPlace]= useState('')
    
    const handleSubmit =(e) => {
        e.preventDefault();
       const data ={itemname:itemname,
                    itemweight:itemweight,
                    itemcolor: itemcolor,
                    itemplace:itemplace
                   
                }
                props.addToListCallback(data)
    }
  return (
    <div> <h2>Shipping Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={itemname} 
            placeholder="Item name" onChange={(e) => setName(e.target.value)}/><br></br><br></br>
        
            <input type="number" value={itemweight}
            placeholder="Item weight" onChange={(e) => setWeight(e.target.value)}/><br></br><br></br>
            <label>Color</label>
            <br></br>
            <input type="color" value={itemcolor} 
            placeholder="Item color" onChange={(e) => setColor(e.target.value)}/><br></br><br></br>

            <input type="place" value={itemplace}
            placeholder="Item place" onChange={(e) => setPlace(e.target.value)}/><br></br><br></br>
           
           <button type="submit">Submit</button>
            
           
          </form>
          </div>
  )
}

export default ShippingForm
import React,{useState,useEffect,useReducer} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Cart() {
  const [cart,setCart]=useState([])
  const [qty,dispatch]=useReducer(reducer,0)
  function reducer(qty,action) 
  {
    switch (action.type) {
      case 'changeqty':
        return (cart.filter((c)=>{
          c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
        }))
        
        
    
      default:
        return qty
    }
    
  }
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCart(res2)
      })
    })
  },[])

  function gettotal()
  {
    let total=0
    cart.map((c)=>{
      total=total+(c.qty*c.price)
    })
    return total

  }

  function delitem(id)
  {
    fetch(`http://localhost:3000/cart/${id}`,{
      method:"delete"
    }).then((res1)=>{
      res1.json().then((res2)=>{
       console.log(res2);
       
      })
    })
    window.location.reload()  //do not use thiss we are using beacuse od api (use redux)
  }

  return (
    <div>
        <table className="table" >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>BUTTON</th>
            </tr>
          </thead>

          <tbody>
            {
           cart.map((item,index)=>{
               return(
                <tr key={index} >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td> <img src={item.image} height={120} width={80} /></td>
                <td>{item.qty*item.price}</td>
               <td>
               <Form.Select aria-label="Default select example"
                 onChange={(e)=>dispatch({
                  type: 'changeqty',
                  payload:{                          // its's just a variable payload
                    id:item.id,
                    qty:e.target.value
                  }
                 })}
               >
                {
                  [...Array(item.stock).keys()].map((q)=>{
                    return(
                      <option  key={q+1} > {q+1}</option>
                    )
                  })
                }
    
    
    </Form.Select>
               </td>
    <td><i className="fa-solid fa-trash fs-5 " onClick={()=>delitem(item.id)}></i></td>
                </tr>
               )     
           })
           }
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={2} >Total Cart Item: {cart.length} Items</td>
              <td colSpan={2} >Total Cost Item: $ {gettotal()}</td>
            </tr>
          </tfoot>

        </table>
    </div>
  )
}

export default Cart
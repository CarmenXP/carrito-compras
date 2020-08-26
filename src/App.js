import React, {useState} from 'react';
import Cart from './components/cart/Cart'


function App() {

  let [state, setState] = useState({
    show: true
  })

  function toggleShow(){
    setState({...state, show: !state.show})
  }

  return (
    <div >
      <button onClick={toggleShow}>
      Carrito de compras
      </button>
      
      <Cart 
      onCancel={toggleShow}
      show={state.show}/>
      
    </div>
  );
}

export default App;

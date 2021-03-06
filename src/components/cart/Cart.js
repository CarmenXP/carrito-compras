import React, {Fragment} from 'react'
import styles from './cart.module.css'
import CartRow from './CartRow'

export default function Cart({show=false, onCancel}){
    return(
        <Fragment>
            <div 
            onClick={onCancel}
            className={
                styles.cartOverlay}></div>
            <div className={
                show ? styles.cartHolder :
                `${styles.cartOverlay} ${styles.hidden}`}>
                 <CartRow/>  
            </div>  

        </Fragment>

    )

}
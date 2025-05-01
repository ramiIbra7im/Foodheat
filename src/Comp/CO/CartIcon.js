import { BiCart } from 'react-icons/bi';
import { useCart } from '../CO/CartContext';
import '../Style/CartContext.css';

function CartIcon() {
    const { cartItems } = useCart();

    return (
        <div className="cart-container position-relative">
            <BiCart className="fs-2 text-secondary p-1 me-2 cart-icon" />
            {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
            )}

            <div className="cart-dropdown">
                {cartItems.length === 0 ? (
                    <p className="text-muted">No orders yet</p>
                ) : (
                    cartItems.map((item, i) => (
                        <div key={i} className="cart-item">
                            {item.name} × {item.qty}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CartIcon;

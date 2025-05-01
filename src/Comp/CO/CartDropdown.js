import { useCart } from './CartContext';
import { FaTrash } from 'react-icons/fa';

function CartDropdown({ show }) {
    const { cartItems, removeFromCart } = useCart();

    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return total + price * item.quantity;  // ضرب السعر في الكمية هنا
    }, 0);

    if (!show) return null;

    return (
        <div
            className="dropdown-menu show  p-3 shadow rounded"
            style={{
                position: 'absolute',
                top: '100%',
                right: "-180%",
                minWidth: '400px',
                maxHeight:'600px',
                zIndex: 1000,
                    overflowY: 'auto',   // إضافة شريط تمرير عمودي إذا كانت المحتويات أكثر من الحد المحدد

            }}
        >
            <h6 className="fw-bold mb-2">Order Cart</h6>

            {cartItems.length === 0 ? (
                <p className="text-muted mb-0">Cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="d-flex  justify-content-between align-items-center mb-2 border-bottom pb-2"
                        >
                            <div className='col'>
                                <img src={item.image} className='p-2'
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}  // تحديد حجم ثابت للصورة

                                    alt='' />
                                <span className="fw-bold">{item.title}</span>
                                <br />
                                <small className="text-muted m-auto">{item.quantity} x {item.price}</small>
                            </div>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="d-flex justify-content-between fw-bold pt-2">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    {/* Checkout */}
                    <button className="btn btn-success w-100 mt-3">Checkout</button>
                </>
            )}
        </div>
    );
}

export default CartDropdown;

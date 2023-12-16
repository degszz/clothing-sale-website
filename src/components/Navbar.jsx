import { useAuth0 } from "@auth0/auth0-react";
import { Button, Stack, Tooltip, OverlayTrigger, NavDropdown, Navbar, Container } from 'react-bootstrap';
import imagenes from '../assets/imagenes'
import { useState } from 'react';

export const NavScrollExample = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    /* CARRITO */
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };
    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };
    /* AUTH0 */
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();
    /* OVERLAY */
    const renderToolTip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            the best clothes
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='HOME'>
            <Container>
                <Stack direction="horizontal" style={{ width: '100%' }}>
                    <div className="p-2">
                        <div className='d-flex align-items-end'>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 10, hide: 1 }}
                                overlay={renderToolTip}
                            >
                                <Navbar.Brand style={{ cursor: 'pointer' }}>Clothing Logo</Navbar.Brand>
                            </OverlayTrigger>
                            <NavDropdown className='navDropdown' style={{ fontSize: '22px' }} title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#SHIRT">
                                    Clothes for Sale
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#CONTACT">
                                    Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className="p-2 ms-auto">
                        <div className='container-icon' style={{ marginRight: '1em' }}>
                            <div
                                id='CART'
                                className='container-cart-icon'
                                onClick={() => setActive(!active)}
                            >
                                <img src={imagenes.carrito} alt="" />
                                <div className='count-products'>
                                    <span id='contador-productos'>{countProducts}</span>
                                </div>
                            </div>

                            <div
                                className={`container-cart-products ${active ? '' : 'hidden-cart'
                                    }`}
                            >
                                {allProducts.length ? (
                                    <>
                                        <div className='row-product' >
                                            {allProducts.map(product => (
                                                <div className='cart-product' key={product.id}>
                                                    <div className='info-cart-product'>
                                                        <span className='cantidad-producto-carrito'>
                                                            {product.quantity}
                                                        </span>
                                                        <p className='titulo-producto-carrito'>
                                                            {product.nameProduct}
                                                        </p>
                                                        <span className='precio-producto-carrito'>
                                                            ${product.price}
                                                        </span>
                                                    </div>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        strokeWidth='1.5'
                                                        stroke='currentColor'
                                                        className='icon-close'
                                                        onClick={() => onDeleteProduct(product)}
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            d='M6 18L18 6M6 6l12 12'
                                                        />
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>

                                        <div className='cart-total'>
                                            <h3>Total:</h3>
                                            <span className='total-pagar'>${total}</span>
                                        </div>

                                        <button className='btn-clear-all' onClick={onCleanCart}>
                                            Vaciar Carrito
                                        </button>
                                    </>
                                ) : (
                                    <p className='cart-empty'>El carrito está vacío</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        {isAuthenticated ?
                            <Button variant="outline-secondary" onClick={() => logout()}>Logout</Button>
                            :
                            <Button variant="secondary" onClick={() => loginWithRedirect()}>Log In</Button>}
                    </div>
                </Stack>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

import { data } from '../data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Buy
		</Tooltip>
	);

	return (
		<div className='container-items'>
			{data.map(product => (
				<Card key={product.id} style={{ width: '100%' }}>
					<Card.Img variant="top" src={product.img} alt={product.nameProduct} className='cloths' />
					<Card.Body>
						<Card.Title>{product.nameProduct}</Card.Title>
						<Card.Text>
							${product.price}
						</Card.Text>
						<OverlayTrigger
							placement="left"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}
						>
							<Button variant="outline-dark" onClick={() => onAddProduct(product)} href='#HOME'>Add to Cart</Button>
						</OverlayTrigger>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

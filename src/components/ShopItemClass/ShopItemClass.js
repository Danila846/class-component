import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	brand: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	descriptionFull: PropTypes.string,
	price: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired
}

const defaultProps = {
	brand: 'Lorem',
	title: 'New goods',
	description: 'The product description is being edited',
	descriptionFull: ''
}

class ShopItemClass extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>{this.props.brand}</h2>
				<h1>{this.props.title}</h1>
				<h3>{this.props.description}</h3>
				<div className="description">
					{this.props.descriptionFull}
				</div>
				<div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">{this.props.currency}{this.props.price}</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		)
	}
}

ShopItemClass.propTypes = propTypes;
ShopItemClass.defaultProps = defaultProps;

export default ShopItemClass;
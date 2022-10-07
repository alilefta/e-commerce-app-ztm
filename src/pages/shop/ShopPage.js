import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
const ShopPage = () => {
	let [collections, setCollections] = useState(SHOP_DATA);
	console.log(collections);
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;

export interface NavLink {
	text: string;
	path: string;
}

export interface Sneaker {
	id: number;
	brand: string;
	fullName: string;
	name: string;
	type: string;
	price: number;
	image: string;
	images: string[];
	season: string[];
	info: string;
	productCode: string;
	styleColor: string;
	slug: string;
}

export interface ProductCard {
	id: number;
	fullName: string;
	price: number;
	image: string;
	slug: string;
}

export interface ShoppingBagItem {
	productId: string;
	quantity: number;
}

export interface ShoppingBagState {
	items: ShoppingBagItem[];
	notification: boolean;
}

export interface ProductDetails {
	slug: string;
	image: string;
	images: string[];
	brand: string;
	name: string;
	type: string;
	price: number;
	info: string;
	season?: string[]|null;
	productCode: string;
}

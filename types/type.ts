import type {ComponentType, ReactNode} from 'react';

export type IconComponent = ComponentType<{className?: string}>;

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
	addToBagNotification: boolean;
	deleteFromBagNotification: boolean;
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

export interface MembershipBenefit {
	Icon: IconComponent;
	title: string;
	text: string;
}

export interface OneBenefitProps {
	Icon: IconComponent;
	title: string;
	text: string;
	isVip?: boolean;
}

export interface BagItemProps {
	item: ShoppingBagItem;
	sneaker: Sneaker;
	onDecrease: () => void;
	onIncrease: () => void;
	onDelete: () => void;
}

export interface ProductPageProps {
	params: {
		slug: string;
	};
}

export interface RootLayoutProps {
	children: ReactNode;
}

export interface HomeFeatureCard {
	title: string;
	text: string;
	icon: IconComponent;
}

export interface HomeStat {
	value: string;
	label: string;
}

export interface HeaderContent {
	addToBagNotification: string;
	logo: string;
	logoDot: string;
	openMenuAria: string;
}

export interface AppMetaContent {
	lang: string;
	title: string;
	description: string;
}

export interface ProductCardContent {
	currencySuffix: string;
}

export interface BagItemContent {
	currencySuffix: string;
	decreaseAria: string;
	increaseAria: string;
	deleteAria: string;
}

export interface MembershipPageContent {
	clubTitle: string;
	vipTitle: string;
	vipSubtitle: string;
	registerButton: string;
}

export interface ProductsPageContent {
	searchPlaceholder: string;
}

export interface ProductDetailsContent {
	loading: string;
	backToProducts: string;
	seasonLabel: string;
	seasonUnknown: string;
	productCodeLabel: string;
	addToBag: string;
	currencySuffix: string;
}

export interface ShoppingBagContent {
	deleteFromBagNotification: string;
	back: string;
	title: string;
	loading: string;
	empty: string;
	totalPrice: string;
	currencySuffix: string;
}

export interface HomeContent {
	featureCards: HomeFeatureCard[];
	stats: HomeStat[];
	heroBadge: string;
	heroTitle: string;
	heroDescription: string;
	heroProductsButton: string;
	heroMembershipButton: string;
	dropBadge: string;
	dropTitle: string;
	dropDescription: string;
	mostWantedLabel: string;
	mostWantedBrands: string;
	topModelsButton: string;
	whyUsTitle: string;
	membershipLabel: string;
	membershipTitle: string;
	membershipButton: string;
}

export interface MemberContent {
	page: MembershipPageContent;
	benefitsClub: MembershipBenefit[];
	benefitsVip: MembershipBenefit[];
}

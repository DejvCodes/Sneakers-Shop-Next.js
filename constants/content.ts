import {FaRegTrashAlt} from 'react-icons/fa';
import {FaArrowLeftLong} from 'react-icons/fa6';
import {CiSquareMinus, CiSquarePlus} from 'react-icons/ci';
import {LuSearch, LuShoppingBag} from 'react-icons/lu';
import {
	PiFireSimpleLight,
	PiGiftLight,
	PiHeartStraightLight,
	PiMoneyLight,
	PiPercentLight,
	PiShieldCheckLight,
	PiSneakerThin,
	PiStarFourLight,
	PiTimerLight,
	PiTruckLight,
} from 'react-icons/pi';
import type {
	BagItemContent,
	AppMetaContent,
	HeaderContent,
	HomeContent,
	MemberContent,
	MembershipPageContent,
	NavLink,
	NotFoundContent,
	LoadingContent,
	ProductCardContent,
	ProductDetailsContent,
	ProductsPageContent,
	ShoppingBagContent,
	FooterContent,
} from '@/types/type';

export const NAV_LINKS: NavLink[] = [
	{text: 'Domů', path: '/'},
	{text: 'Produkty', path: '/products'},
	{text: 'Členství', path: '/membership'},
];

export const ICONS = {
	bag: LuShoppingBag,
	search: LuSearch,
	back: FaArrowLeftLong,
	trash: FaRegTrashAlt,
	minus: CiSquareMinus,
	plus: CiSquarePlus,
	fire: PiFireSimpleLight,
	star: PiStarFourLight,
	shield: PiShieldCheckLight,
	sneaker: PiSneakerThin,
	truck: PiTruckLight,
	gift: PiGiftLight,
	heart: PiHeartStraightLight,
	money: PiMoneyLight,
	percent: PiPercentLight,
	timer: PiTimerLight,
} as const;

export const HEADER_CONTENT: HeaderContent = {
	addToBagNotification: 'Přidáno do košíku',
	logo: 'sneakers',
	logoDot: '.',
	openMenuAria: 'Otevřít menu',
};

export const APP_META_CONTENT: AppMetaContent = {
	lang: 'cz',
	title: 'Sneakers Shop',
	description: 'Your one-stop shop for the latest and greatest sneakers.',
};

export const PRODUCT_CARD_CONTENT: ProductCardContent = {
	currencySuffix: 'Kč',
};

export const BAG_ITEM_CONTENT: BagItemContent = {
	currencySuffix: 'Kč',
	decreaseAria: 'Snížit množství',
	increaseAria: 'Zvýšit množství',
	deleteAria: 'Odstranit produkt',
};

export const MEMBERSHIP_PAGE_CONTENT: MembershipPageContent = {
	clubTitle: 'Všechny výhody sneakers clubu',
	vipTitle: 'Staň se VIP členem Sneakers Club',
	vipSubtitle: 'Exkluzivní výhody VIP členství Sneakers Club',
	registerButton: 'Zaregistrovat se',
};

export const PRODUCTS_PAGE_CONTENT: ProductsPageContent = {
	searchPlaceholder: 'Vyhledat produkt ...',
};

export const PRODUCT_DETAILS_CONTENT: ProductDetailsContent = {
	loading: 'Načítání...',
	backToProducts: 'Zpět na produkty',
	seasonLabel: 'Sezóna:',
	seasonUnknown: 'Neznámá informace',
	productCodeLabel: 'Kód produktu:',
	addToBag: 'Přidat do košíku',
	currencySuffix: 'Kč',
};

export const SHOPPING_BAG_CONTENT: ShoppingBagContent = {
	deleteFromBagNotification: 'Odstraněno z košíku',
	back: 'Zpět',
	title: 'Nákupní košík',
	loading: 'Načítání...',
	empty: 'Váš košík je prázdný',
	totalPrice: 'Celková cena:',
	currencySuffix: 'Kč',
};

export const FOOTER_CONTENT: FooterContent = {
	copyrightLabel: 'Sneakers Shop',
	productsLink: 'Produkty',
	membershipLink: 'Členství',
};

export const LOADING_CONTENT: LoadingContent = {
	label: 'Načítání...',
};

export const NOT_FOUND_CONTENT: NotFoundContent = {
	code: 'Chyba 404',
	title: 'Stránka nenalezena',
	description: 'Tahle stránka neexistuje nebo byla přesunuta.',
	backHome: 'Zpět domů',
	toProducts: 'Přejít na produkty',
};

export const HOME_CONTENT: HomeContent = {
	featureCards: [
		{
			title: 'Nové kolekce',
			text: 'Každý týden přidáváme čerstvé modely a nejžádanější siluety.',
			icon: ICONS.sneaker,
		},
		{
			title: 'Rychlá doprava',
			text: 'Objednávky expedujeme rychle, abys měl svůj nový pár co nejdřív doma.',
			icon: ICONS.truck,
		},
		{
			title: 'Club výhody',
			text: 'Registruj se a získej slevy, wishlist i další bonusy v rámci členství.',
			icon: ICONS.shield,
		},
	],
	stats: [
		{value: '300+', label: 'Modelů skladem'},
		{value: '24h', label: 'Rychlé odeslání'},
		{value: 'VIP', label: 'Club výhody'},
	],
	heroBadge: 'Sneakers shop',
	heroTitle: 'Tenisky, které sednou tvému stylu.',
	heroDescription:
		'Objev nejnovější modely, limitované dropy a členství s výhodami. Vyber si pár, který z tebe udělá střed pozornosti.',
	heroProductsButton: 'Přejít na produkty',
	heroMembershipButton: 'Výhody členství',
	dropBadge: 'Drop týdne',
	dropTitle: 'Městský výkon, čistý styl.',
	dropDescription:
		'Vybrali jsme top páry, které teď nejvíc jedou. Sleduj novinky a ulov limitky dřív, než zmizí.',
	mostWantedLabel: 'Nejvíc žádané',
	mostWantedBrands: 'Nike • New Balance • Asics',
	topModelsButton: 'Zobrazit top modely',
	whyUsTitle: 'Proč nakupovat u nás',
	membershipLabel: 'Membership',
	membershipTitle: 'Odemkni VIP výhody a exkluzivní nabídky.',
	membershipButton: 'Prozkoumat členství',
};

export const MEMBER_CONTENT: MemberContent = {
	page: MEMBERSHIP_PAGE_CONTENT,
	benefitsClub: [
		{
			Icon: ICONS.money,
			title: '200 Kč za registraci',
			text: 'Vážně, stačí se jenom registrovat, nic víc. Voucher na slevu 200 Kč dostaneš jako dárek. Můžeš ho pak uplatnit na jakýkoliv nákup nad 3 000 Kč.',
		},
		{
			Icon: ICONS.percent,
			title: '5 % z dostaneš zpátky',
			text: 'Každá objednávka se vyplatí, protože z každé objednávky ti ve formě voucheru vrátíme 5 % na tu další. Mimochodem, tohle můžeš opakovat dokola a dokola... Jen nezapomeň, že voucher může tvořit maximálně 30 % z celkové ceny tvé objednávky.',
		},
		{
			Icon: ICONS.heart,
			title: 'Tvůj vlastní wishlist',
			text: 'Když se ti něco líbí, ale zrovna není nejvhodnější doba na pořízení, uložíš si to do wishlistu. Ten pak můžeš sdílet jako tip na dárky pro tebe nebo si v něm vytvářet nekonečný seznam inspirace.',
		},
		{
			Icon: ICONS.sneaker,
			title: '2x větší šance v rafflu',
			text: 'Vyhrát v rafflu svoje vysněné tenisky, to chce hodně pevných nervů. Jako člen Footshop Club jich můžeš spoustu ušetřit, protože tvoje šance na ukořistění páru z naší platformy Releases bude za jednu registraci dvojnásobná.',
		},
		{
			Icon: ICONS.timer,
			title: 'O slevách víš jako první',
			text: 'Součástí registrace je také odběr newsletteru. Tohle nebude další zbytečný spam ve tvém inboxu, ale pravidelný přísun novinek a zajímavostí ze světa streetwearu. Navíc se jako první dozvíš o našich slevách a akcích.',
		},
		{
			Icon: ICONS.gift,
			title: 'Narozeninový dárek',
			text: 'Překvápko pro oslavence? Tvoje narozky prostě podceňovat nemůžeme. Každý rok se proto budeš moct těšit na velký dárek od Footshopu! Doručíme ho emailem a věř mi, určitě ti to pomůže oslavit tvůj den ještě o něco výživněji.',
		},
	],
	benefitsVip: [
		{
			Icon: ICONS.truck,
			title: 'Doprava zdarma',
			text: 'Celý rok ti budeme objednávky doručovat úplně zdarma.',
		},
		{
			Icon: ICONS.sneaker,
			title: '10x větší šance v rafflu',
			text: 'Desetkrát. Tolikrát se zvýší tvoje šance vyhrát v rafflu kterékoliv vysněné tenisky.',
		},
		{
			Icon: ICONS.gift,
			title: 'Velký narozeninový dárek',
			text: 'VIP člen, VIP dárek. Tohle překvapení ti neprozradíme. Doručíme ho emailem a bude to pecka.',
		},
	],
};

# Features:

Logo font: Fugaz One

## Pages:

- _/_
- _/about_
- _/cart_
- _/checkout_
- _/account_
- _/products_
- _/products/:productId_

### Authentication:

- login
- register
- account settings including contact data and address

### Shared layout:

- Navbar/Sidebar with user icon, cart icon, nav links
  - User
  - Cart
  - Navlinks
- Outlet with current page

### Cart:

- adding removing items
- calculating totals
- proceed to checkout button
- promo code input

### Checkout:

- if user added address to his account it's updated right away
- else user can fill the address/contact form

### All products page:

- fetch products from API
- display products in grid/list view

### Filter products toolbar:

- sort by: price/name functionality
- filter by: name, category, company, rating
- clear filters

### Single product page:

- fetch and display product
- details, photo gallery
- add to cart button

### Home page:

- hero img section
- categories
- top/featured products
- footer

### About us page:

- our story section
- faq section

=====================================
Click outside detection:
``js	useEffect(() => {
		let handler = (event) => {
			console.log(event.target);
			if (!accountBtnRef.current.contains(event.target)) {
				closeDropdown();
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, []);

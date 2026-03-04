# 👟 Sneakers Shop

Sneakers Shop is a modern e-commerce web app built with **Next.js**, **TypeScript** and **Tailwind CSS**.  
It showcases a sneaker catalog, product detail pages, membership benefits and a working shopping bag with persisted client state.

## 🚀 Features

• **Hero homepage** – clean landing section with CTA buttons for products and membership. <br>
• **Product catalog** – product search by name. <br>
• **Product detail** – image gallery, pricing, season info, and product code. <br>
• **Shopping bag** – add/remove items, update quantity, and total price calculation. <br>
• **Persistent cart state** – shopping bag is saved in `localStorage`. <br>
• **Membership page** – Sneakers Club and VIP benefits overview. <br>
• **Responsive UI** – optimized for desktop and mobile (including mobile menu). <br>
• **Notifications** – feedback when products are added/removed from the bag. <br>
• **Custom 404 + loading states** – built-in not-found and loading pages. <br>

## 🏃🏻 How to Run this App

1. Clone repository: <br>
  • `git clone https://github.com/DejvCodes/Sneakers-Shop-Next.js.git` <br>
  • `cd Sneakers-Shop-Next.js` <br>
2. Install dependencies: <br>
  • `npm install` <br>
3. Start development server: <br>
  • `npm run dev` <br>

## 💻 Tech stack

[![My Skills](https://skillicons.dev/icons?i=nextjs,typescript,tailwind,redux)](https://skillicons.dev)

## 📁 Project structure

```text
app/
├── membership/page.tsx        # Membership page
├── product/[slug]/page.tsx    # Product detail page
├── products/page.tsx          # Product listing + search
├── shopping-bag/page.tsx      # Shopping bag page
├── globals.css                # Global styles
├── layout.tsx                 # Root layout
├── loading.tsx                # Global loading UI
├── not-found.tsx              # 404 page
├── page.tsx                   # Homepage
└── providers.tsx              # Redux provider wrapper

components/
├── BagItem.tsx                # Shopping bag item row
├── Footer.tsx                 # Footer
├── Header.tsx                 # Header + nav + bag badge
├── OneBenefit.tsx             # Membership benefit card
└── ProductCard.tsx            # Product card component

constants/
├── content.ts                 # Text/content constants + icons mapping
└── sneakers.ts                # Product dataset

store/
├── index.ts                   # Redux store setup
└── shoppingBag.ts             # Shopping bag slice (cart logic)

types/
└── type.ts                    # Shared TypeScript types

public/                        # Static assets (icons, images)
```

## 🌐 Live Demo
<a href="https://sneakers-shop-dejvcodes.netlify.app">Sneakers Shop</a>

## 🔐 License
[MIT License](LICENSE)

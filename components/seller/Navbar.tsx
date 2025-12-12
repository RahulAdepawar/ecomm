"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
	{ name: "Dashboard", href: "/seller/admin" },
	{ name: "Products", href: "/seller/admin/products" },
	{ name: "Categories", href: "/seller/admin/categories" },
	{ name: "Orders", href: "/seller/admin/orders" },
	{ name: "Users", href: "/seller/admin/users" },
	{ name: "Settings", href: "/seller/admin/settings" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* ===== Top Navbar ===== */}
			<header className="w-full bg-white dark:bg-black shadow px-4 py-3 flex justify-between items-center md:px-8">
				<h1 className="text-xl font-bold">Admin Panel</h1>

				{/* Desktop Menu */}
				<nav className="hidden md:flex gap-6">
					{menu.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`font-medium px-3 py-2 rounded-md ${pathname === item.href
									? "bg-blue-600 text-white"
									: "hover:bg-gray-200 dark:hover:bg-gray-800"
								}`}
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Mobile Hamburger */}
				<button
					onClick={() => setOpen(true)}
					className="md:hidden p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
				>
					☰
				</button>
			</header>

			{/* ===== Mobile Drawer ===== */}
			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
				/>
			)}

			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black p-6 shadow-lg z-50 transform transition-transform
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
			>
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-xl font-bold">Menu</h2>
					<button onClick={() => setOpen(false)} className="text-xl">✕</button>
				</div>

				<nav className="flex flex-col gap-3">
					{menu.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className={`p-2 rounded-md font-medium ${pathname === item.href
									? "bg-blue-600 text-white"
									: "hover:bg-gray-200 dark:hover:bg-gray-800"
								}`}
						>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
		</>
	);
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
	const [search, setSearch] = useState("");

	// Dummy data (replace later with API data)
	const products = [
		{ id: 1, name: "Nike Air Max", price: 2999, stock: 20, status: "active" },
		{ id: 2, name: "Apple iPhone 14", price: 69999, stock: 5, status: "inactive" },
	];

	return (
		<div className="bg-gray-100 dark:bg-black min-h-screen p-4 md:p-6">
			{/* Page Header */}
			<div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
				<h1 className="text-2xl md:text-3xl font-bold">Products</h1>

				<Link
					href="/admin/products/create"
					className="mt-3 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
				>
					+ Add Product
				</Link>
			</div>

			{/* Search */}
			<div className="mb-4">
				<input
					type="text"
					placeholder="Search products..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full md:w-1/3 px-4 py-2 rounded-md border bg-white dark:bg-gray-900 dark:border-gray-700"
				/>
			</div>

			{/* Product Table */}
			<div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
				<table className="w-full text-left min-w-[600px]">
					<thead className="bg-gray-200 dark:bg-gray-800">
						<tr>
							<th className="p-3 font-semibold">Product</th>
							<th className="p-3 font-semibold">Price (₹)</th>
							<th className="p-3 font-semibold">Stock</th>
							<th className="p-3 font-semibold">Status</th>
							<th className="p-3 font-semibold">Actions</th>
						</tr>
					</thead>

					<tbody>
						{products.map((item) => (
							<tr
								key={item.id}
								className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
							>
								<td className="p-3">{item.name}</td>
								<td className="p-3 font-medium">₹{item.price}</td>
								<td className="p-3">{item.stock}</td>
								<td className="p-3">
									<span
										className={`px-2 py-1 rounded-md text-sm ${item.status === "active"
												? "bg-green-100 text-green-700"
												: "bg-red-100 text-red-700"
											}`}
									>
										{item.status}
									</span>
								</td>
								<td className="p-3 flex gap-2">
									<Link
										href={`/admin/products/${item.id}`}
										className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
									>
										Edit
									</Link>

									<button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

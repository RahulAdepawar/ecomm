"use client";
import { useState } from "react";
import Link from "next/link";

export default function Main() {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		shopName: "",
		shopAddress: "",
		phone: "",
		bankAccount: "",
		ifsc: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		// TODO: Add API integration here
	};

	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-black">
				<div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 dark:bg-black">
					<h2 className="text-2xl font-bold text-center mb-6">Buyer Registration</h2>

					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Full Name */}
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium mb-2">Full Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="John Doe"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>

							{/* Email */}
							<div>
								<label className="block text-sm font-medium mb-2">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="seller@example.com"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>

							{/* Password */}
							<div>
								<label className="block text-sm font-medium mb-2">Password</label>
								<input
									type="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="••••••••"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>

							{/* Phone Number */}
							<div>
								<label className="block text-sm font-medium mb-2">Phone Number</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="+91 9876543210"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div className="flex justify-between">
								<button
									type="submit"
									className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
								>
									Register
								</button>
							</div>
						</div>

					</form>

					<p className="text-center mt-4 text-sm text-gray-600">
						Already have an account?{" "}<Link href="/auth/buyer/login/" className="text-blue-600 hover:underline">Sign in</Link>
					</p>
				</div>
			</div>
		</>
	);
};
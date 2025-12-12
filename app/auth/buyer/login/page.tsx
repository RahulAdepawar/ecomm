import Link from "next/link";

export default function Main() {
	return (
		<>
			<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-black">
				<div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 dark:bg-black">

					<h2 className="text-2xl font-bold text-center mb-6">Buyer Login</h2>

					<form className="space-y-6">
						{/* Email */}
						<div>
							<label className="block text-sm font-medium mb-2">Email/Phone</label>
							<input
								type="email"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="seller@example.com/9999999999"
							/>
						</div>

						{/* Password */}
						<div>
							<label className="block text-sm font-medium mb-2">Password</label>
							<input
								type="password"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="••••••••"
							/>
						</div>

						{/* Login button */}
						<button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
						>
							Login
						</button>

						{/* Forgot password */}
						<div className="text-center">
							<a href="#" className="text-blue-600 text-sm hover:underline">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
							<p className="text-sm text-gray-600">Don't have an account? {" "}
								<Link href="/auth/buyer/registration/" className="text-blue-600 hover:underline">Sign up</Link>
							</p>
						</div>
					</form>

				</div>
			</div>
		</>
	);
};
export default function AdminDashboard() {
	return (
		<div className="px-4 py-6 bg-gray-100 dark:bg-black min-h-screen">
			{/* Page Title */}
			<h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard Overview</h1>

			{/* Stats Cards */}
			<div
				className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-4 
          md:gap-6
        "
			>
				{/* Card */}
				<div className="
          p-6 
          rounded-xl 
          shadow 
          bg-white 
          dark:bg-gray-900 
          hover:shadow-lg 
          transition
        ">
					<h3 className="text-lg font-semibold mb-2">Total Sales</h3>
					<p className="text-2xl font-bold">₹0</p>
				</div>

				<div className="
          p-6 
          rounded-xl 
          shadow 
          bg-white 
          dark:bg-gray-900 
          hover:shadow-lg 
          transition
        ">
					<h3 className="text-lg font-semibold mb-2">Total Orders</h3>
					<p className="text-2xl font-bold">0</p>
				</div>

				<div className="
          p-6 
          rounded-xl 
          shadow 
          bg-white 
          dark:bg-gray-900 
          hover:shadow-lg 
          transition
        ">
					<h3 className="text-lg font-semibold mb-2">Total Users</h3>
					<p className="text-2xl font-bold">0</p>
				</div>
			</div>
		</div>
	);
}

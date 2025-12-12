import Sidebar from "@/components/seller/Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-black">
			{/* Sidebar (drawer + desktop sidebar inside it) */}
			<Sidebar />

			{/* Main Content */}
			<main className="p-6">
				{children}
			</main>
		</div>
	);
}

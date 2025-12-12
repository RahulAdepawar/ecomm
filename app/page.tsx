"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
	let router = useRouter();

	function handleClick(e: number) {
		if (e === 1) {
			router.push("/auth/seller/login/");
		}
		else {
			router.push("/auth/buyer/login/");
		}
	};


	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 py-32 px-16 sm:items-center sm:flex-column">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={100}
					height={20}
					priority
				/>
				<div className="m-15 w-full flex justify-evenly sm:flex-row">
					<button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" onClick={() => handleClick(1)}>
						Seller
					</button>

					<button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition" onClick={() => handleClick(2)}>
						Buyer
					</button>
				</div>
			</main>
		</div>
	);
}

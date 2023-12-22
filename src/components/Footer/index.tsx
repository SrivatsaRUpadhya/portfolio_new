import Image from "next/image";
export default function Footer() {
	return (
		<>
			<footer id="footer" className="flex flex-row items-center justify-evenly w-full h-24 border-t">
				<a
					className="h-max flex underline items-center justify-center"
					target="_blank"
					href="https://x.com/srivatsa_11"
				>twitter</a>
				<a
					className="h-max flex underline items-center justify-center"
					href="mailto:srivatsarupadhya@gmail.com"
				>srivatsarupadhya@gmail.com</a>
				<a
					className="h-max flex underline items-center justify-center"
					href="https://github.com/SrivatsaRUpadhya"
				>GitHub</a>
			</footer>
		</>
	);
}

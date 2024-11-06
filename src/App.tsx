import { ThemeToggle } from "./ThemeToggle";

export function App() {
	return (
		<div
			className="
			w-screen h-screen flex items-center justify-center p-4 
			bg-white text-black
			dark:bg-black dark:text-grey"
		>
			<h1 className="max-w-xl lg:max-w-4xl text-5xl lg:text-7xl font-bold">
				<span>My name is </span>
				<span className="gradient-text bg-gradient-to-r from-black to-blue dark:from-orange dark:to-yellow">
					Calvin Davis
				</span>
				<span>
					. I'm a developer, average guitarist, and all-round great guy.
				</span>
				<span class="inline-block animate-bounce filter-invert dark:filter-none">
					👋
				</span>
			</h1>

			<div class="absolute top-4 right-4">
				<ThemeToggle />
			</div>
		</div>
	);
}

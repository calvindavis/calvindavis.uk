import { h, JSX } from "preact";

export default function ThemeToggle(): JSX.Element {
	function toggle() {
		document.documentElement.classList.toggle("dark");
	}

	return (
		<button
			class="w-10 h-10 border-solid border-8 rounded-full bg-gradient-to-r
				border-black from-orange to-yellow
				dark:border-white dark:from-black dark:to-blue"
			type="button"
			onClick={toggle}
		>
			<span class="sr-only">Toggle dark mode</span>
		</button>
	);
}

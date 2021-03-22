import { Fragment, h, JSX } from "preact";
import { useCallback, useState } from "preact/hooks";

export default function App(): JSX.Element {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = useCallback(() => {
		setIsDarkMode(isDarkMode === false);
	}, [isDarkMode]);

	return (
		<div className={isDarkMode ? "dark" : "light"}>
			<div
				className="
				w-screen h-screen flex items-center justify-center p-4 
				bg-white text-black
				dark:bg-black dark:text-grey"
			>
				<h1 className="max-w-xl lg:max-w-4xl text-5xl lg:text-7xl font-bold">
					<>My name is </>
					<span className="gradient-text bg-gradient-to-r from-black to-blue dark:from-orange dark:to-yellow">
						Calvin Davis
					</span>
					. I'm a developer, average guitarist, and all-round great guy.
					<span class="inline-block animate-bounce filter-invert dark:filter-none">
						👋
					</span>
				</h1>
			</div>

			<button
				class="
					absolute bottom-4 right-4 w-10 h-10 border-solid border-2 rounded-full bg-gradient-to-r
					border-black from-orange to-yellow
					dark:border-white dark:from-black dark:to-blue"
				type="button"
				onClick={toggleDarkMode}
			>
				<span class="sr-only">{isDarkMode ? "Go light" : "Go dark"}</span>
			</button>
		</div>
	);
}

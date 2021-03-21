import { Fragment, h, JSX } from "preact";

export default function App(): JSX.Element {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-4 bg-black">
			<h1 className="max-w-xl lg:max-w-4xl text-5xl lg:text-7xl font-bold text-grey">
				<>My name is </>
				<span className="gradient-text bg-gradient-to-r from-orange to-yellow">
					Calvin Davis
				</span>
				. I'm a developer, average guitarist, and all-round great guy.
			</h1>
		</div>
	);
}

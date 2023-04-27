/** @type { import('@storybook/web-components-webpack5').Preview } */

const preview = {
	parameters: {
		viewMode: "docs",
		showToolbar: true,
		inlineStories: true,
		actions: {argTypesRegex: "^on[A-Z].*"},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview

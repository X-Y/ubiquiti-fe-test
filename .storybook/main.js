/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
//  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
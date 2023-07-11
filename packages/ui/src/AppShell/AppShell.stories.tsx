import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { AppShell } from ".";

export default {
  title: "AppShell",
  component: AppShell,
} as Meta<typeof AppShell>;

const Template: StoryFn<typeof AppShell> = (args) => (
  <AppShell
    {...args}
    routes={[
      {
        path: "/",
        element: () => <div>Hello</div>,
      },
    ]}
    navLinks={[
      {
        label: "Home",
        path: "/",
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "My App",
};

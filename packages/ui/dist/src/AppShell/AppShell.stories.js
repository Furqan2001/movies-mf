import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell } from ".";
export default {
    title: "AppShell",
    component: AppShell,
};
const Template = (args) => (_jsx(AppShell, Object.assign({}, args, { routes: [
        {
            path: "/",
            element: () => _jsx("div", { children: "Hello" }),
        },
    ], navLinks: [
        {
            label: "Home",
            path: "/",
        },
    ] })));
export const Primary = Template.bind({});
Primary.args = {
    title: "My App",
};

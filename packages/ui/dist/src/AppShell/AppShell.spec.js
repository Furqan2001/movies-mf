import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import { AppShell } from ".";
describe("AppShell", () => {
    it("renders", () => {
        const { queryAllByText } = render(_jsx(AppShell, { title: "App", navLinks: [], routes: [
                {
                    path: "/",
                    element: () => _jsx("div", { children: "Hello" }),
                },
            ] }));
        expect(queryAllByText("App")).toHaveLength(1);
        expect(queryAllByText("Hello")).toBeTruthy();
    });
});

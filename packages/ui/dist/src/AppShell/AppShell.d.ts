import * as React from "react";
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: React.FunctionComponent<{
    title: string;
    routes: Route[];
    navLinks: NavLink[];
    colorScheme?: "light" | "dark";
}>;
//# sourceMappingURL=AppShell.d.ts.map
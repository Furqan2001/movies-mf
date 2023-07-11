import { render } from "@testing-library/react";
import { AppShell } from ".";

describe("AppShell", () => {
  it("renders", () => {
    const { queryAllByText } = render(
      <AppShell
        title="App"
        navLinks={[]}
        routes={[
          {
            path: "/",
            element: () => <div>Hello</div>,
          },
        ]}
      />
    );

    expect(queryAllByText("App")).toHaveLength(1);
    expect(queryAllByText("Hello")).toBeTruthy();
  });
});

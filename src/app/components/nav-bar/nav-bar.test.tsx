import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NavBar from "./nav-bar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/image", () => ({
  default: (props: { alt: string; src: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={props.alt} src={props.src} />
  ),
}));

vi.mock("./mobile-nav-bar", () => ({
  default: () => <nav aria-label="Mobile navigation">Mobile links</nav>,
}));

describe("NavBar mobile hamburger", () => {
  it("keeps the hamburger control right-aligned for iOS Safari", () => {
    render(<NavBar />);

    const controls = screen.getByTestId("mobile-nav-controls");
    expect(controls.className).toContain("justify-end");
    expect(controls.className).toContain("flex");
    expect(controls.className).not.toContain("justify-self-end");

    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button.className).toContain("ml-auto");
    expect(button.className).not.toContain("justify-self-end");
  });
});

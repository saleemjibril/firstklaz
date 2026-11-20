import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// WebGL isn't available in jsdom, so stub out the three.js scenes.
jest.mock("./components/Model", () => () => <div data-testid="hero-model" />);
jest.mock("./components/LogoModel", () => ({ handleHome }) => (
  <button onClick={handleHome}>logo</button>
));
jest.mock("react-tooltip", () => ({ Tooltip: () => null }));
// Mirrors the real widget: config.displayText renders Gruve's button, otherwise the children.
jest.mock("@gruve/echo", () => ({
  GruveEventWidgets: ({ eventAddress, config, children }) => (
    <div data-testid="gruve-widget" data-event-address={eventAddress}>
      {config?.displayText ? <button>{config.displayText}</button> : children}
    </div>
  ),
}));

beforeAll(() => {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  window.scrollTo = () => {};
});

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("home page shows the hero model", () => {
  renderAt("/");
  expect(screen.getByTestId("hero-model")).toBeInTheDocument();
  expect(document.title).toBe("Firstklaz");
});

test.each([
  ["/about", "Download EPK"],
  ["/music", "Lili"],
  ["/store", "Tour White Tee"],
  ["/shows", "Firstklaz & Friends Jos"],
  ["/gallery", "press photos"],
  ["/tour", "GET YOUR TICKETS HERE"],
])("%s has its own page", (path, text) => {
  renderAt(path);
  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.queryByTestId("hero-model")).not.toBeInTheDocument();
});

test("videos page renders the embeds", () => {
  renderAt("/videos");
  expect(screen.getByTitle("Firstklaz video 1")).toBeInTheDocument();
});

test("header links navigate between pages", () => {
  renderAt("/");
  fireEvent.click(screen.getAllByRole("link", { name: "music" })[0]);
  expect(screen.getByText("Lili")).toBeInTheDocument();
  expect(document.title).toBe("Music | Firstklaz");
});

describe("show pages", () => {
  const NEW_SHOW = "/shows/firstklaz-and-friends-abuja-2026";

  afterEach(() => jest.useRealTimers());

  test("the shows list links each show to its own page, newest first", () => {
    renderAt("/shows");
    const cards = screen.getAllByRole("link", { name: /Firstklaz|Dejavu/ });
    expect(cards[0]).toHaveAttribute("href", NEW_SHOW);
    expect(screen.getAllByRole("link", { name: /Jos/ })[0]).toHaveAttribute(
      "href",
      "/shows/firstklaz-and-friends-jos"
    );
  });

  test("the Abuja December show page has its details and the Gruve ticket button", async () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2026-12-01T12:00:00+01:00"));
    renderAt(NEW_SHOW);
    const buyButton = await screen.findByRole("button", { name: "Buy Ticket" });
    expect(buyButton).toHaveClass("show__tickets"); // the site's style, not Gruve's
    expect(screen.getByTestId("gruve-widget")).toHaveAttribute(
      "data-event-address",
      "0bfc5320f82777efbd744d70eb916eb92105a1de"
    );
    expect(
      screen.getByRole("heading", { name: "Firstklaz & Friends Abuja" })
    ).toBeInTheDocument();
    expect(screen.getByText(/12 December 2026/)).toBeInTheDocument();
    expect(screen.getByText("7PM – 12AM")).toBeInTheDocument();
    expect(screen.getByText("Bali City Park, Abuja")).toBeInTheDocument();
    expect(document.title).toBe("Firstklaz & Friends Abuja | Firstklaz");
  });

  test("the ticket link is replaced once the show is over", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2026-12-13T07:00:00+01:00"));
    renderAt(NEW_SHOW);
    expect(screen.getByText("This show has ended")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Buy Ticket" })).toBeNull();
  });

  test("past shows have pages marked sold out", () => {
    renderAt("/shows/firstklaz-and-friends-kaduna");
    expect(
      screen.getByRole("heading", { name: "Firstklaz & Friends Kaduna" })
    ).toBeInTheDocument();
    expect(screen.getByText("Sold out")).toBeInTheDocument();
  });

  test("an unknown show shows the 404 page", () => {
    renderAt("/shows/not-a-show");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});

test("unknown paths show the 404 page", () => {
  renderAt("/nope");
  expect(screen.getByText("404")).toBeInTheDocument();
});

test("a gallery photo can be reopened after closing it", () => {
  renderAt("/gallery");
  const photo = screen.getAllByAltText("Firstklaz press shot")[0];
  fireEvent.click(photo);
  const modal = document.querySelector(".gallery__modal");
  expect(modal).toBeInTheDocument();
  fireEvent.click(modal);
  expect(document.querySelector(".gallery__modal")).not.toBeInTheDocument();
  fireEvent.click(photo);
  expect(document.querySelector(".gallery__modal")).toBeInTheDocument();
});

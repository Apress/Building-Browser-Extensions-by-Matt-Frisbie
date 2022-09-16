import { render, screen } from "@testing-library/react";
import React from "react";
import chrome from "sinon-chrome";
import { Popup } from "./Popup";

describe("Popup", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  test("Reads from the storage api", () => {
    render(<Popup />);

    expect(chrome.storage.sync.get.withArgs(["count"]).calledOnce).toBe(true);
  });

  test("Renders a default value", () => {
    chrome.storage.sync.get.withArgs(["count"]).yields({ count: undefined });

    render(<Popup />);

    expect(screen.queryByText("Popup count: 0")).not.toBeNull();
  });

  test("Renders the storage API value", () => {
    chrome.storage.sync.get.withArgs(["count"]).yields({ count: 3 });

    render(<Popup />);

    expect(screen.queryByText("Popup count: 3")).not.toBeNull();
  });

  afterAll(() => {
    chrome.flush();
  });
});

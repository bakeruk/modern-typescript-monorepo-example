import { describe, it, expect } from "@jest/globals";
import { helloWorld } from "./index";

describe("Hello world", () => {
  it("should return hello world", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});

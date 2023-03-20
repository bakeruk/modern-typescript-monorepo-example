import { describe, it, expect } from "@jest/globals";
import { world } from "./index";

describe("World", () => {
  it("should return world", () => {
    expect(world()).toBe("World");
  });
});

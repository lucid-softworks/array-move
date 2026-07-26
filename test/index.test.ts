import { describe, expect, it } from "vitest";

import { move } from "../src/index.js";

describe("move", () => {
  it("moves a value without mutating the input", () => {
    const values = ["a", "b", "c", "d"];
    expect(move(values, 0, 2)).toEqual(["b", "c", "a", "d"]);
    expect(values).toEqual(["a", "b", "c", "d"]);
  });

  it("supports negative indexes", () => {
    expect(move([1, 2, 3], -1, -3)).toEqual([3, 1, 2]);
  });

  it("clamps destination indexes", () => {
    expect(move([1, 2, 3], 1, 99)).toEqual([1, 3, 2]);
    expect(move([1, 2, 3], 1, -99)).toEqual([2, 1, 3]);
  });

  it("returns a copy when the source is out of range", () => {
    const values = [1];
    const before = move(values, -2, 0);
    const after = move(values, 1, 0);
    expect(before).toEqual(values);
    expect(after).toEqual(values);
    expect(before).not.toBe(values);
  });

  it("validates both indexes", () => {
    expect(() => move([], 1.5, 0)).toThrow("source index must be an integer");
    expect(() => move([], 0, Number.NaN)).toThrow(
      "destination index must be an integer",
    );
  });
});

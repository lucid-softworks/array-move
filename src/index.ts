import { insertAt } from "@lucid-softworks/array-insert";
import { removeAt } from "@lucid-softworks/array-remove-at";
import { invariant } from "@lucid-softworks/invariant";

/** Moves one value to a clamped destination index without mutation. */
export function move<TValue>(
  values: readonly TValue[],
  from: number,
  to: number,
): TValue[] {
  invariant(Number.isInteger(from), "source index must be an integer");
  invariant(Number.isInteger(to), "destination index must be an integer");

  const source = from < 0 ? values.length + from : from;
  if (source < 0 || source >= values.length) {
    return values.slice();
  }

  const requestedDestination = to < 0 ? values.length + to : to;
  const destination = Math.max(
    0,
    Math.min(requestedDestination, values.length - 1),
  );
  const withoutValue = removeAt(values, source);
  return insertAt(withoutValue, destination, values[source]!);
}

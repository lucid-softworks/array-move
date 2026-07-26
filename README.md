# @lucid-softworks/array-move

Move one array value to another index without mutation. Negative indexes are
relative to the end and destinations are clamped.

```ts
import { move } from "@lucid-softworks/array-move";

move(["a", "b", "c"], 0, 2); // ["b", "c", "a"]
```

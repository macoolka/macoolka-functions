---
title: index.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [Timeout (type alias)](#timeout-type-alias)
- [delayFromIO (function)](#delayfromio-function)
- [delayTimer (function)](#delaytimer-function)
- [debounce (export)](#debounce-export)
- [delay (export)](#delay-export)

---

# Timeout (type alias)

**Signature**

```ts
export type Timeout = NodeJS.Timeout
```

Added in v0.2.0

# delayFromIO (function)

**Signature**

```ts

export const delayFromIO = (n: number) => <A>(a: IO<A>): Task<A> => () => new Promise<A>(resolve => ...

```

Added in v0.2.0

# delayTimer (function)

**Signature**

```ts

export const delayTimer = (n: number) => <A>(a: IO<A>): Timeout =>
  setTimeout(() => ...

```

Added in v0.2.0

# debounce (export)

**Signature**

```ts
;<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings) => T & Cancelable
```

Added in v0.2.0

# delay (export)

**Signature**

```ts
typeof delay
```

Added in v0.2.0

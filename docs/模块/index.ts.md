---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [Timeout (类型)](#timeout-%E7%B1%BB%E5%9E%8B)
- [delayFromIO (函数)](#delayfromio-%E5%87%BD%E6%95%B0)
- [delayTimer (函数)](#delaytimer-%E5%87%BD%E6%95%B0)
- [debounce (导出)](#debounce-%E5%AF%BC%E5%87%BA)
- [delay (导出)](#delay-%E5%AF%BC%E5%87%BA)

---

# Timeout (类型)

**签名**

```ts
export type Timeout = NodeJS.Timeout
```

v0.2.0 中添加

# delayFromIO (函数)

**签名**

```ts

export const delayFromIO = (n: number) => <A>(a: IO<A>): Task<A> => () => new Promise<A>(resolve => ...

```

v0.2.0 中添加

# delayTimer (函数)

**签名**

```ts

export const delayTimer = (n: number) => <A>(a: IO<A>): Timeout =>
  setTimeout(() => ...

```

v0.2.0 中添加

# debounce (导出)

**签名**

```ts
;<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings) => T & Cancelable
```

v0.2.0 中添加

# delay (导出)

**签名**

```ts
typeof delay
```

v0.2.0 中添加

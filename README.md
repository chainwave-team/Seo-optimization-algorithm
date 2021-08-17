# The Algorithm Challenge

![Tests](https://github.com/Junscuzzy/the-algorithm-challenge/workflows/Tests/badge.svg?branch=main)

I started this repo using Typescript, but now, I want like to practice Rust too. So let's practice the algorithms and data-structures using Typescript and/or Rust! (The exercises are from FreeCodeCamp)

## Process
I copy and paste the instructions from FreeCodeCamp, then I write the tests and finally I try to resolve the problem.

## Installation

### Common
Download the project locally.
```bash
git clone https://github.com/juliencrn/the-algorithm-challenge
cd the-algorithm-challenge
```

### Typescript part
This project needs `node` and `npm`.

```bash
cd typescript
npm i
npm run test
npm run start # Watch mode
```

### Rust part
This project requires `rust` and [`cargo-watch`](https://github.com/watchexec/cargo-watch).

```bash
cd rust
cargo test
cargo watch -x test # Watch mode
```

## Summary 

### Rust
```bash
src
├── algorithms
│  ├── hello.rs
│  └── mod.rs
└── lib.rs
```

The tree is generated using `exa --tree --git-ignore rust/src`.

### Typescript

```bash
src
├── algorithms
│  ├── basic-sorting
│  │  ├── bubble-sort
│  │  ├── insertion-sort
│  │  ├── merge-sort
│  │  ├── quick-sort
│  │  └── selection-sort
│  ├── find-the-symmetric-difference
│  ├── inventory-update
│  ├── no-repeats-please
│  └── pairwise
└── data-structures
   ├── circular-queue
   ├── priority-queue
   ├── queue
   └── stack
```

The tree is generated using `exa --tree --git-ignore typescript/src -D`.


## License
[MIT](https://github.com/juliencrn/the-algorithm-challenge/blob/main/LICENSE)

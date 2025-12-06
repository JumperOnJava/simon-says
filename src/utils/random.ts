// LLM Generated code, edited by me

export class SeedRandom {
  private seed: bigint;

  private static readonly A = 22695477n;
  private static readonly C = 1n;
  private static readonly M = 0x100000000n; // 2^32

  constructor(seedInput: string | number = 1) {
    this.seed = this.normalizeSeed(seedInput);
  }

  private normalizeSeed(input: string | number): bigint {
    if (typeof input === "number") {
      return BigInt(input) & (SeedRandom.M - 1n); // force into 32-bit range
    }
    if (typeof input === "string") {
      let hash = 0n;
      for (let i = 0; i < input.length; i++) {
        hash = (hash * 31n + BigInt(input.charCodeAt(i))) & (SeedRandom.M - 1n);
      }
      return hash;
    }
    throw new Error("Invalid seed type");
  }

  rand(): number {
    this.seed = (SeedRandom.A * this.seed + SeedRandom.C) % SeedRandom.M;
    return Number(this.seed) / Number(SeedRandom.M);
  }
}

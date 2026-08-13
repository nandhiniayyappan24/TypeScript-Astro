export class ResourcePool {
  #available = 0;

  allocate(count: number): void {
    this.#available += count;
  }

  get available(): number {
    return this.#available;
  }
}

export function describeVersion(): string {
  return 'TypeScript 5.2.2 — using declarations and decorators (TS 5.2 feature set)';
}

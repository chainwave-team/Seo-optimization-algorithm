export abstract class Collection<T> {
  protected collection: T[] = []

  abstract addOne (item: T): void

  abstract removeOne (): T | undefined

  abstract next (): T | undefined

  abstract size (): number

  abstract isEmpty (): boolean

  abstract clear (): void
}

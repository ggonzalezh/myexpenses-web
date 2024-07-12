export abstract class Mapper<TInput, TOutput> {
  abstract map(input: TInput): TOutput
}

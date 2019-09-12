/**
 * @file
 */
import { Task,delay } from 'fp-ts/lib/Task'
import {  IO } from 'fp-ts/lib/IO'
export {
    debounce
} from 'lodash'
export {
    delay
}
export type Timeout=NodeJS.Timeout
/**
 * 
 * @since 0.2.0
 */
export const delayFromIO = (n: number) => <A>(a: IO<A>): Task<A> => () => new Promise<A>(resolve => {
  setTimeout(() => resolve(a()), n)
})
/**
 * 
 *  @since 0.2.0
 */
export const delayTimer = (n: number) => <A>(a: IO<A>): Timeout =>
  setTimeout(() => a(), n)


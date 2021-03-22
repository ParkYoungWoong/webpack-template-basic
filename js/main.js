import '../scss/main.scss'
import { double } from './sub'

console.log('Start!')
console.log(double(7))

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()
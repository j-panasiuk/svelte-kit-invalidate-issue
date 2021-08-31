export async function get() {
  console.log('get...')
  return { body: Math.random() }
}

export default defineNuxtPlugin(() => {
  console.log('test plugin')
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  }
})
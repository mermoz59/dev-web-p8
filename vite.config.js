import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/dev-web-p8/',
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {

  console.log('Vite running in mode ${mode}')

  return {
    base: mode === 'prod' ? '' : '/dev-web-p8/',
    plugins: [react()]
  }
})

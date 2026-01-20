import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Google FontsのKosugi Maruを読み込む（styles/index.cssでも読み込んでいるが、念のため）
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
})

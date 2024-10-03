import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// export const locales = ['en', 'fr', 'ja', 'de', 'ru', 'es',"fa","ar"]
export const locales = ['id', 'en']

async function fetchTranslations(locale: string) {
  const sheetId = '1mIBLBAIKN9Ftnru41FfvGXYgVvoNsOvJoQkIPqm3OS0' // Gantilah dengan sheet ID yang sesuai
  const sheetName = locale // Menggunakan locale sebagai nama sheet
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${sheetId}/${sheetName}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch translations')
  }

  const data = await response.json()
  const messages: { [key: string]: string } = {}

  data.data.forEach((item: { nameVariable: string; content: string }) => {
    messages[item.nameVariable] = item.content
  })

  return messages
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  const messages = await fetchTranslations(locale as string)

  return {
    // messages: (await import(`../messages/${locale}.json`)).default
    messages
  }
})

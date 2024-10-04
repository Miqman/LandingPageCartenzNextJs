import useSWR from 'swr'
import { API_ROUTES } from '../services/api'
import fetcher from '../lib/fetcher'

export const useProdukSmartgov = () => {
  const fetchProdukSmartgov = () => fetcher(API_ROUTES.PRODUK_SMARTGOV())

  const { data, error } = useSWR('produkSmartgov', async () => {
    const [produk_smartgov] = await Promise.allSettled([fetchProdukSmartgov()])

    return {
      produk_smartgov:
        produk_smartgov.status === 'fulfilled'
          ? produk_smartgov.value.data
          : null
    }
  })

  return {
    dataProdukSmartgov: data?.produk_smartgov,
    isLoading: !error && !data,
    isError: error
  }
}

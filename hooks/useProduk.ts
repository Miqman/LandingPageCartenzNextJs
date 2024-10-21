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
export const useProdukEfd = () => {
  const fetchProdukEfd = () => fetcher(API_ROUTES.PRODUK_EFD())

  const { data, error } = useSWR('produkEfd', async () => {
    const [produk_efd] = await Promise.allSettled([fetchProdukEfd()])

    return {
      produk_efd:
        produk_efd.status === 'fulfilled' ? produk_efd.value.data : null
    }
  })

  return {
    dataProdukEfd: data?.produk_efd,
    isLoading: !error && !data,
    isError: error
  }
}
export const useProdukCitigov = () => {
  const fetchProdukCitigov = () => fetcher(API_ROUTES.PRODUK_CITIGOV())

  const { data, error } = useSWR('produkCitigov', async () => {
    const [produk_citigov] = await Promise.allSettled([fetchProdukCitigov()])

    return {
      produk_citigov:
        produk_citigov.status === 'fulfilled' ? produk_citigov.value.data : null
    }
  })

  return {
    dataProdukCitigov: data?.produk_citigov,
    isLoading: !error && !data,
    isError: error
  }
}

export const useProdukKonsultan = () => {
  const fetchProdukKonsultan = () => fetcher(API_ROUTES.PRODUK_KONSULTAN())

  const { data, error } = useSWR('produkKonsultan', async () => {
    const [produk_konsultan] = await Promise.allSettled([
      fetchProdukKonsultan()
    ])

    return {
      produk_konsultan:
        produk_konsultan.status === 'fulfilled'
          ? produk_konsultan.value.data
          : null
    }
  })

  return {
    dataProdukKonsultan: data?.produk_konsultan,
    isLoading: !error && !data,
    isError: error
  }
}

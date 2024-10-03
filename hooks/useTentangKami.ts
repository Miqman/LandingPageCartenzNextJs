// // hooks/useTentangKami.ts
// import useSWR from 'swr'
// import { API_ROUTES } from '../services/api'
// import fetcher from '../lib/fetcher'

// export const useMisiKami = () => {
//   const { data, error } = useSWR(API_ROUTES.MISI_KAMI(), fetcher)

//   return {
//     dataMisiKami: data?.data,
//     isLoadingMisiKami: !error && !data,
//     isErrorMisiKami: error
//   }
// }
// export const usePerkenalan = () => {
//   const { data, error } = useSWR(API_ROUTES.PERKENALAN(), fetcher)

//   return {
//     dataPerkenalan: data?.data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }
// export const usePresisi = () => {
//   const { data, error } = useSWR(API_ROUTES.PRESISI(), fetcher)

//   return {
//     dataPresisi: data?.data,
//     isLoadingPresisi: !error && !data,
//     isErrorPresisi: error
//   }
// }

// hooks / useTentangKami.ts
import useSWR from 'swr'
import { API_ROUTES } from '../services/api'
import fetcher from '../lib/fetcher'

export const useTentangKami = () => {
  const fetchPerkenalan = () => fetcher(API_ROUTES.PERKENALAN())
  const fetchPresisi = () => fetcher(API_ROUTES.PRESISI())
  const fetchMisiKami = () => fetcher(API_ROUTES.MISI_KAMI())
  const fetchPerjalananKami = () => fetcher(API_ROUTES.PERJALANAN_KAMI())
  const fetchDirektur = () => fetcher(API_ROUTES.DIREKTUR())
  const fetchTenagaAhli = () => fetcher(API_ROUTES.TENAGA_AHLI())
  const fetchPenghargaan = () => fetcher(API_ROUTES.PENGHARGAAN())

  const { data, error } = useSWR('tentangKami', async () => {
    const [
      perkenalan,
      presisi,
      misiKami,
      perjalanan_kami,
      direktur,
      tenaga_ahli,
      penghargaan
    ] = await Promise.allSettled([
      fetchPerkenalan(),
      fetchPresisi(),
      fetchMisiKami(),
      fetchPerjalananKami(),
      fetchDirektur(),
      fetchTenagaAhli(),
      fetchPenghargaan()
    ])

    return {
      perkenalan:
        perkenalan.status === 'fulfilled' ? perkenalan.value.data : null,
      presisi: presisi.status === 'fulfilled' ? presisi.value.data : null,
      misiKami: misiKami.status === 'fulfilled' ? misiKami.value.data : null,
      perjalanan_kami:
        perjalanan_kami.status === 'fulfilled'
          ? perjalanan_kami.value.data
          : null,
      direktur: direktur.status === 'fulfilled' ? direktur.value.data : null,
      tenaga_ahli:
        tenaga_ahli.status === 'fulfilled' ? tenaga_ahli.value.data : null,
      penghargaan:
        penghargaan.status === 'fulfilled' ? penghargaan.value.data : null
    }
  })

  return {
    dataPerkenalan: data?.perkenalan,
    dataPresisi: data?.presisi,
    dataMisiKami: data?.misiKami,
    dataPerjalananKami: data?.perjalanan_kami,
    dataDirektur: data?.direktur,
    dataTenagaAhli: data?.tenaga_ahli,
    dataPenghargaan: data?.penghargaan,
    isLoading: !error && !data,
    isError: error
  }
}

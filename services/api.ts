import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const BASE_ID = process.env.NEXT_PUBLIC_BASE_ID

export const API_ROUTES = {
  MISI_KAMI: () => `${BASE_URL}/${BASE_ID}/misikami`,
  PERJALANAN_KAMI: () => `${BASE_URL}/${BASE_ID}/perjalanan_kami`,
  PERKENALAN: () => `${BASE_URL}/${BASE_ID}/perkenalan`,
  PRESISI: () => `${BASE_URL}/${BASE_ID}/presisi`,
  DIREKTUR: () => `${BASE_URL}/${BASE_ID}/direktur`,
  TENAGA_AHLI: () => `${BASE_URL}/${BASE_ID}/tenaga_ahli`,
  PENGHARGAAN: () => `${BASE_URL}/${BASE_ID}/penghargaan`,
  PRODUK_SMARTGOV: () => `${BASE_URL}/${BASE_ID}/produk_smartgov`,
  PRODUK_EFD: () => `${BASE_URL}/${BASE_ID}/produk_efd`,
  PRODUK_CITIGOV: () => `${BASE_URL}/${BASE_ID}/produk_citigov`,
  PRODUK_KONSULTAN: () => `${BASE_URL}/${BASE_ID}/produk_konsultan`
  //   POSTS: `${BASE_URL}/posts`,
  // ... tambahkan route lain sesuai kebutuhan
}

// Anda masih bisa menyimpan fungsi-fungsi khusus di sini jika diperlukan

// export const createPost = async (postData: PostData) => {
//   try {
//     const response = await axios.post(API_ROUTES.POSTS, postData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating post:', error);
//     throw error;
//   }
// };

import axios, { AxiosResponse } from "axios";

const apiKey = "toSRq2P8w1nCIohNTIlPQPsJF9-zj_at2rFDl31PQgc";

axios.defaults.baseURL = "https://api.unsplash.com";

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

export const fetchImages = async (
  searchQuery: string,
  currentPage: number
): Promise<UnsplashImage[]> => {
  const response: AxiosResponse<{ results: UnsplashImage[] }> = await axios.get(
    "/search/photos",
    {
      params: {
        query: searchQuery,
        page: currentPage,
        per_page: 5,
        orientation: "landscape",
        client_id: apiKey,
      },
    }
  );

  return response.data.results;
};

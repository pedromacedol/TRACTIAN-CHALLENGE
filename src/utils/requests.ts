import { TractianAPI } from "./api/config";

export async function getData(endpoint: string) {
  return await TractianAPI.get(`/${endpoint}`).then(
    (response) => response.data
  );
}

export async function getDataItem(endpoint: string, id: number) {
  return await TractianAPI.get(`/${endpoint}/${id}`).then(
    (response) => response.data
  );
}

export async function postData(endpoint: string, data: any) {
  return await TractianAPI.post(`/${endpoint}`, data);
}

export async function delItem(endpoint: string, id: number) {
  await TractianAPI.delete(`/${endpoint}/${id}`).then(
    (response) => response.data
  );
}

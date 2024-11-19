import axios from "axios";
import { Params } from "react-router-dom";
import { PlaceData } from "../types";

// base url sahip bir axios örneği oluşturduk
const api = axios.create({ baseURL: "http://localhost:4001" });

// bütün konaklama yerlerini getiren fonksiyon
export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// yeni bir konaklama yeri oluşturan fonksiyon
export const createPlace = (body: PlaceData) => api.post("/api/places", body);

// konaklama noktasını alan fonksiyon
export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

// konaklama alanını sil
export const deletePlace = (id: string) => api.delete(`/api/place/${id}`);

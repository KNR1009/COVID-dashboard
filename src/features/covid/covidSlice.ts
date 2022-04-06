import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
// 返り値のデータを取得する
import dataJson from "./data.json";
import dataJsonDaily from "./dataDaily.json";
import { initialState } from "./initial";
const apiUrl = "https://covid19.mathdro.id/api";

// apiから返ってくるデータを取得
export type APIDATA = typeof dataJson;
export type APIDATADAILY = typeof dataJsonDaily;

export const fetchAsyncGet = createAsyncThunk("covid/get", async () => {
  const { data } = await axios.get<APIDATA>(apiUrl);
  return data;
});
// その日の感染者数
export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async () => {
    const { data } = await axios.get<APIDATADAILY>(`${apiUrl}/daily`);
    return data;
  }
);
// ある国の感染者数を取得
export const fetchAsyncGetCountry = createAsyncThunk(
  "covid/getCountry",
  async (country: string) => {
    let dynamicUrl = apiUrl;
    if (country) {
      dynamicUrl = `${apiUrl}/countries/${country}`;
    }
    const { data } = await axios.get<APIDATA>(dynamicUrl);
    return { data: data, country: country };
  }
);

type covidState = {
  data: APIDATA;
  country: string;
  dailyData: APIDATADAILY;
};

// 非同期メソットを呼び出す
const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        dailyData: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetCountry.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        country: action.payload.country,
      };
    });
  },
});

export const selectData = (state: RootState) => state.covid.data;
export const selectDailyData = (state: RootState) => state.covid.dailyData;
export const selectCountry = (state: RootState) => state.covid.country;

export default covidSlice.reducer;

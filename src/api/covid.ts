import axios from "axios";
import { DataType } from "../types/interface";

export const getData = async () => {
  const { data } = await axios.get<DataType>("https://covid19.mathdro.id/api");
  console.log(data);
};

export const getDailyDate = async () => {
  const { data } = await axios.get<DataType>(
    "https://covid19.mathdro.id/api/daily"
  );
  console.log(data);
};
export const getCountriesDate = async (countries: string) => {
  const { data } = await axios.get<DataType>(
    `https://covid19.mathdro.id/api/countries/${countries}`
  );
  console.log(data);
};

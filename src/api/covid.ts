import axios from "axios";
import { DataType } from "../types/interface";

export const getData = async () => {
  const { data } = await axios.get<DataType>("https://covid19.mathdro.id/api");
  console.log(data);
};

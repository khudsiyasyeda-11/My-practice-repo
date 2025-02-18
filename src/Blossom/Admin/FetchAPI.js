import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAPIdata = (api) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return data;
};

export default useFetchAPIdata;

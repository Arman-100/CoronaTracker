import { getCountyData } from "../../api/datacollection";

export async function dataOrganize(state) {
  let result = await getCountyData(state);
  //   console.log(result);
  return result;
}

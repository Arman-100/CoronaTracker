import axios from "axios";

const URL = `https://www.trackcorona.live/api`;

export async function getUSData() {
  try {
    const { data } = await axios.get(`${URL}/countries/us`);
    console.log(data.data[0]);
    return data.data[0];
  } catch (err) {
    console.error(err);
  }
}

export async function getUSDataConfirmed() {
  try {
    const { data } = await axios.get(`${URL}/countries/us`);
    console.log(data.data[0].confirmed);
    return data.data[0].confirmed;
  } catch (err) {
    console.error(err);
  }
}

export async function getUSDataDead() {
  try {
    const { data } = await axios.get(`${URL}/countries/us`);
    console.log(data.data[0].dead);
    return data.data[0].dead;
  } catch (err) {
    console.error(err);
  }
}

export async function getUSDataRecovered() {
  try {
    const { data } = await axios.get(`${URL}/countries/us`);
    console.log(data.data[0].recovered);
    return data.data[0].recovered;
  } catch (err) {
    console.error(err);
  }
}

export async function getStateDataConfirmed(state) {
  try {
    const { data } = await axios.get(`${URL}/provinces/${state}`);
    const result = await data;
    console.log("getStateData -> result", result.data[0].confirmed);
    return result.data[0].confirmed;
  } catch (err) {
    console.error(err);
  }
}
export async function getStateDataDead(state) {
  try {
    const { data } = await axios.get(`${URL}/provinces/${state}`);
    const result = await data;
    console.log("getStateData -> result", result.data[0].dead);
    return result.data[0].dead;
  } catch (err) {
    console.error(err);
  }
}
export async function getStateDataRecovered(state) {
  try {
    const { data } = await axios.get(`${URL}/provinces/${state}`);
    const result = await data;
    console.log("getStateData -> result", result.data[0].recovered);
    return result.data[0].recovered;
  } catch (err) {
    console.error(err);
  }
}

export async function getFloridaData() {
  try {
    const { data } = await axios.get(`${URL}/provinces/florida`);
    console.log(data.data[0]);
  } catch (err) {
    console.error(err);
  }
}

export async function getDuvalData() {
  try {
    const { data } = await axios.get(`${URL}/cities/duval`);
    console.log(data.data[0]);
  } catch (err) {
    console.error(err);
  }
}

export async function getCountyData() {
  try {
    const { data } = await axios.get(`${URL}/cities`);
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.log(err);
  }
}

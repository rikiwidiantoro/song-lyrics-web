import axios from 'axios';

import constants from '../../constants';

const { URL_ALL_SONG } = constants;

const getAllSong = async () => {
  try {
    const { data } = await axios.get(`${URL_ALL_SONG}`);
    // console.log(response.data);
    // console.log(data.data);
    return data.data
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllSong
}
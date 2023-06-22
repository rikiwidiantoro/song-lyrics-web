import axios from 'axios';

import constants from '../../constants';

const { URL_LYRICS_SONG } = constants;

const lyricsSong = async ({ id }) => {
  try {
    const { data } = await axios.get(`${URL_LYRICS_SONG}/${id}`);
    // const response = await axios.get(`https://song-lyrics-api.azharimm.dev/lyrics/-o-one+piece-we+are_21063565`);
    // console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  lyricsSong
}
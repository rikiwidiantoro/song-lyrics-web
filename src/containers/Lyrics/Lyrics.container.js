import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import handlers from './Lyrics.handler';

const { lyricsSong } = handlers;

function Lyrics() {
  const id = useParams();
  const [ dataLyrics, getDataLyrics ] = useState([]);

  const getLyricsSong = async () => {
    try {
      const lyrics = await lyricsSong(id);
      getDataLyrics(lyrics);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLyricsSong();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dataLyrics);

  return (
    <h1>Lyrics</h1>
  );
}

export default Lyrics;
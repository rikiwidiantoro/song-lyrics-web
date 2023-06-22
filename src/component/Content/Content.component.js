import { useEffect, useState } from "react";
import { Table,  } from "react-bootstrap";

import handlers from './Content.handler';
import { Link } from "react-router-dom";

const { getAllSong } = handlers;

function Content() {
  const [ dataAllSong, setDataAllSong ] = useState([]);

  const getSong = async () => {
    try {
      const data = await getAllSong();
      setDataAllSong(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSong();
  }, []);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>No</th>
          <th>Song Title</th>
          <th>Artist</th>
          <th>Detail Lyrics</th>
        </tr>
      </thead>
      <tbody>
        {
          dataAllSong.map((song, index) => (
            <tr key={song.songId}>
              <td>{ index + 1 }</td>
              <td>{ song.songTitle }</td>
              <td>{ song.artist }</td>
              <td><Link to={`/lyrics/${song.songId}`}>detail</Link></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default Content;
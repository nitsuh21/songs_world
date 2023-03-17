import { useDispatch } from 'react-redux'
import { deleteSong } from '../features/songs/songSlice'

function SongItem({ song }) {
  const dispatch = useDispatch()

  return (
    <div className='song'>
      <div>{new Date(song.createdAt).toLocaleString('en-US')}</div>
      <h2>{song.title}</h2>
      <button onClick={() => dispatch(deleteSong(song._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default SongItem
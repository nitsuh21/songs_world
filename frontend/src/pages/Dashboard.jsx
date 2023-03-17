import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SongForm from '../components/SongForm'
import SongItem from '../components/SongItem'
import Spinner from '../components/Spinner'
import { getSongs, reset } from '../features/songs/songSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { songs, isLoading, isError, message } = useSelector(
    (state) => state.songs
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getSongs())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Songs Dashboard</p>
      </section>
      <SongForm/>
      <section className='content'>
        {songs.length > 0 ? (
          <div className='songs'>
            {songs.map((song) => (
              <SongItem key={song._id} song={song} />
            ))}
          </div>
        ) : (
          <h3>You have not add any songs</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
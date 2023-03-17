import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createSong } from '../features/songs/songSlice'
import { Label, Input } from '@rebass/forms'

function SongForm() {
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createSong({ title }))
    setTitle('')
  }

  return (
    <>
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Song</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Song
          </button>
        </div>
      </form>
    </section>
    </>
  )
}

export default SongForm
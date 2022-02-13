import React from 'react'
import './albumItem.less'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { IconPlayCircle } from '@douyinfe/semi-icons'

export default function AlbumItem(props) {
  const albums = props.albums
  const items = albums.map(al => (
    <li key={al.id} className='album-item'>
      <div className='album-img'>
        <Link to={'/find/album?id=' + al.id}>
          <LazyLoad>
            <img src={al.blurPicUrl} alt=''/>
          </LazyLoad>
        </Link>
        <IconPlayCircle size='large' style={{
          color: '#eee'
        }}/>
      </div>
      <Link to={'/find/album?id=' + al.id} className='album-name'>{al.name}</Link>
      <Link to={'/find/artist?id=' + al.artist.id} className='singer-name'>{al.artist.name}</Link>
    </li>
  ))
  return (
    <ul className='album-container'>
      {items}
    </ul>
  )
}

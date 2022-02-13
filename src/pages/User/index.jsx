import './index.less'

export default function index(props) {
  return (
    <div className='user-container'>
      {props.children}
    </div>
  )
}

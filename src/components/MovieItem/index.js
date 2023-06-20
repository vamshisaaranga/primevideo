// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movies} = props
  const {thumbnailUrl, videoUrl} = movies
  return (
    <div className="popup-container">
      modal
      <Popup
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
        position="center"
      >
        {close => (
          <div>
            <div className="closeButtonContainer">
              <button
                type="button"
                className="closeButton"
                data-testid="closeButton"
              >
                <IoMdClose onClick={() => close()} className="closeIcon" />
              </button>
            </div>
            <div>
              <ReactPlayer url={videoUrl} height={260} width={400} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

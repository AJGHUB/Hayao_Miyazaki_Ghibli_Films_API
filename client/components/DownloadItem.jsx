import React from 'react'

function DownloadItem (props) {
  return (
    <div>
      <a href={props.details.url} download={props.details.name}>
        <img src={props.details.url} alt={props.details.name}/>
      </a>
    </div>
  )
}

export default DownloadItem
import React from 'react'

import DownloadItem from './DownloadItem'

class Download extends React.Component {
  state = {
    images: [
      {name: "arietty1" ,
      url: "/images/arietty1.jpg"},
      {name: "chihiro1" ,
      url: "/images/chihiro1.jpg"},
      {name: "cittàIncantata" ,
      url: "/images/cittàIncantata.jpg"},
      {name: "ghilbli" ,
      url: "/images/ghibli.jpg"},
      {name: "howl1" ,
      url: "/images/howl1.jpg"},
      {name: "kaguya1" ,
      url: "/images/kaguya1.jpg"},
      {name: "laputa1" ,
      url: "/images/laputa1.jpg"},
      {name: "mononoke" ,
      url: "/images/mononoke.jpg"},
      {name: "mononoke1" ,
      url: "/images/mononoke1.jpg"},
      {name: "nausicaa" ,
      url: "/images/nausicaa.jpg"},
      {name: "nausicaa1" ,
      url: "/images/nausicaa1.jpg"},
      {name: "ponyo1" ,
      url: "/images/ponyo1.jpg"},
      {name: "terramare" ,
      url: "/images/terramare.jpg"},
      {name: "totoro" ,
      url: "/images/totoro.jpg"}
    ]
  }

  render(){
    return (
      <div className="download-container">
        {this.state.images.map(anImage => <DownloadItem details={anImage}/>)}
      </div>
    )
  }
}

export default Download
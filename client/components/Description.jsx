import React from 'react'
import { Link } from 'react-router-dom'

class Description extends React.Component {
  constructor(props){
    super(props)
  }

  renderDescription(movieData){
    //trailer .id matched the film location
    const trailer = [
      { 
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        src: "https://www.youtube.com/embed/8ykEy-yPBFc",
        name: "Laputa Castle in the Sky"
      },
      { 
        id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        src: "https://www.youtube.com/embed/4vPeTSRd580",
        name: "Grave of the Fireflies Trailer"
      },
      { 
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        src: "https://www.youtube.com/embed/92a7Hj0ijLs",
        name: "My Neighbor Totoro Trailer"
      },
      { 
        id: 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
        src: "https://www.youtube.com/embed/4bG17OYs-GA",
        name: "Kiki's Delivery Service Trailer"
      },
      { 
        id: '4e236f34-b981-41c3-8c65-f8c9000b94e7',
        src: "https://www.youtube.com/embed/x0ZrjocXVJ4",
        name: "Only Yesterday Trailer"
      },
      { 
        id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
        src: "https://www.youtube.com/embed/awEC-aLDzjs",
        name: "Porco Rosso Trailer"
      },
      { 
        id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
        src: "https://www.youtube.com/embed/_7cowIHjCD4",
        name: "Pom Poko Trailer"
      },
      { 
        id: 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
        src: "https://www.youtube.com/embed/0pVkiod6V0U",
        name: "Whisper of the Heart Trailer"
      },
      { 
        id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
        src: "https://www.youtube.com/embed/4OiMOHRDs14",
        name: "Princess Nomonoki"
      },
      { 
        id: '45204234-adfd-45cb-a505-a8e7a676b114',
        src: "https://www.youtube.com/embed/1C9ujuCPlnY",
        name: "My Neighbors the Yamadas Trailer"
      },
      { 
        id: 'dc2e6bd1-8156-4886-adff-b39e6043af0c',
        src: "https://www.youtube.com/embed/ByXuk9QqQkk",
        name: "Spirited Away Trailer"
      },
      { 
        id: '90b72513-afd4-4570-84de-a56c312fdf81',
        src: "https://www.youtube.com/embed/Gp-H_YOcYTM",
        name: "The Cat Returns"
      },
      { 
        id: 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
        src: "https://www.youtube.com/embed/iwROgK94zcM",
        name: "Howls Moving Castle"
      },
      {
        id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
        src: "https://www.youtube.com/embed/8hxYx3Jq3kI",
        title: "Tales from Earthsea"
      },
      { 
        id: '758bf02e-3122-46e0-884e-67cf83df1786',
        src: "https://www.youtube.com/embed/CsR3KVgBzSM",
        name: "Ponyo"
      },
      { 
        id: '2de9426b-914a-4a06-a3a0-5e6d9d3886f6',
        src: "https://www.youtube.com/embed/9CtIXPhPo0g",
        name: "Arrietty"
      },
      { 
        id: '45db04e4-304a-4933-9823-33f389e8d74d',
        src: "https://www.youtube.com/embed/9nzpk_Br6yo",
        name: "From Up on Poppy HIll"
      },
      { 
        id: '67405111-37a5-438f-81cc-4666af60c800',
        src: "https://www.youtube.com/embed/2QFBZgAZx7g",
        name: "The Wind Rises"
      },
      { 
        id: '578ae244-7750-4d9f-867b-f3cd3d6fecf4',
        src: "https://www.youtube.com/embed/tM6hcHp0_kU",
        name: "The Tale of the Princess Kaguya"
      },
      { 
        id: '5fdfb320-2a02-49a7-94ff-5ca418cae602',
        src: "https://www.youtube.com/embed/PZq4uuMP8ss",
        name: "When Marnie Was There"
      },
    ]

    const src = trailer.find(movieTrailer => movieData.id == movieTrailer.id).src

    return (
      <>
        <h2>{ movieData.name }</h2>
        <h2>{ movieData.title }</h2>
        <h3>Directed by { movieData.director }</h3>
        <h3>Produced by { movieData.producer }</h3>
        <h3>Release date: { movieData.release_date }</h3>
        <h3>Rotten Tomatoes Score: { movieData.rt_score }</h3>
        <h2>Ghibli Movie Description</h2>
        <p>{ movieData.description }</p>
        <h2>Movie Trailer</h2>
        <iframe width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      </>
    )
  }


  render(){
    // console.log(this.props)
    const movieData = this.props.data.find((item) => {
      return this.props.match.params.id == item.id
    })


//object 
    return (
      <div>
        {movieData != undefined ? this.renderDescription(movieData) : <p>please wait while loading</p> }
      </div>
    )
  }
}

export default Description
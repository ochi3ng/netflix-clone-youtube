import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import Requests from '../Requests'
function HomeScreen() {
  return (
    <div>
       <Nav />
        <Banner />
         <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />    
    </div>
  )
}

export default HomeScreen
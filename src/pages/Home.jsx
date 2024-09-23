import React from 'react'
import Row from '../components/Row'
import data from '../Request'
import MainHome from '../components/MainHome'

const Home = () => {
  return (
    <>
      <MainHome/>
      <Row title='Popular Movies' url={data.requestPopular} category='movie' />
      <Row title='Top Rated Movies' url={data.requestTopRated} category='movie' />
      <Row title='Up coming Movies' url={data.requestUpcoming} category='movie' />
      <Row title='Popular TV Series' url={data.tvPopular} category='tv' />
      <Row title='Top Rated TV Series' url={data.tvTopRated} category='tv' />
      <Row title='Up coming TV Series' url={data.tvOnAir} category='tv' />
    </>
  )
}

export default Home
import React from 'react'
import { MainNews } from './MainNews'
import { BodyNews } from './BodyNews'
import { BodyReviews} from './BodyReviews'
import { Subscribe } from './Subscribe'

const NewsPage = () => {
  return (
    <>
      <MainNews />
      <BodyNews />
      <BodyReviews />
      <Subscribe />
    </>
  )
}

export default NewsPage

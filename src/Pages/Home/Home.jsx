import React from 'react'

import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'
import requests from '../../Utils/requests'
// import BasicExample from '../../Components/Nav/Nav'

function Home() {
  return (
    <>
       <Banner />   
       {/* <BasicExample /> */}
       <RowList array={requests} />
  

    </>
  )
}

export default Home;



import React from 'react'
import Row from '../Row/Row'


function RowList({array}) {
  return (
        <>

            {
            
              array?.map((item,index)=>(<Row key={index} title={item.title} fetchUrl={item.fetchUrl} isLargeRow={item?.isLargeRow}/>))
            }

        </>
  )
}

export default RowList
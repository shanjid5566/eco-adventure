/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

const DynamicTitle = (title) => {
  useEffect(()=>{
    document.title = `${title}`;
  },[])
}

export default DynamicTitle

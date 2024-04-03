import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

export default function Loader
() {
  return (
    <div className='flex justify-center items-center mt-[300px] mb-[100px]'>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ({data}) => {
  return (<div className="card  h-40 w-44">
  <div className="bg flex flex-col h-36 w-40 -z-10 gap-2 text-gray-900 justify-center items-center">
    <FontAwesomeIcon icon={data.icon} size="3x" />
    <h3 className='text-xl font-semibold tracking-[-0.05em] diagonal-fractions '>{data.title}</h3>
    <p>{data.description}</p>

  </div>
  <div className="blob -z-20 "></div>
</div>  )
}

export default Card
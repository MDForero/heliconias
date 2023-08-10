'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardContact = ({ data }) => {

    return (
            <a href={data.href} className="card border w-40 h-20 flex text-gray-300 flex-col justify-center items-center">
                <FontAwesomeIcon icon={data.icon} className="h-7" />
                <p className=" overflow-hidden w-full text-ellipsis px-4">{data.text}</p>
            </a>)}

export default CardContact
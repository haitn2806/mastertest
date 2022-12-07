import React from 'react';
import IMG from '../../data/banner/woman.jpg';
import {AiOutlineCheck} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ResultItem = ({data}) => {
  return (
    <div className='result-item' key={data.id}>
        <img src={IMG} className='rs-item-img'/>
        <div className='rs-item-main'>
        <h1>{data.title}</h1>
        <div>{data.highlight[0]} ...</div>
        <div><AiOutlineCheck className='rs-ic'/>Country: {data.country.map(d=><span>{d} </span> )} </div>
        <div><AiOutlineCheck className='rs-ic'/>{data.itinerary.length} days</div>
        <div><AiOutlineCheck className='rs-ic'/>{data.price} $</div>
        <div><AiOutlineCheck className='rs-ic'/>Date : {data.date.start} - {data.date.end}</div>
        <Link to='/TravelInfo' className='link-result-item'>
            Explore this trip
        </Link>
        </div>
    </div>
  )
}

export default ResultItem
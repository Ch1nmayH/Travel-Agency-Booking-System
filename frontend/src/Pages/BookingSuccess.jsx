import React from 'react'
import { useParams } from 'react-router-dom';

const BookingSuccess = () => {
    const bookingId = useParams().bookingId;
    console.log(bookingId)
  return (
    <div>{bookingId}</div>
  )
}

export default BookingSuccess
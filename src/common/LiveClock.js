import React from 'react'
import Countdown from 'react-countdown';
const LiveClock = ({ clockText, targetDate }) => {
    // const targetDate = new Date('2024-02-16T00:00:00'); // Replace with your target date
    return (
        <Countdown date={targetDate} renderer={({ days, hours, minutes, seconds }) => {
            return (
                <div className='clock'>
                    <p className='fs-14 text-secondary-400'>{clockText}</p>
                    <div className='countdown d-flex justify-content-center'>
                        <div className='day'>
                            <span>{days}</span>
                            <p> Days</p>
                        </div>
                        <span> :</span>
                        <div className='hour'>
                            <span>{hours}</span>
                            <p>Hours</p>
                        </div>
                        <span> :</span>
                        <div className='minute'>
                            <span>{minutes}</span>
                            <p>Minutes</p>
                        </div>
                        <span> :</span>
                        <div className='second'>
                            <span>{seconds}</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            );
        }} />
    )
}
export default LiveClock

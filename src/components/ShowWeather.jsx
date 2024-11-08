import React from 'react'

export default function ShowWeather({weatherData}) {
    return (
        <div className='card'>
            <div className="card-header">
                <div className="card-title">
                    {weatherData.city} ({weatherData.country})
                </div>
            </div>
            <div className="card-body">
                <div className="card-title">
                    Avg-Temprature: {weatherData.avg_temp}
                </div>
                <div className="card-text">
                    Min-Temprature: {weatherData.min_temp}
                </div>
                <div className="card-text">
                    Max Temprature: {weatherData.max_temp}
                </div>
                <div className="card-title">
                    Pressure: {weatherData.pressure}
                </div>
                <div className="card-title">
                    Humidity: {weatherData.humidity}
                </div>
            </div>

        </div>
    )
}

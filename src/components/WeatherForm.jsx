import React from 'react'

export default function WeatherForm({submitForm, city, setCity}) {
    return (
        <div className="card">
            <div className="card-body">
                <form className='inline-form' onSubmit={submitForm}>
                    <input type="text" placeholder='Enter City Name' className='form-control mb-3' value={city} onChange={(event)=>{setCity(event.target.value)}}/>
                    <button className='btn btn-info'>Get Weather Info</button>
                </form>
            </div>

        </div>

    )
}

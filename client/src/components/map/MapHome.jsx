import { listCamping } from '@/service/camping'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MapHome() {
  const [landmarks, setLandmark] = useState([])
  useEffect(() => {
    hdlGetLandmark()
  }, [])

  const hdlGetLandmark = () => {
    listCamping()
      .then((res) => setLandmark(res.data.result))
      .catch((err) => console.log(err))

  }


  return (
    <MapContainer
      className='h-[50vh] rounded-sm z-0'
      center={[13, 100]} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {
        landmarks?.map((item) => {

          return <Marker position={[item.lat, item.lng]}>
            <Popup>
              {item.title} <br /> {item.description}
            </Popup>
          </Marker>

        })
      }


    </MapContainer>
  )
}

export default MapHome
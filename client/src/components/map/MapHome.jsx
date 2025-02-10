

import { MapContainer} from 'react-leaflet'
import Layers from './Layers'

function MapHome() {



  return (
    <MapContainer
      className='h-[50vh] rounded-sm z-0'
      center={[13, 100]} zoom={8} scrollWheelZoom={true}>

      <Layers />




    </MapContainer>
  )
}

export default MapHome
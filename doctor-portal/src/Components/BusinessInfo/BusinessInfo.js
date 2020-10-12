import React from 'react'
import { InfoCard } from '../InfoCard/InfoCard'
import { faClock,faMapMarker,faPhone} from '@fortawesome/free-solid-svg-icons'

const infoData=[
    {
        title:'Opening Hours',
        description:'We are open  days',
        icon:faClock,
        background:'primary'
    },
    
    {
        title:'Visit Our Location ',
        description:'Broklyn, NY 10003 USA',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Call Us Now',
        description:'+1563902',
        icon:faPhone,
        background:'primary'
    },
]
export const BusinessInfo = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                {
                infoData.map(info=><InfoCard info={info}/>)
            }
                </div>
            </div>
        </section>
    )
}

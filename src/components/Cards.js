import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out These epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                     <CardItem 
                     src='/images/img-9.jpg'
                     text="Explore the hidden Waterfall"
                     label='Adventure'
                     path='/services' />
                     <CardItem 
                     src='/images/img-2.jpg'
                     text="Visit the Wonderful island of Bali"
                     label='Luxury'
                     path='/services' />   
                    </ul>
                    <ul className="cards__items">
                     <CardItem 
                     src='/images/img-3.jpg'
                     text="Boat Riding in Ocean"
                     label='SCARY BITCH!'
                     path='/services' />
                     <CardItem 
                     src='/images/img-5.jpg'
                     text="Visit expensive hotels in Paris"
                     label='Money Grab'
                     path='/services' /> 
                     <CardItem 
                     src='/images/img-7.jpg'
                     text="Rave party in spain"
                     label='BDSM'
                     path='/services' />  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

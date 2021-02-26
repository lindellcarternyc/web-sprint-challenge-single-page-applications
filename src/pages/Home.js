import React from 'react'
import { useHistory } from 'react-router-dom'

import Hero from '../components/Hero'

export default function Home(props) {
    const history = useHistory()
    return (
        <div>
            {/* HERO IMAGE & CTA- */}
            <Hero 
                backgroundImage="https://picsum.photos/1100/400" 
                title="Order Your Favorite Food!"
                actionText="Order Pizza"
                actionOnClick={() => history.push('/pizza')}
            />
            {/* RESTAURANT LIST */}
        </div>
    )
}
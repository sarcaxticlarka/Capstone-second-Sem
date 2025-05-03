import React from 'react'
import Hero from "./sections/hero"
import PropertyCard from './sections/propertCard'
import DiscoverAll from './sections/discoverAll'
import Featured from "./sections/featured"
import Testimonial from './sections/testimonials'
import BlogSec from "./sections/blog"
const page = () => {
    return (
        <div>
            <Hero />
            <PropertyCard />
            <DiscoverAll/>
            <Featured/>
            <Testimonial/>
            <BlogSec/>
        </div>
    )
}

export default page
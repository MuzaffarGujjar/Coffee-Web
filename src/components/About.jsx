import React from 'react'
import img from "../assets/img/about.jpg"
import Button from '../layouts/Button'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroungColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>

            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-2/4'>
                    <img className='rounded-lg' src={img} alt="img" />
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h2>

                    <p>Welcome to our coffee Pulse! At [Coffee Pulse],
                        We are passionate about crafting exceptional
                        coffee experiences. From bean to cup, our
                        commitment to quality, sustainability, and
                        community shines through every aromatic
                        brew we serve.</p>
                    <p>Passionate about coffee, we bring you
                        exquisite blends curated with
                        dedication. Explore our journey
                        from bean to cup, savoring excellence.
                    </p>

                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About
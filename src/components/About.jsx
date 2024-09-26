import React, { useRef } from 'react'

const About = () => {
    
    return (
        <div id='about' className='relative w-full flex items-center justify-around gap-10 px-10 pt-24 flex-wrap'>
            <div className='flex flex-col'>
            <h2 className="text-5xl font-extrabold text-primary mb-6 text-center about">About Us</h2>
            <img className='w-[80%] about-img rounded-md mx-[10%]' src="./about.jpeg" alt="img" />
            </div>
            <div className='flex flex-col gap-4 leading-5 tracking-tight text-lg font-medium pb-10 text about-p'>
                <p>
                    Welcome to Gastronomy Delight, where culinary excellence meets a sophisticated ambiance. Established in 2024, our restaurant is a haven for food enthusiasts who appreciate the art of fine dining. Located in the heart of the city, Gastronomy Delight offers a unique blend of contemporary and classic cuisine, crafted with the freshest ingredients and the finest techniques.
                </p>
                <p>
                    At Gastronomy Delight, we believe that dining is not just about food, but an experience. Our meticulously designed interior, featuring deep red and gold accents, creates a luxurious yet comfortable setting for our guests. Whether you are here for a romantic dinner, a business meeting, or a special celebration, we strive to make every moment memorable.
                </p>
                <p>
                    Our team of expert chefs, led by renowned head chef [Chef's Name], is dedicated to delivering dishes that are as visually stunning as they are delicious. With a menu that evolves with the seasons, we offer a range of dishes that cater to diverse palates while maintaining the highest standards of quality and taste.
                </p>
                <p>
                    We invite you to join us at Gastronomy Delight, where every meal is a celebration of culinary artistry and hospitality. Come and experience the magic of fine dining like never before.
                </p>
            </div>
        </div>
    )
}

export default About
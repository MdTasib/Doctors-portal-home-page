import React from 'react';
import rakib from '../../../images/rakib.png';
import tabassom from '../../../images/tabassom.png';
import tanha from '../../../images/tanha.png';
import quote from '../../../images/quote.png';
import Testimonial from '../Testimonial/Testimonial';


const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: rakib,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: tabassom,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: tanha
    }
]

const Testimonials = () => {
    return (
        <section className='testimonials py-5'>
            <div className="container">
                <div className="row mb-3">
                    <div className="testimonials-header col-md-6">
                        <h5 className="active">TESTIMONIALS</h5>
                        <h2>What's Our Patients <br />Says</h2>
                    </div>
                    <div className="col-md-6 text-right">
                        <img style={{ height: '150px' }} src={quote} alt="" />
                    </div>
                </div>
                <div className="card-deck ">
                    {
                        testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
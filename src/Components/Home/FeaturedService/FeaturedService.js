import React from 'react';
import featured from '../../../images/feature.png';

const FeaturedService = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className='img-fluid' src={featured} alt="Feature" />
                    </div>
                    <div className="col-md-7 pt-3">
                        <h1>Exceptional Dental <br />Care on Your Terms</h1>
                        <p className='py-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, atque temporibus dolor, delectus corporis repudiandae deserunt quod ab quo autem quam cumque neque impedit dolores architecto aliquam tempore eveniet facere?  Odit, atque temporibus dolor, delectus corporis repudiandae deserunt quod ab quo autem quam cumque neque impedit dolores architecto aliquam tempore eveniet facere? Odit, atque temporibus dolor, delectus corporis repudiandae deserunt quod ab quo autem quam cumque neque impedit dolores architecto aliquam tempore eveniet facere?</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;

import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='mx-6'>
            <div className='flex justify-between'>
                <div className='mt-[50px]'>
                    <h3>Testimonial</h3>
                    <h2>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='max-w-[192px] h-[156px]' src={quote} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
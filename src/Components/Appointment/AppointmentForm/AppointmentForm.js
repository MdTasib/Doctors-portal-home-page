import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control my-2' placeholder='Name' type="text" {...register("name")} required />
                    <input className='form-control my-2' placeholder='Your email' type='email' {...register("email")} required />
                    <input className='form-control my-2' placeholder='phone number' type='number' {...register("number")} required />
                    <select className='form-control my-2'  {...register("gender")} required>
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                        <option value="other">others</option>
                    </select>

                    <input className='form-control my-2' placeholder='Age' type='number' {...register("age")} required />
                    <input className='form-control my-2' placeholder='mm/dd/yyyy' type='date' {...register("date")} required />

                    <input className='btn btn-cane' type="submit" value='send' />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
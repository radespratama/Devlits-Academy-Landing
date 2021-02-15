import React from 'react'
import Preview from '../../../public/images/icon/icon-preview.svg';
import Modal from '../../components/Modal'

export default function CoursePhoto({data}) {
    return (
        <div className="w-1/3 px-4">
            <div className="item relative">
                <figure className="item-image">
                    <Preview></Preview>
                    <img src={data} alt={data} className="object-cover h-32 w-full"/>
                </figure>
                <Modal content={(toggle)=> <img src={data} alt={data}/> }>
                    {
                        toggle => <span onClick={toggle} className="link-wrapped"></span>
                    }
                </Modal>
            </div>
        </div>
    )
}

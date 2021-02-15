import React from 'react'

import Star from '../../components/Star'
export default function HappyStudents({data}) {
    return (
        <div className="mt-8">
            <Star value={data?.rating ?? 0} width={26} height={26}></Star>
            <p className="text-gray-600 mt-1">{data?.note ?? 'Testimonial Reviews'}</p>
            <div className="flex items-center mt-4">
                <div className="rounded-full overflow-hidden">
                    <img src={data?.users?.avatar ?? 'Photo Profile Students'} alt={data?.users?.name ?? 'Alternative name'} className="w-14 h-14 object-cover"/>
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-900">
                        {data?.users?.name ?? 'Name Students'}
                    </h2>
                    <h3 className="text-md text-gray-500">
                        {data?.users?.profession ?? 'Students Profession'}
                    </h3>
                </div>
            </div>
        </div>
    )
}

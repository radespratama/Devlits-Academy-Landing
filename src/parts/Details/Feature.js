import React from 'react'
import FormatThousand from '../../helpers/formatThousand'

export default function FeaturesCourses({ data }) {
    return (
        <div className="shadow-sm bg-white p-6 my-2 rounded-md w-full md:w-1/3" style={{ width: 290 }}>
            <div className="flex">
                <div className="w-auto">
                    {data.icon}
                </div>
                <div className="ml-5">
                    <span className="text-gray-500 block">
                        {data.meta}
                    </span>
                    <span className="text-gray-900 text-3xl">
                        {
                            typeof data.value === "number" ? FormatThousand(data.value) : data.value
                        }
                    </span>
                </div>
            </div>
        </div>        
    )
}

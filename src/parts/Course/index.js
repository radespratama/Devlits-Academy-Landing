import Link from 'next/link'
import RenderItem from './RenderItem'

export default function Course({ data }) {
    return (
        <>
        <div className="flex justify-between items-center">
            <div className="w-auto mt-5">
                <h2 className="text-lg text-gray-600">New Classes</h2>
                <h3 className="text-xl text-gray-900">
                    Summer <span className="text-gray-600">Productive</span>
                </h3>
            </div>
            <div className="w-auto">
                <Link href="/courses"><a className="text-gray-600 hover:underline text-sm">View All Course</a></Link>
            </div>
        </div>
        <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
            {
                data?.length > 0 ? data.map( (item, index)=> {
                    return <RenderItem item={item } key={index}></RenderItem>
                }) : <div className="w-full text-center py-12">
                    Item not Found
                </div>
            }
        </div>
        </>
    )
}

import RenderCategory from './RenderCategory'

import IconWriter from '../../../public/images/icon/icon-content-writer.svg'
import IconGame from '../../../public/images/icon/icon-game-development.svg'
import IconMobile from '../../../public/images/icon/icon-mobile-development.svg'
import IconPen from '../../../public/images/icon/icon-pen.svg'
import IconProduct from '../../../public/images/icon/icon-product-advertisement.svg'
import IconWeb from '../../../public/images/icon/icon-web-development.svg'

export default function Category() {

    const data = [
        {
            imageName: <IconWriter />,
            name: "Content Writer",
            total: 1153,
            linkIcon: "/",
        },
        {
            imageName: <IconGame />,
            name: "Game Development",
            total: 2932,
            linkIcon: "/",
        },
        {
            imageName: <IconMobile />,
            name: "Mobile Development",
            total: 2452,
            linkIcon: "/",
        },
        {
            imageName: <IconPen />,
            name: "Graphic Designer",
            total: 1523,
            linkIcon: "/",
        },
        {
            imageName: <IconProduct />,
            name: "Product Advertisement",
            total: 1674,
            linkIcon: "/",
        },
        {
            imageName: <IconWeb />,
            name: "Web Development",
            total: 3552,
            linkIcon: "/",
        }
    ]

    return (
        <>
        <div className="flex justify-between items-center">
            <div className="w-auto mt-5">
                <h2 className="text-lg text-gray-600">Category</h2>
                <h3 className="text-xl text-gray-900">
                    Explore & <span className="text-gray-600">Learn</span>
                </h3>
            </div>
        </div>
        <div className="flex flex-wrap justify-center items-center -mx-4 mt-6">
            {
                data ?.length > 0 ? data.map( (item, index2)=> {
                    return <RenderCategory item={item } key={index2}></RenderCategory>
                }) : <div className="w-full text-center py-12">
                    Category not found
                </div>
            }
        </div>
        </>
    )
}

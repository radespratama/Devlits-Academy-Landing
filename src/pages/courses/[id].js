import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../../parts/Header'
import APICourses from '../../API/APIcourses'
import Youtube from 'react-youtube'
import {CSSTransition} from 'react-transition-group'
import CoursePhoto from '../../parts/Details/CoursePhoto';
import RenderPreview from '../../parts/Details/RenderPreview'
import Feature from '../../parts/Details/Feature';
import HappyStudents from '../../parts/Details/HappyStudents'

import Student from '../../../public/images/icon/icon-student.svg'
import Video from '../../../public/images/icon/icon-video.svg'
import Trophy from '../../../public/images/icon/icon-trophy.svg'

import FormatThousand from '../../helpers/formatThousand'
import Footer from '../../parts/Footers'

function DetailsCourse({data}) {

    const footer = useRef(null)

    const [isSticky, setisSticky] = useState(()=> true)
    useEffect(() => {
        const stickyOffsetTop = footer.current.getBoundingClientRect().top
        const stickyMetaToggler = () => {
            setisSticky( stickyOffsetTop >= window.pageYOffset + window.innerHeight)
        }

        window.addEventListener('scroll', stickyMetaToggler)
        return () => {
            window.removeEventListener('scroll', stickyMetaToggler)
        }
    }, [])
    // console.log(data);
    return (
        <>
           <Head>
               <title>{data.name} | Devlits Academy</title>
           </Head>
            <section className="pt-10 relative overflow-hidden" style={{ height: 660 }}>
            {
                    data?.chapters?.[0]?.lessons?.[0]?.video && 
                    <div className="video-wrapper">
                        <Youtube
                            videoId={data?.chapters?.[0]?.lessons?.[0].video}
                            id={data?.chapter?.[0]?.lessons?.[0]?.video}
                            opts={{ 
                                playerVars: {
                                    loop: 1,
                                    mute: 1,
                                    autoplay: 1,
                                    controls: 0,
                                    showinfo: 0
                                }
                            }}
                            onEnd={(event)=> {
                                event.target.playVideo()
                            }}
                        
                        ></Youtube>
                    </div>
                }
                <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
                <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-lg text-white">
                            Kelas Online :
                        </h3>
                        <h4 className="text-6xl text-white font-semibold">
                            {data?.name ?? 'Nama Course'}
                        </h4>
                    </div>
                </div>
                <div className="container mx-auto z-10 relative">
                    <Header></Header>
                </div>
            </section>
            <section className="container mx-auto pt-24 relative">
                <div className="absolute top-0 w-full transform -translate-y-1/2">
                    <div className="w-3/4 mx-auto">
                        <div className="flex justify-between">
                            {/* Setting Component tolong dipelajarin! */}
                            <Feature data={{ 
                                icon: <Student className="fill-teal-500" />,
                                meta: "Student",
                                value: data?.total_student ?? 0
                             }} />
                            <Feature data={{ 
                                 icon: <Video className="fill-teal-500" />,
                                 meta: "Video",
                                 value: data?.total_videos ?? 0
                            }}/>
                            <Feature data={{ 
                                icon: <Trophy className="fill-teal-500" />,
                                meta: "Certificate",
                                value: data?.certificate === 1 ? 'Tersedia' : '-'
                            }} 
                            />
                        </div>
                    </div>
                </div>

                <div className="sticky-courses">
                    <CSSTransition in={isSticky} timeout={300} classNames="meta-price" unmountOnExit>
                        <div className="meta-price w-full bg-white z-10 left-0 py-3">
                            <div className="w-3/4 mx-auto">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <h2 className="text-gray-600">Nama Kelas</h2>
                                        <h3 className="text-2xl text-gray-900">{data?.name ?? 'nama kelas'}</h3>
                                    </div>
                                    <h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
                                        {data?.type === 'free' ? 'Free' : <span>Rp. {FormatThousand(data?.price ?? 'Premium')}</span>}
                                    </h5>
                                    <a className="bg-blue-700 hover:bg-blue-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-no-wrap" href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`} target="_blank" rel="noopener noreferer">
                                        {data?.type === 'free' ? 'Enroll Now' : 'Buy Now'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div className="w-3/4 mx-auto mt-8">
                    <div className="w-3/4">

                        <section>
                            <h6 className="font-medium text-gray-900 text-2xl mb-4">
                                About <span className="text-teal-500">Course</span>
                            </h6>
                            <p className="text-gray-600 text-lg leading-relaxed mb-3">
                                {data?.description ?? 'Coming soon'}
                            </p>
                        </section>
                        
                        {/* Section Photo Preview and Rendering */}
                        <section className="mt-10">
                            <h6 className="font-medium text-gray-900 text-2xl mb-4">
                                Course <span className="text-teal-500">Photo</span>
                            </h6>
                            <div className="flex flew-wrap justify-start items-center -mx-4 mt-6">
                                {
                                    data?.images?.length > 0 ? 
                                    data?.images?.map?.((photo, index)=> (<CoursePhoto data={photo.image} key={index}/>))
                                    : <div className="w-full text-center py-12">Course Photo Coming Soon</div>
                                }
                            </div>
                        </section>
                        
                        {/* Section Video Preview and Rendering */}
                        <section className="mt-10">
                            <h6 className="font-medium text-gray-900 text-2xl mb-4">
                                You Will <span className="text-teal-500">Learn</span>
                            </h6>
                            {
                                data?.chapters?.length > 0 ?
                                <RenderPreview previews={data.chapters}></RenderPreview> 
                                : <div className="w-full text-center py-12">Chapter Coming Soon</div>
                            }
                        </section>

                        {/* Mentor */}
                        <section className="mt-12 w-2/3">
                            <h6 className="font-medium text-gray-900 text-2xl mb-4">
                                Our <span className="text-teal-500">Instructor</span>
                            </h6>
                            <div className="flex items-center">
                                <img src={data?.mentor?.profile ?? ''} alt={data?.mentor?.name ?? 'Nama Mentor'} className="w-20 h-20 rounded-full overflow-hidden object-cover"/>
                                <div className="ml-4">
                                    <h2 className="text-lg text-gray-900">
                                        {data?.mentor?.name ?? 'Nama Mentor'}
                                    </h2>
                                    <h3 className="text-sm text-gray-600">
                                        {data?.mentor?.profession ?? 'Profesi Mentor'}
                                    </h3>
                                </div>
                            </div>
                        </section>

                        {/* Happy Students */}
                        <section className="mt-10 w-6/12">
                            <h6 className="font-medium text-gray-900 text-2xl mb-4">
                                Happy <span className="text-teal-500">Students</span>
                            </h6>
                            {
                                data?.reviews?.map?.( (testimonial, index2)=> {
                                    return <HappyStudents key={index2} data={testimonial}></HappyStudents>
                                })
                            }
                        </section>
                    </div>
                </div>
            </section>
            <section className="mt-24 bg-indigo-1000 py-12" ref={footer}>
                <Footer></Footer>
            </section>
        </>
    )
}

DetailsCourse.getInitialProps = async(props)=> {
    // Mengambil id dari body
    const { id } = props.query;
    try {
        const data = await APICourses.details(id)
        return { data }      //Memunculkan data dari data axios
    } catch (error) {
        
    }
}

export default DetailsCourse
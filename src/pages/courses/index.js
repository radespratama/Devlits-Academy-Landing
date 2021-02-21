import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import APICourses from '../../API/APIcourses'
import Header from '../../parts/Header'
import Footer from '../../parts/Footers'
import Courses from '../../parts/Course'

export default function CoursesLibrary({ data }) {
    
    const [Search, setSearch] = useState(()=> "")
    const [SearchFocus, setSearchFocus] = useState(()=> false)
    const [SearchResponse, setSearchResponse] = useState(()=> ({ isLoading: false, isError: false, data: [] }))

    const selectWrapper = useRef(null)
    function clickOutside(event){
        if(selectWrapper && !selectWrapper.current.contains(event.target)){
            setSearch("")
        }
    }

    let timeoutSearch = useRef(null)
    function handleSearch(e){
        e.persist()
        setSearch(e.target.value)
        clearTimeout(timeoutSearch.current)
        timeoutSearch.current = setTimeout(()=> {
            setSearchResponse({
                isLoading: true, isError: false, data: null
            })
            APICourses.all({params: { q: e.target.value }})
            .then((res) => {
                setSearchResponse({
                    isLoading: false, isError: false, data: res.data
                })
            }).catch(err => {
                setSearchResponse({
                    isLoading: false, isError: true, data: null
                })
            })
        }, 1000)
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickOutside)
        return () => {
            window.removeEventListener("mousedown", clickOutside)
        }
    }, [])

    return (
        <>
        <Head>
            <title>DevlitsAcademy | Library</title>
        </Head>
       <section className="pt-10 z-10 relative" style={{ height: 360 }}>
            <div className="absolute inset-0 z-0 w-full h-full bg-indigo-1000 bg-custom"></div>
            <div className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center" style={{ marginBottom: "-25px" }}>
                <div className="px-4">
                    <h3 className="text-6xl text-center text-teal-500 font-semibold">
                        Library
                    </h3>
                    <h4 className="md:text-lg text-base text-center text-white">
                        Jangan mau kalah update dengan yang lainnya! <br/>
                        Yuk Ikuti perkembangan teknologi saat ini.
                    </h4>
                    <div className="flex flex-col relative" ref={selectWrapper}>
                        <input id="q" 
                        onChange={handleSearch} 
                        onFocus={()=> setSearchFocus(!SearchFocus)} 
                        onBlur={()=> setSearchFocus(!SearchFocus)} 
                        value={Search} 
                        placeholder={SearchFocus ? "Ketik minimal 3 karakter untuk mencari" : 'Lagi nyari kelas apa ?'} 
                        type="text" 
                        className="bg-white focus:outline-none px-4 py-3 w-full mt-6 shadow-sm rounded-lg"
                        />
                        {Search.length >= 3 && <div className="flex flex-col absolute py-2 px-4 bg-white border rounded-lg border-gray-400 w-full"
                        style={{ top: 75 }}>
                            {
                                SearchResponse.isLoading ? 'Loading . . .' : 
                                <>
                                    { SearchResponse.isError && 'Something is Technically wrong' }
                                    {
                                        SearchResponse.data?.length > 0 ?
                                        SearchResponse.data?.map((item, index3)=> {
                                        return (
                                        <div key={index3} className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative">
                                            <div className="w-auto px-4" style={{ width: 150 }}>
                                                <img src={item?.thumbnail ?? ''} alt={item?.name ?? 'Course Name'}/>
                                            </div>
                                            <div className="w-full px-4">
                                                <h6 className="text-gray-900 text-lg">{item?.name ?? 'Course Name'}</h6>
                                                <p className="text-gray-600">{item?.level ?? 'Course Level'}</p>
                                                <Link href="/courses/[id]" as={`/courses/${item.id}`}><a className="link-wrapped"></a></Link>
                                            </div>
                                        </div>
                                        )
                                        }) : 'Course not found'
                                    }
                                </>
                            }
                        </div>}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 z-10 relative">
                <Header></Header>
            </div>
       </section>
       <section className="container px-4 mx-auto pt-24">
            <Courses data={data}></Courses>
        </section>
       <section className="mt-24 bg-indigo-1000 py-12">
            <Footer></Footer>
        </section>
            
        </>
    )
}

CoursesLibrary.getInitialProps = async()=> {
    try {
        const data = await APICourses.all();
        return { data: data.data };
    } catch (error) {
        return error
    }
}
import Head from 'next/head'
import axios from '../configs/axios'

import Circle from '../../public/images/circle-asscent-1.svg'

import Header from '../parts/Header'
import Hero from '../parts/Hero'
import Clients from '../parts/Clients'
import Course from '../parts/Course'
import Category from '../parts/Category'
import Footer from '../parts/Footers'

import APICourses from '../API/APIcourses'

function Home({data}) {
    return (
        <> 
            <Head>
                <title>Devlits Academy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="antialiased">
                <section className="header-clipping pt-10">
                    <Circle className="absolute left-0 bottom-0"></Circle>
                    <div className="sunshine"></div>
                    <div className="container mx-auto">
                        <Header></Header>
                        <Hero></Hero>
                    </div>
                </section>
                <section className="container mx-auto pt-24">
                    <Clients></Clients>
                </section>
                <section className="container mx-auto pt-24">
                    <Course data={data}></Course>
                </section>
                <section className="container mx-auto pt-24">
                    <Category></Category>
                </section>
                <section className="mt-24 bg-indigo-1000 py-12">
                    <Footer></Footer>
                </section>
            </main>
        </>
    )
}

Home.getInitialProps = async() => {
    try {
        const data = await APICourses.all();
        return { data: data.data };
    } catch (error) {
        return error
    }
}

export default Home
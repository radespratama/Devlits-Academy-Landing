import React, { useState } from 'react'
import Typical from 'react-typical'

export default function Hero() {
    const [member, setMember] = useState(()=> (""))
    
    function submit(){
        window.open(`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${member}`)
    }
    return (
        <div className="flex justify-between items-center hero-section">
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h1 className="text-5xl text-white mb-5 leading-snug font-semibold tracking-wide">
                    <span className="text-teal-400">The New</span> Way to <br className="hidden md:block"/>
                    Archive Good <span className="text-teal-400">Skill</span>
                </h1>
                <p className="text-white text-md mb-8 describe-course font-light">
                    We provide tons of path skill that you <br className="hidden md:block" /> can choose and focus on
                </p>
                <form onSubmit={submit} className="flex">
                    <input type="text" onChange={(e) => setMember(e.target.value)} className="bg-white focus:outline-none border-0 md:px-6 px-4 w-full py-3 md:w-1/2" value={member} placeholder="Your email address"/>
                    <button className="bg-blue-600 hover:bg-blue-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">Register Now</button>
                </form>
            </div>
            <div className="hidden w-1/2 md:flex justify-end pt-24 pr-16">
                <div className="relative" style={{ width: 369, height: 440 }}>
                    <div className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0" style={{ width: 324, height: 374 }}></div>
                    <div className="absolute w-full h-full -mb-8 -ml-8">
                        <img src="/images/img-hero.jpg" alt="User Reviews"/>
                    </div>

                    <div className="absolute z-10 bg-white py-3 px-4 mt-24" style={{ transform: "translateX(-66%)", width: 290 }}>
                        <p className="text-gray-900 mb-2">
                        Metode belajar yang santai dan banyak{" "}
                        <Typical 
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'mentor yang asik.',
                                3500,
                                'UI Kit untuk developer.',
                                3500,
                                'materi yang up to date.',
                                3500
                            ]}
                        />
                        </p>
                        <span className="text-gray-600">Rikal, Mobile Developer</span>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

import React from 'react'

export default function Clients() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/6">
                <img src="/images/logo-amazon.svg" alt="Amazon.com: Online Shopping for Electronic, Computers, Books, & more" className="mx-auto"/>
            </div>
            <div className="w-1/6">
                <img src="/images/logo-tesla.svg" alt="Tesla, Inc." className="mx-auto"/>
            </div>
            <div className="w-1/6">
                <img src="/images/logo-microsoft.svg" alt="Microsoft Corporation" className="mx-auto"/>
            </div>
            <div className="w-1/6">
                <img src="/images/logo-google.svg" alt="Google LLC" className="mx-auto"/>
            </div>
            <div className="w-1/6">
                <img src="/images/logo-facebook.svg" alt="Facebook, Inc." className="mx-auto"/>
            </div>
        </div>
    )
}

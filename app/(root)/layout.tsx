import React from "react";

const RootLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <section className=''>
            <div className=''>
                {children}
            </div>
        </section>
    )
}
export default RootLayout;
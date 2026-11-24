import React from 'react'

export default function HeaderPage({ headerImage, direction }: { headerImage: string, direction?: string }) {
    return (
        <div className="header-page">
            <div className="header-page-content grid grid-cols-3 gap-4 justify-items-center items-start text-xl font-bold text-center pb-4">
                <div className=" flex flex-col justify-self-start gap-2">
                    <h1 className="mb-2 text-base leading-8">
                        الجمهورية العربية السورية
                        <br />
                        وزارة الدفاع
                        <br />
                    </h1>
                    <p className='text-xs text-start'>
                        الجهة: {direction}
                    </p>
                </div>
                <div className="logo max-w-32 flex items-center justify-center flex-1">
                    <img src={headerImage} alt="logo" className="w-full h-full object-contain" />
                </div>
                <h1 className="text-base font-bold text-center flex flex-col gap-1 justify-self-end pt-4">
                    <span>
                        Syrian Arab Republic
                    </span>
                    <span>
                        Ministry of Defense
                    </span>
                </h1>
                <hr className='col-span-3 w-full max-w-[95%] border-t-2' />
            </div>
        </div>

    )
}

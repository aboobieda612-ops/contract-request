import React from 'react'

export default function HeaderForm({ titleForm, subtitle, idSlef = "", idCotract = '' }: { titleForm: string, subtitle?: string, idSlef?: string, idCotract?: string }) {
    return (
        <div className="header-request flex flex-col gap-1 items-center text-center font-bold text-lg mb-2">
            <div className="title-form flex justify-between items-center gap-2 w-full">
                <div className='flex items-center justify-start gap-6 flex-1 text-xs text-start font-normal'>

                    {
                        idSlef &&
                        <span>
                            الرقم الذاتي: {idSlef}
                        </span>
                    }
                    {
                        idCotract &&
                        <span>
                            الرقم الاستمارة: {idCotract}
                        </span>
                    }
                </div>
                <h1 className='text-base flex-1 max-w-32'>
                    ({titleForm})
                </h1>
                <div className='flex items-center justify-between gap-2 flex-1'>

                </div>
            </div>
            {
                subtitle &&
                <h2>
                    {subtitle}
                </h2>
            }
        </div>
    )
}

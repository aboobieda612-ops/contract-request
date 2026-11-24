import React from 'react'

export default function Terms({ listTerms = [], importantTerms = [] }: { listTerms?: string[], importantTerms?: string[] }) {
    return (
        <div className='bg-black/5 p-2'>
            <h4 className="title-terms text-red-600 underline font-bold text-sm mb-2">
                الشروط
            </h4>
            <ul className='flex flex-col gap-2 mb-4'>
                {
                    listTerms.length > 0 && listTerms.map((term, i) => {
                        return <li className='text-xs' key={`Term-${i}`}>
                            {term}
                        </li>
                    })
                }
            </ul>
            <ul className='ms-8 list-disc'>
                {
                    importantTerms.length > 0 && importantTerms.map((importantTerm, i) => {
                        return <li className='text-xs text-red-600' key={`Important Term-${i}`}>
                            {importantTerm}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

import React from 'react'
import { getDateDiff, getDateParts, getHijriDate } from '../lib/dateFormat';

export default function FooterForm({ additionDate }: { additionDate?: string }) {
    return (
        <div className="flex justify-center items-center text-start font-normal gap-1 flex-wrap text-xs mt-4 border border-black/20 border-dashed py-2 max-w-[90%] mx-auto">
            في:
            &nbsp;
            {getHijriDate(additionDate, 'islamic-civil')?.year}/
            {getHijriDate(additionDate, 'islamic-civil')?.month}/
            {getHijriDate(additionDate, 'islamic-civil')?.day}
            &nbsp;
            الموافق:
            &nbsp;
            {getDateParts(additionDate)?.year}/
            {getDateParts(additionDate)?.month}/
            {getDateParts(additionDate)?.day}
        </div>
    )
}

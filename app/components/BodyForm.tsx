import React from 'react'
import Terms from './Terms';
import { User } from '../types/user.types';
import { getDateDiff, getDateParts } from '../lib/dateFormat';

export default function BodyForm({ formData }: { formData?: User }) {
    const listTerms = [
        "- أن يكون الفريق الثاني غير مرتبط مع أي جهة أو عمل آخر بتاريخ تنظيم هذا العقد.",
        "- لا يحق للفريق الثاني أن يطالب بأي مساعدات مالية أو عينية أو تعويضات أو مصاريف أو أجور غير المتفق عليه.",
        "- في حال رغبة الفريق الثاني في إنهاء العمل بأحكام هذا العقد يجب عليه إبلاغ الفريق الأول خطيا قبل مدة لا تقل عن شهر.",
        "- في حال تركه العمل بدون إذن يحرم من جميع حقوقه المالية.",
        "- في حال رغبة الفريق الأول في إنهاء العمل بأحكام هذا العقد يجب عليه إبلاغ الفريق الثاني قبل مدة لا تقل عن شهر."
    ]
    const importantTerms = [
        "تنويه: يحب ارفاق، صورة عن الهوية الشخصية / بيان عائلي/ صورة عن الشهادة العلمية"
    ]
    const startDate = formData?.extraFields?.['تاريخ البدء'];
    const endDate = formData?.extraFields?.['تاريخ الانتهاء'];
    const dateDiff = getDateDiff(startDate, endDate)
    console.log(dateDiff?.remainingDays);

    return (
        <div className='flex flex-col gap-4'>
            {/* Main Info */}
            <div className='flex gap-2 text-xs text-center'>
                <table className="w-full border-collapse border border-black">
                    <thead>
                        <tr>
                            <td className='border border-black bg-[#008236] text-white py-1'>
                                الفريق الأول
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className='border border-black py-1'>
                                وزارة الدفاع \ السوية التنظيمية الأولى
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-black py-1'>
                                &nbsp;
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="w-full border-collapse border border-black">
                    <thead>
                        <tr>
                            <td className='border border-black bg-[#008236] text-white py-1'>
                                الفريق الثاني
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className='border border-black py-1 text-start px-2'>
                                الاسم الثلاثي: {formData?.fullName}
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-black py-1 text-start px-2'>
                                اسم ونسبة الأم: {formData?.motherName}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-nowrap flex items-center justify-center text-gray-400 w-32 h-20 shrink-0'>
                    {/* <img src="https://placehold.co/354x472" alt="User Image" className='w-full h-full object-contain' /> */}
                    ضع الصورة هنا
                </div>
            </div>

            {/* Sub Info */}
            <div className='flex gap-6 text-[10px] text-center text-nowrap'>
                <table className='w-full border-collapse border border-black'>
                    <tbody>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السوية التنظيمية الثانية
                            </td>
                            <td className='border border-black'>
                                {formData?.orgLevel2}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السوية التنظيمية الثالثة
                            </td>
                            <td className='border border-black'>
                                {formData?.orgLevel3}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السوية التنظيمية الرابعة
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السوية التنظيمية الخامسة
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                مسمى العمل
                            </td>
                            <td className='border border-black'>
                                {formData?.jobTitle}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                الرمز الوظيفي
                            </td>
                            <td className='border border-black text-[8px]'>
                                {formData?.jobTitleId}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                عدد الزوجات
                            </td>
                            <td className='border border-black'>
                                {formData?.wivesCount}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                عدد الأبناء
                            </td>
                            <td className='border border-black'>
                                {formData?.childrenCount}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                التولد
                            </td>
                            <td className='border border-black'>
                                {formData?.birthDate}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                رقم التواصل
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='w-full border-collapse border border-black'>
                    <tbody>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                الرقم الوطني
                            </td>
                            <td className='border border-black'>
                                {formData?.nationalId}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                الشهادة العلمية
                            </td>
                            <td className='border border-black'>
                                {formData?.academicDegree}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                المرحلة الدراسية
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                الاختصاص
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السنة التي أتمها
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                سنة التخرج
                            </td>
                            <td className='border border-black'>

                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                قيمة الراتب بالدولار
                            </td>
                            <td className='border border-black'>
                                {formData?.salaryUsd}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                نظام الدوام
                            </td>
                            <td className='border border-black'>
                                {formData?.workSchedule}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                البلد الأصلي
                            </td>
                            <td className='border border-black'>
                                {formData?.originGovernorate}
                            </td>
                        </tr>
                        <tr>
                            <td className='bg-[#ccc] py-1.5 w-1/2 border border-black'>
                                السكن الحالي
                            </td>
                            <td className='border border-black'>
                                {formData?.currentResidence}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Contract Date */}
            <div className="flex items-center text-start font-normal gap-1 flex-wrap text-xs mb-2">
                مدة العقد تبدأ من: {getDateParts(startDate)?.day}\{getDateParts(startDate)?.month}\{getDateParts(startDate)?.year}م;
                وتنتهي  حتى:
                {getDateParts(endDate)?.day}\{getDateParts(endDate)?.month}\ {getDateParts(endDate)?.year};
                وبذلك تكون المدة هي:
                {
                    dateDiff?.years &&
                    <>
                        &nbsp;{dateDiff.years} سنة و
                    </>
                }
                {

                    dateDiff?.months &&
                    <>
                        &nbsp; {dateDiff.months} أشهر و
                    </>
                }
                {
                    dateDiff?.remainingDays &&
                    <>
                        &nbsp;{dateDiff.remainingDays} يوماً
                    </>
                }
            </div>

            {/* Terms */}
            <Terms listTerms={listTerms} importantTerms={importantTerms} />

            {/* Signtures */}
            <div className="flex gap-4 text-center h-32">
                <div className="flex flex-col gap-1 border border-black/20 border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                    <h4>
                        توقيع المتعاقد
                    </h4>
                </div>
                <div className="flex flex-col gap-1 border border-black/20 border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                    <h4>
                        رئيس فرع القوى البشرية
                    </h4>
                </div>
                <div className="flex flex-col gap-1 border border-black/20 border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                    <h4>
                        قائد السويةالتنظيمية الأولى
                    </h4>
                </div>
            </div>
        </div>
    )
}

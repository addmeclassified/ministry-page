import React from 'react';
import { Check, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

type VisaInfo = {
    certificateType: string;
    nationality: string;
    visaNumber: string;
    visaType: string;
    visaStatus: string;
    expiryDate: string;
    latinName: string;
    arabicName: string;
    passportNumber: string;
};

const InfoField = ({ label, value, labelAr }: { label: string; value: string; labelAr: string}) => (
    <div className={`border border-gray-350 rounded p-2 bg-white flex flex-col items-center`}>
        <div className={`text-sm text-black font-bold mb-1 text-center`}>
            {label} {labelAr}
        </div>
        <div className={`text-gray-500 font-bold text-center`}>{value}</div>
    </div>
);

const VisaVerification = () => {
    const visaInfo: VisaInfo = {
        certificateType: "Electronic Visa تأشيرة إلكترونية",
        nationality: "سيلان - سريلانكا SRI LANKA",
        visaNumber: "26289671",
        visaType: "Private Sector Work Visa سمة دخول عمل أهلي",
        visaStatus: "Approved معتمدة",
        expiryDate: "2024-10-22",
        latinName: "MURALITHARAN-KARUPPIAH",
        arabicName: "موراليثاران - كاروبياه",
        passportNumber: "N8569713"
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="flex-1">
                {/* Header */}
                <div className="bg-white m-1 mr-10">
                    <div className="max-w-4xl mx-auto py-4 px-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-gray-600 text-sm">State of #########</p>
                                <p className="text-blue-600 text-sm font-bold">Ministry of ######</p>
                            </div>
                            <img
                                src="/logo.png"
                                alt="###### MOI Logo"
                                className="w-20 h-20"
                            />
                            <div className="text-right">
                                <p className="text-gray-600 text-sm">حالة #####</p>
                                <p className="text-blue-600 text-sm font-bold">وزارة ######</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtitle with updated background color */}
                <div className="text-center text-xs text-blue-800 py-3 bg-gray-100 border-b-2 border-gray-300">
                الموقع الرسمي للوثائق والشهادات الصادرة عن وزارة ######<br />
                    The official website to verify documents and certificates issued by Ministry of #######
                </div>

                {/* Valid Document Status */}
                <div className="text-center py-8 flex flex-col items-center">
                    <div className="rounded-full bg-emerald-100 p-4 mb-2">
                        <Check className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="text-emerald-500 font-medium">وثيقة صالحة</div>
                    <div className="text-emerald-500 font-medium">Valid document</div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-1 mb-8">
                    {/* Certificate Type */}
                    <div className="border border-gray-300 rounded-lg bg-white mb-4 p-4 text-center">
                        <div className={`text-sm text-black font-bold mb-1`}>
                            Certificate Type
                        </div>
                        <div className={`text-gray-500 font-bold`}>{visaInfo.certificateType}</div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InfoField
                            label="Nationality"
                            labelAr="الجنسية"
                            value={visaInfo.nationality}
                        />
                        <InfoField
                            label="Visa Number"
                            labelAr="رقم التأشيرة"
                            value={visaInfo.visaNumber}
                        />
                        <InfoField
                            label="Visa Type"
                            labelAr="نوع التأشيرة"
                            value={visaInfo.visaType}
                        />
                        <InfoField
                            label="Visa Status"
                            labelAr="حالة التأشيرة"
                            value={visaInfo.visaStatus}
                        />
                        <InfoField
                            label="Expiry Date"
                            labelAr="تاريخ الانتهاء"
                            value={visaInfo.expiryDate}
                        />
                        <InfoField
                            label="Latin Name"
                            labelAr="الاسم اللاتيني"
                            value={visaInfo.latinName}
                        />
                        <InfoField
                            label="Arabic Name"
                            labelAr="الاسم العربي"
                            value={visaInfo.arabicName}
                        />
                        <InfoField
                            label="Passport Number"
                            labelAr="رقم الجواز"
                            value={visaInfo.passportNumber}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-1 text-sm text-blue-900 mt-auto bg-gray-100">
                <p className="text-blue-900">جميع الحقوق محفوظة لوزارة ##### - دولة #### © 2022</p>
                <p className="text-blue-900">All Rights Reserved for ###################### © 2022</p>
                <div className="flex justify-center gap-6 mt-2 mb-4">
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Facebook className="w-6 h-5"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Twitter className="w-6 h-5"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Instagram className="w-6 h-5"/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Globe className="w-6 h-5"/>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default VisaVerification;

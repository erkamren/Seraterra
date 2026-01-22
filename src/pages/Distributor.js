import React, { useRef, useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "../context/LanguageContext";
import { CheckIcon } from "@heroicons/react/24/solid";

const COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
].sort();

function Distributor() {
    const [modal, setModal] = useState(false);
    const form = useRef();
    const { language } = useContext(LanguageContext);
    const info =
        language === "tr"
            ? require("./info.json")
            : require("./info.en.json");

    const toggleModal = () => setModal(!modal);

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        // Checkbox'lardan gelen verileri birleştiriyoruz
        const mainActivities = formData.getAll("mainActivity");

        // EmailJS'e gidecek parametreleri hazırlıyoruz
        const templateParams = {
            // Yetkili Kişi Bilgileri
            auth_name: formData.get("authorizedName"),
            auth_job: formData.get("jobTitle"),
            auth_phone: formData.get("authorizedPhone"),
            auth_email: formData.get("authorizedEmail"),

            // Firma Bilgileri
            company_name: formData.get("companyName"),
            est_year: formData.get("establishmentYear"),
            country: formData.get("country"),
            website: formData.get("website"),
            company_email: formData.get("companyEmail") || "Belirtilmemiş",
            company_phone: formData.get("companyPhone"),

            // Faaliyet Alanı
            activities: mainActivities.join(", ") || "Seçilmedi", // Checkboxları virgülle ayırır
            experience: formData.get("experience"),
            brands: formData.get("brands") || "Belirtilmemiş",
            target_countries: formData.get("countries"),

            // Diğer
            other_info: formData.get("otherInfo") || "Yok"
        };

        emailjs
            .send("service_x71qi2v", "template_9676b7h", templateParams, {
                publicKey: "2apfuSJVqULPY9vDj",
            })
            .then(
                () => {
                    toggleModal();
                    form.current.reset(); // Formu temizle
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-36">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {info.distributor.header}
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        {info.distributor.mandatoryFields}
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        {/* Yetkili Kişi */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {info.distributor.authorizedPerson.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.authorizedPerson.name}
                                    </label>
                                    <input
                                        type="text"
                                        name="authorizedName"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.authorizedPerson.jobTitle}
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.authorizedPerson.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        name="authorizedPhone"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.authorizedPerson.email}
                                    </label>
                                    <input
                                        type="email"
                                        name="authorizedEmail"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Firma Bilgileri */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {info.distributor.companyInfo.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.companyName}
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.establishmentYear}
                                    </label>
                                    <input
                                        type="number"
                                        name="establishmentYear"
                                        required
                                        min="1900"
                                        max={new Date().getFullYear()}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.country}
                                    </label>
                                    <select
                                        name="country"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">{info.distributor.companyInfo.selectCountry}</option>
                                        {COUNTRIES.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.website}
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        required
                                        placeholder="https://"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.companyEmail}
                                    </label>
                                    <input
                                        type="email"
                                        name="companyEmail"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.companyInfo.companyPhone}
                                    </label>
                                    <input
                                        type="tel"
                                        name="companyPhone"
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Faaliyet Alanı */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {info.distributor.activityArea.title}
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {info.distributor.activityArea.mainActivity}
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="mainActivity"
                                                value={info.distributor.activityArea.security}
                                                className="mr-2"
                                            />
                                            {info.distributor.activityArea.security}
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="mainActivity"
                                                value={info.distributor.activityArea.defense}
                                                className="mr-2"
                                            />
                                            {info.distributor.activityArea.defense}
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="mainActivity"
                                                value={info.distributor.activityArea.food}
                                                className="mr-2"
                                            />
                                            {info.distributor.activityArea.food}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {info.distributor.activityArea.experience}
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="experience"
                                                value={info.distributor.activityArea.yes}
                                                required
                                                className="mr-2"
                                            />
                                            {info.distributor.activityArea.yes}
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="experience"
                                                value={info.distributor.activityArea.no}
                                                required
                                                className="mr-2"
                                            />
                                            {info.distributor.activityArea.no}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.activityArea.brands}
                                    </label>
                                    <textarea
                                        name="brands"
                                        rows="3"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {info.distributor.activityArea.countries}
                                    </label>
                                    <textarea
                                        name="countries"
                                        required
                                        rows="3"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Diğer Bilgiler */}
                        <div className="border-b pb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {info.distributor.otherInfo.title}
                            </h2>
                            <textarea
                                name="otherInfo"
                                rows="5"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Onaylar */}
                        <div className="space-y-3">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    name="kvkk"
                                    required
                                    className="mt-1 mr-2"
                                />
                                <span className="text-sm text-gray-700">
                                    {info.distributor.consents.kvkk}
                                </span>
                            </label>
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    name="accurate"
                                    required
                                    className="mt-1 mr-2"
                                />
                                <span className="text-sm text-gray-700">
                                    {info.distributor.consents.accurate}
                                </span>
                            </label>
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    name="contact"
                                    required
                                    className="mt-1 mr-2"
                                />
                                <span className="text-sm text-gray-700">
                                    {info.distributor.consents.contact}
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                        >
                            {info.distributor.send}
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        onClick={toggleModal}
                        className="fixed inset-0 bg-black bg-opacity-50"
                    />
                    <div className="relative rounded-lg bg-white p-8 shadow-xl">
                        <div className="text-center">
                            <CheckIcon className="mx-auto mb-4 h-12 w-12 text-primary" />
                            <h3 className="mb-4 text-xl font-medium text-gray-900">
                                {info.distributor.successMessage}
                            </h3>
                            <button
                                onClick={toggleModal}
                                className="rounded-lg bg-primary px-6 py-2 text-white transition-all hover:bg-opacity-90"
                            >
                                {info.distributor.modalButton}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Distributor;
import React from 'react';

export default function TermsOfService() {
    const lastUpdated = "March 1, 2026";

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last Updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using PetMDB (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                    <p>
                        PetMDB currently provides users with access to a rich collection of resources, including, various communications tools, forums, shopping services, and personalized content such as paw-meter rankings and pet profiles. You also understand and agree that the Service may include advertisements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct</h2>
                    <p>
                        You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials ("Content"), whether publicly posted or privately transmitted, are the sole responsibility of the person from which such Content originated. This means that you, and not PetMDB, are entirely responsible for all Content that you upload, post, email, transmit or otherwise make available via the Service.
                    </p>
                    <p className="mt-4">
                        You agree to not use the Service to:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                        <li>upload, post, email, transmit or otherwise make available any Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</li>
                        <li>harm minors in any way;</li>
                        <li>impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                        <li>upload, post, email, transmit or otherwise make available any content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party;</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Indemnity</h2>
                    <p>
                        You agree to indemnify and hold PetMDB, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of Content you submit, post, transmit or make available through the Service, your use of the Service, your connection to the Service, your violation of the TOS, or your violation of any rights of another.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications to Service</h2>
                    <p>
                        PetMDB reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that PetMDB shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
                    </p>
                </section>
            </div>
        </div>
    );
}

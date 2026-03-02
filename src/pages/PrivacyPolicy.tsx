import React from 'react';

export default function PrivacyPolicy() {
    const lastUpdated = "March 1, 2026";

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last Updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none text-gray-300 space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                    <p>
                        Welcome to PetMDB. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                        <li><strong>Identity Data:</strong> includes username and profile picture.</li>
                        <li><strong>Contact Data:</strong> includes email address.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                        <li><strong>Profile Data:</strong> includes your username and password, ratings, and reviews made by you.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, such as page views for calculating our PawMeter metric.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                        <li>To register you as a new user.</li>
                        <li>To manage our relationship with you.</li>
                        <li>To administer and protect our business and this website.</li>
                        <li>To deliver relevant website content to you.</li>
                        <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies</h2>
                    <p>
                        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at support@petmdb.com.
                    </p>
                </section>
            </div>
        </div>
    );
}

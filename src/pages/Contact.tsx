import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-500 mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                        Have a question, suggestion, or want to report an issue? We'd love to hear from you. Fill out the form, and our team will get back to you as soon as possible.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <Mail className="w-6 h-6 text-yellow-500" />
                            <span>support@petmdb.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <MessageSquare className="w-6 h-6 text-yellow-500" />
                            <span>@petmdb on Twitter/X</span>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-500">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                            <p className="text-gray-400">Thanks for reaching out. We'll be in touch soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-zinc-800 border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-zinc-800 border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-zinc-800 border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500 resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

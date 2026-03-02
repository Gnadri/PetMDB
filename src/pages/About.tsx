import React from 'react';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-yellow-500 mb-8">About PetMDB</h1>
            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                <p className="text-lg">
                    Welcome to PetMDB, the internet's premier destination for discovering, rating, and celebrating the world's most famous and beloved pets.
                </p>
                <p>
                    Founded by a team of passionate animal lovers, PetMDB is designed to be the definitive source for pet entertainment. Whether you are looking for the latest viral cat video, checking the paw-meter ranking of a famous movie dog, or simply browsing adorable content, we have you covered.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Our Mission</h2>
                <p>
                    Our mission is to create a comprehensive database of notable pets across movies, television, social media, and history. We believe every great pet deserves their moment in the spotlight and a permanent place in our digital hall of fame.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-12 mb-4">How it Works</h2>
                <p>
                    Similar to your favorite movie databases, PetMDB relies on a vibrant community of users. You can create an account, rate your favorite pets on a scale of 1 to 10, write reviews, and contribute to our growing database of furry, feathered, and scaled stars.
                </p>
            </div>
        </div>
    );
}

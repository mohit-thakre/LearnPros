import React from 'react';
import FooterPage from './FooterPage';

const Privacy = () => {
  return (
    <>
    <div className="footer1 p-2 px-3 bg-gradient-to-t from-caribbeangreen-800 to-richblue-800 text-white min-h-screen flex flex-col items-center">
      <div className="footer container max-w-4xl px-6 py-16 sm:px-10 lg:px-20 flex flex-col gap-10 bg-gray-800 rounded-lg shadow-md">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-4xl font-extrabold ">Privacy Policy</h1>
        </div>
        
        {/* Sections */}
        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to LearnPros. At LearnPros, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect the information you provide to us when using our platform for selling, purchasing, and accessing digital courses, notes, and educational resources.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">2. Information We Collect</h2>
          <p className="text-gray-300">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li><strong>Personal Information</strong>: Name, email address, and payment details required to create accounts, process transactions, and personalize user experience.</li>
            <li><strong>Course Data</strong>: Details about courses, notes, and materials uploaded by instructors, as well as courses accessed or purchased by students.</li>
            <li><strong>Usage Data</strong>: Information on how users interact with the LearnPros platform, including pages visited, features used, and time spent on various sections.</li>
            <li><strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to improve your experience, personalize content, and analyze usage patterns.</li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">3. How We Use Your Information</h2>
          <p className="text-gray-300">We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li>Facilitate the creation and sale of courses, notes, and other learning resources.</li>
            <li>Provide personalized recommendations and enhance learning experiences for students.</li>
            <li>Process transactions and handle account management for instructors and students.</li>
            <li>Improve platform functionality, troubleshoot issues, and respond to user inquiries.</li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">4. Sharing Your Information</h2>
          <p className="text-gray-300">We respect your privacy and do not sell or rent your personal information. We may share information only:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li>With trusted service providers who assist us in operating the platform, processing payments, or analyzing data.</li>
            <li>When required by law or to protect our rights, comply with legal obligations, or respond to lawful requests.</li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">5. Your Rights</h2>
          <p className="text-gray-300">
            You have rights regarding your personal information. You may request access to, update, or delete your information. To exercise these rights, contact us at <a href="mailto:learnpros.support@gmail.com" className="text-blue-400 underline">learnpros.support@gmail.com</a>.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">6. Security</h2>
          <p className="text-gray-300">
            We take reasonable measures to protect your data and ensure its confidentiality. However, no online platform is entirely secure, so we cannot guarantee complete security. You are encouraged to use strong passwords and protect your account.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">7. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update our Privacy Policy periodically. Significant changes will be communicated to users, and the effective date will be updated accordingly.
          </p>
        </section>

        <section className="space-y-4 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-200">8. Contact Us</h2>
          <p className="text-gray-300">
            For questions about our privacy practices, please contact us at <a href="mailto:learnpros.support@gmail.com" className="text-blue-400 underline">learnpros.support@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
    <FooterPage/>
    </>

  );
}

export default Privacy;

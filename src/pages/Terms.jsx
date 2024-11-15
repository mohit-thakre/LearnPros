import React from 'react';
import FooterPage from './FooterPage';

const Terms = () => {
  return (
      <>
    <div className="footer1 px-3  bg-gray-900  text-white min-h-screen flex flex-col items-center py-3 lg:py-16">
      <div className="footer py-6 container max-w-4xl px-6 sm:px-10 lg:px-20 bg-gray-800 rounded-lg shadow-lg">
        
       
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-4xl font-extrabold py-6 ">Terms & Conditions</h1>
          
        </div>
        
      
        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to LearnPros! By accessing and using our platform, including purchasing or selling courses, notes, and other educational content, you agree to these Terms and Conditions. Please read them carefully before using our services.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">2. Use of Services</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnPros provides an online platform for instructors to sell courses and notes, and for students to access educational content. All services, including course creation, course purchase, and learning resources, are intended for personal, non-commercial use only. Unauthorized use of the platform or any content is strictly prohibited.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">3. Account Responsibilities</h2>
          <p className="text-gray-300 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account details, including your username and password. You are also responsible for all activities conducted under your account, whether authorized or not.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">4. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content on LearnPros, including courses, notes, and educational materials uploaded by instructors, as well as the design and functionality of the website, is the property of LearnPros and is protected by copyright and intellectual property laws. Users may not use or reproduce any content without permission from the respective copyright holders.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">5. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnPros will not be held liable for any indirect, incidental, or consequential damages arising from your use of the platform, including issues related to accessing, purchasing, or selling courses, content, or data.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">6. Termination</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnPros reserves the right to suspend or terminate your account if you violate these Terms and Conditions or engage in conduct harmful to the platform, other users, or the LearnPros community. This includes any unauthorized or illegal activities related to course creation, sale, or access.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">7. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnPros reserves the right to modify these Terms and Conditions at any time. Any updates will be communicated through the platform, and the effective date will be revised. Continued use of our platform after any changes constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-700 py-8">
          <h2 className="text-2xl font-semibold text-blue-200">8. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions regarding these Terms and Conditions, please reach out to us at <a href="mailto:learnpros.support@gmail.com" className="text-blue-400 underline">learnpros.support@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
    <FooterPage/>
  </>
  );
}

export default Terms;

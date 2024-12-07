import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const ScholarshipFAQ = () => {
  const faqData = [
    {
      question: 'What types of scholarships are available?',
      answer: 'There are various types of scholarships available, including merit-based, need-based, athletic, and program-specific scholarships. Students should research scholarship opportunities that match their qualifications and interests.'
    },
    {
      question: 'How do I apply for a scholarship?',
      answer: 'The application process typically involves submitting an online form, providing transcripts, writing essays, and potentially attending an interview. Students should carefully review the scholarship requirements and deadlines to ensure a complete and timely application.'
    },
    {
      question: 'What is the difference between a scholarship and a grant?',
      answer: 'Scholarships are typically merit-based and awarded based on academic achievement, talents, or other criteria. Grants, on the other hand, are often need-based and provided based on financial circumstances. Both can help cover the cost of education.'
    },
    {
      question: 'Are scholarships taxable?',
      answer: 'Scholarships used for qualified educational expenses, such as tuition, fees, and required supplies, are generally not taxable. However, scholarships used for living expenses or other non-educational costs may be subject to taxation. Students should consult with a tax professional for specific guidance.'
    },
    {
      question: 'Can I lose my scholarship?',
      answer: 'Yes, it is possible to lose a scholarship if you do not meet the ongoing requirements, such as maintaining a minimum GPA, participating in required activities, or submitting necessary documentation. Students should carefully review the scholarship terms and conditions to understand the continuation requirements.'
    }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md">
      <CardHeader className="bg-blue-600 text-white py-4 px-6 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Frequently Asked Questions about Scholarships</CardTitle>
      </CardHeader>
      <CardContent className="py-6 px-8 text-gray-700">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ScholarshipFAQ;
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

const HomeTimeLine = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Home/Time Line</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Role of Students</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Submission of Application with relevant Documents at college with 15 days of Admission.</li>
              <li>Aadhar biometric Authentication at Meeseva.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Role of College/Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>Verify the students application and forward to biometric authentication</AccordionTrigger>
                <AccordionContent>
                  <p>Verify the students application and forward to biometric authentication.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Attendance</AccordionTrigger>
                <AccordionContent>
                  <p>Attendance</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Local or Non Local</AccordionTrigger>
                <AccordionContent>
                  <p>Local or Non Local</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Bonafide</AccordionTrigger>
                <AccordionContent>
                  <p>Bonafide</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Discontinued/Regular</AccordionTrigger>
                <AccordionContent>
                  <p>Discontinued/Regular</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Submission of Signed Barcode hardcopy at district office with Relevant Documents</AccordionTrigger>
                <AccordionContent>
                  <p>Submission of Signed Barcode hardcopy at district office with Relevant Documents</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Submission of Utilization certificates of sanctioned students to district Welfare officer within 15 days of RTF credited.</AccordionTrigger>
                <AccordionContent>
                  <p>Submission of Utilization certificates of sanctioned students to district Welfare officer within 15 days of RTF credited.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>District Officer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Sanctioned and release of MTF and RTF</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeTimeLine;
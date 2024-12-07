import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../../components/ui/Badge"
import { ScrollText, GraduationCap, Users, IndianRupee, MapPin, BookOpen } from 'lucide-react'

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 1097 845"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M334.5 0L669 211.75V635.25L334.5 847L0 635.25V211.75L334.5 0Z"
              fill="url(#grad1)"
            />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1097" y2="845">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            e-PMSSS
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Prime Minister's Special Scholarship Scheme
          </p>
          <Badge variant="secondary" className="mt-4 text-orange-600 bg-orange-50">
            Supporting Education in J&K and Ladakh
          </Badge>
        </div>
      </section>

      {/* Content Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* What is PMSSS */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-orange-600" />
                What is PMSSS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                The Prime Minister's Special Scholarship Scheme (PMSSS) is an initiative launched in 2011 by the All India Council for Technical Education (AICTE).
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-orange-600 mt-1" />
                  <p>Provides financial assistance for higher education to students from J&K and Ladakh</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-orange-600 mt-1" />
                  <p>Promotes equal educational opportunities and development</p>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-orange-600 mt-1" />
                  <p>Covers tuition fees, hostel fees, and other related expenses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility Criteria */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-600" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600">
              <div className="rounded-lg border bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-orange-600" />
                  <p className="font-medium">Educational Requirement</p>
                </div>
                <p className="mt-2 text-sm">
                  Passed Class 12th examination from JKBOSE or CBSE-affiliated schools in J&K and Ladakh
                </p>
              </div>

              <div className="rounded-lg border bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-orange-600" />
                  <p className="font-medium">Income Criteria</p>
                </div>
                <p className="mt-2 text-sm">
                  Family income should not exceed ₹8,00,000 per annum. 5000 fresh scholarships available yearly
                </p>
              </div>

              <div className="rounded-lg border bg-orange-50 p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <p className="font-medium">Residency</p>
                </div>
                <p className="mt-2 text-sm">
                  Must be domiciled in the Union Territories of Jammu & Kashmir (J&K) and Ladakh
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Announcement */}
          <Card className="transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-orange-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-orange-600" />
                Announcement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900">Support Resources Available</h3>
                <p className="mt-4 text-gray-600">
                  Access a wealth of support resources, including guides and FAQs to help you every step of the way.
                </p>
                <div className="mt-6 flex gap-4">
                  <Badge variant="outline" className="bg-white">
                    Guides
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    FAQs
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Support
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


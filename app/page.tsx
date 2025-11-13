import Navigation from '@/components/Navigation'
import DecorativeShape from '@/components/DecorativeShape'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 py-16 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-purple-primary mb-4">
            Introduction to Digital Product Design
          </h1>
          <p className="text-2xl text-gray-500 mb-8">FALL 2025</p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">
            Welcome! If you ever have questions or just want to chat, feel free to reach out to either instructor on Slack.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Stuck on your assignment?</span>
            <button className="bg-purple-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-dark transition flex items-center space-x-2">
              <span>Get help</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30">
          <DecorativeShape type="blob" color="red" className="w-full h-full" />
        </div>
      </section>

      {/* About This Course Section */}
      <section className="relative bg-purple-primary text-white py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
          <DecorativeShape type="star" color="orange" className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <DecorativeShape type="star-small" color="purple" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
          <DecorativeShape type="star-small" color="purple" className="w-full h-full" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About This Course</h2>
          <p className="text-lg leading-relaxed">
            Intro to Digital Product Design (sometimes abbreviated as Intro to DPD or DPD) is a 9-week long, 2 credits S/U class where students will be introduced to the field of UI/UX and product design. We'll be covering the fundamentals of product thinking, interaction design, and visual design. During the course, students will ideate solutions for existing applications and execute thoughtful solutions with Figma.
          </p>
        </div>
      </section>

      {/* Important Dates and Course Links Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Important Dates */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-8">Important Dates</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">LECTURES:</h3>
                <p className="text-gray-700">Monday and Wednesday,</p>
                <p className="text-gray-700">7:30 PM - 8:20 PM EST</p>
                <p className="text-gray-500 text-sm mt-1">[Not Recorded]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SECTIONS:</h3>
                <p className="text-gray-700">Sunday, 2:30 PM - 3:30 PM EST OR</p>
                <p className="text-gray-700">Monday, 6:00 PM - 7:00 PM EST</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ASSIGNMENT DEADLINES:</h3>
                <p className="text-gray-700">Usually Sunday, 5 PM EST</p>
              </div>
            </div>
          </div>

          {/* Course Links */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-16 h-16 opacity-30">
              <DecorativeShape type="star-small" color="red" className="w-full h-full" />
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold mb-4">Course Links</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:courses@cornellappdev.com" className="text-purple-primary hover:underline">
                    courses@cornellappdev.com
                  </a>
                </div>
                <div>
                  <span className="font-medium">Slack:</span>{' '}
                  <a href="https://introdpd.slack.com" className="text-purple-primary hover:underline">
                    https://introdpd.slack.com
                  </a>
                </div>
                <div>
                  <span className="font-medium">Grades:</span>{' '}
                  <a href="https://forms.cs.cornell.edu" className="text-purple-primary hover:underline">
                    https://forms.cs.cornell.edu
                  </a>
                </div>
                <div>
                  <span className="font-medium">Calendar:</span>{' '}
                  <a href="#" className="text-purple-primary hover:underline">
                    Google Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Instructors Section */}
      <section className="relative bg-orange-primary py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <DecorativeShape type="star" color="purple" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
          <DecorativeShape type="star" color="red" className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Instructor 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                <span className="text-gray-400 text-4xl">SR</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">Stefanie Rivera-Osorio</h3>
              <p className="text-gray-600 text-center">Information Science '27</p>
            </div>
            {/* Instructor 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 mx-auto flex items-center justify-center">
                <span className="text-gray-400 text-4xl">GF</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">Gillian Fang</h3>
              <p className="text-gray-600 text-center">Information Science '27</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center space-x-2 mx-auto">
              <span>View all staff</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="relative bg-purple-primary text-white py-16 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
          <DecorativeShape type="blob" color="purple" className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold">D</div>
                <span className="text-xl font-bold">DPD</span>
              </div>
              <p className="flex items-center space-x-2 mb-2">
                <span>Made with love</span>
                <span className="text-red-primary">♥</span>
              </p>
              <p>Keep designing, keep learning.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Schedule</a></li>
                <li><a href="#" className="hover:underline">Syllabus</a></li>
                <li><a href="#" className="hover:underline">Policies</a></li>
                <li><a href="#" className="hover:underline">Office Hours</a></li>
                <li><a href="#" className="hover:underline">How to Audit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">DPD TOOLBOX</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Lecture Notes & Slides</a></li>
                <li><a href="#" className="hover:underline">Workshop & Figma Files</a></li>
                <li><a href="#" className="hover:underline">Recommended Readings</a></li>
                <li><a href="#" className="hover:underline">Figma Handbook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


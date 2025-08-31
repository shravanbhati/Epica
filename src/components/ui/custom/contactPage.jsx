export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg p-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            Have questions, opportunities, or just want to say hi? Fill out the
            form or reach me directly via email and socials below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              <span className="p-2 rounded-full bg-purple-100 text-purple-700">
                📍
              </span>
              Rajasthan, India
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <span className="p-2 rounded-full bg-purple-100 text-purple-700">
                ✉️
              </span>
              shravan@studyinjapan.in
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
            >
              🐦
            </a>
            <a
              href="#"
              className="p-2 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
            >
              💼
            </a>
            <a
              href="#"
              className="p-2 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
            >
              📷
            </a>
            <a
              href="#"
              className="p-2 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
            >
              💻
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl shadow hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

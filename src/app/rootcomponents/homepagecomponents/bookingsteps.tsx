import BookingStepsImageCard from "./bookingstepsimage";

export default function BookingSection() {
  const steps = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-600 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "1. Choose Destination",
      description:
        "Select your perfect destination from our curated list of amazing locations",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-600 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "2. Make Payment",
      description:
        "Secure and easy payment process with multiple options available",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green-600 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "3. Reach Airport",
      description:
        "Prepare for your adventure and arrive at the airport on your selected date",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Steps Column */}
        <div className="flex-1 space-y-8">
          <div className="text-center md:text-left animate-fade-in-down motion-preset-slide-down motion-duration-2000 delay-300">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
              Easy and Fast
            </h2>
            <p className="text-lg text-green-600 dark:text-green-300 motion-preset-slide-down motion-duration-2000 delay-1000">
              Book your next trip in 3 easy steps
            </p>
          </div>

          <div className="relative space-y-6">
            <div className="absolute z-9 left-[3rem] top-18 bottom-20 w-0.5 bg-green-500/4 dark:bg-green-300/4 motion-preset-slide-left motion-duration-2000"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 p-6 rounded-xl transition-all duration-300"
              >
                <div
                  className={`motion-preset-slide-right motion-duration-2000 delay-[${
                    index * 1000
                  }] flex items-start gap-4`}
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-green-600/80 dark:text-green-300/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Card */}
        <BookingStepsImageCard />
      </div>
    </section>
  );
}

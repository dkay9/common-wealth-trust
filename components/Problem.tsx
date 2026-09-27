const cards = [
  {
    value: "342",
    title: "Students Currently Enrolled",
    icon: "students",
    details: [
      "Adults (Women and Youth)",
      "102 Children",
    ],
  },
  {
    value: "8",
    title: "Vocational Training Programs",
    icon: "education",
    details: [
      "Some temporarily paused due to materials funding gaps",
    ],
  },
  {
    value: "100%",
    title: "Daily Nutrition",
    icon: "nutrition",
    details: [
      "Provided to all students",
    ],
  },
];


/* =========================================================
   CARD ICONS
   ========================================================= */

function CardIcon({ type }: { type: string }) {

  // Students Icon
  if (type === "students") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-12 w-12"
        aria-hidden="true"
      >
        <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm8 2c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3ZM8 13c-2.33 0-7 1.17-7 3.5V18h7v-2c0-.85.33-1.57.88-2.17C8.6 13.78 8.3 13 8 13Z" />
      </svg>
    );
  }


  // Education / Graduation Icon
  if (type === "education") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-12 w-12"
        aria-hidden="true"
      >
        <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6L21 10.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 16l-5 2.73L7 16v-3.73l5 2.73 5-2.73V16Z" />
      </svg>
    );
  }


  // Nutrition / Food Icon
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-12 w-12"
      aria-hidden="true"
    >
      {/* Food cover */}
      <path d="M12 4a1.5 1.5 0 1 0-3 0v.25A8.02 8.02 0 0 0 4 11h16a8.02 8.02 0 0 0-5-6.75V4a1.5 1.5 0 0 0-3 0Zm-6 9h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2Zm-2 5h16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1Z" />
    </svg>
  );
}


/* =========================================================
   PROBLEM / IMPACT SECTION
   ========================================================= */

export default function Problem() {
  return (
    <section className="bg-sand py-20 md:py-24">

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* ===================================================
            SECTION HEADER
            =================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
            Making a Difference, One Family at a Time
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            Every community we work with already has the will to change its
            future. What&apos;s missing is the physical foundation to build on.
          </p>

        </div>


        {/* ===================================================
            IMPACT CARDS
            =================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">

          {cards.map((card) => (

            <article
              key={card.title}
              className="
                group
                relative
                flex
                min-h-[520px]
                flex-col
                items-center
                overflow-hidden
                rounded-3xl
                bg-cream
                px-8
                py-12
                text-center
                shadow-sm
                transition-all
                duration-500
                ease-out

                hover:-translate-y-3
                hover:shadow-2xl
              "
            >

              {/* -----------------------------------------------
                  SUBTLE HOVER BACKGROUND
                  ----------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-blue-600/[0.03]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* -----------------------------------------------
                  ICON
                  ----------------------------------------------- */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-700
                  text-white
                  shadow-lg

                  transition-all
                  duration-500
                  ease-out

                  group-hover:-rotate-3
                  group-hover:scale-110
                  group-hover:shadow-xl
                "
              >

                <CardIcon type={card.icon} />

              </div>


              {/* -----------------------------------------------
                  LARGE NUMBER
                  ----------------------------------------------- */}

              <div
                className="
                  relative
                  z-10
                  mt-8
                  font-display
                  text-7xl
                  font-bold
                  leading-none
                  text-blue-700

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-105

                  md:text-7xl
                  lg:text-8xl
                "
              >
                {card.value}
              </div>


              {/* -----------------------------------------------
                  CARD TITLE
                  ----------------------------------------------- */}

              <h3
                className="
                  relative
                  z-10
                  mt-7
                  font-display
                  text-2xl
                  font-bold
                  leading-tight
                  text-blue-900
                "
              >
                {card.title}
              </h3>


              {/* -----------------------------------------------
                  DETAILS
                  ----------------------------------------------- */}

              <div
                className="
                  relative
                  z-10
                  mt-8
                  w-full
                  max-w-sm
                  space-y-5
                "
              >

                {card.details.map((detail, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-4
                      text-left

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  >

                    {/* Checkmark Circle */}

                    <div
                      className="
                        mt-0.5
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600

                        transition-all
                        duration-300

                        group-hover:scale-110
                      "
                    >

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                    </div>


                    {/* Detail Text */}

                    <span
                      className="
                        text-base
                        leading-relaxed
                        text-ink/70
                        md:text-lg
                      "
                    >
                      {detail}
                    </span>

                  </div>

                ))}

              </div>


              {/* -----------------------------------------------
                  BOTTOM HOVER LINE
                  ----------------------------------------------- */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-1
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-blue-600

                  transition-all
                  duration-500
                  ease-out

                  group-hover:w-2/3
                "
              />

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
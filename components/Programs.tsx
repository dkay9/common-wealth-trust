const programs = [
  {
    name: "Computer Training Department",
    desc: "Equips individuals with essential computer skills, enhancing employability and digital literacy",
    stat: "Since April 2024",
    img: "images/hero/computer-center.jpg",
  },
  {
    name: "Bar Soap Making Department",
    desc: "Equipping individuals with hands-on skills to craft high quality bar soaps, while guided by expert trainers .",
    stat: "Since April 2024",
    img: "images/hero/bar-soap.jpg",
  },
  {
    name: "Hair and Salon Department",
    desc: "Provides comprehensive training in hairstyling, grooming, and beauty services, equipping students for success in the beauty industry",
    stat: "Since April 2024",
    img: "images/hero/hair-salon.jpg",
  },
  {
    name: "Metal Fabrication",
    desc: "Drilling and rehabilitating wells, and training local technicians to maintain them long after we leave.",
    stat: "312 wells built",
    img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "School Infrastructure",
    desc: "Building classrooms, supplying learning materials, and funding teacher training in underserved districts.",
    stat: "47 schools rebuilt",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Community Health",
    desc: "Equipping rural clinics and training community health workers to deliver basic care closer to home.",
    stat: "63 clinics equipped",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
  },
];


/* =========================================================
   SDG BUTTON DATA
   ========================================================= */

const sdgs = [
  {
    number: "1",
    name: "No Poverty",
    color: "#E5243B",
    icon: "♨",
  },
  {
    number: "2",
    name: "Zero Hunger",
    color: "#DDA63A",
    icon: "◫",
  },
  {
    number: "3",
    name: "Good Health",
    color: "#4C9F38",
    icon: "♥",
  },
  {
    number: "4",
    name: "Quality Education",
    color: "#C5192D",
    icon: "◆",
  },
  {
    number: "5",
    name: "Gender Equality",
    color: "#FF3A21",
    icon: "♀",
  },
  {
    number: "8",
    name: "Decent Work",
    color: "#A21942",
    icon: "▣",
  },
];


export default function Programs() {
  return (
    <section id="programs" className="bg-cream py-24">

      <div className="mx-auto max-w-8xl px-6 md:px-10">

        {/* =====================================================
            SECTION HEADING
            ===================================================== */}

        <div className="max-w-3xl">

          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            {"<< TVET >>"}
          </span>

          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Our TVET Programs
          </h2>

        </div>


        {/* =====================================================
            INTRODUCTION / TVET INFORMATION PANEL
            ===================================================== */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-3xl
            bg-white
            px-7
            py-10
            shadow-sm
            md:px-12
            md:py-12
          "
        >

          {/* ===================================================
              MULTICOLOUR TOP LINE
              =================================================== */}

          <div
            className="
              absolute
              left-0
              top-0
              h-1
              w-full
              bg-gradient-to-r
              from-red-500
              via-yellow-500
              via-green-500
              to-blue-500
            "
          />


          {/* ===================================================
              INTRO TEXT
              =================================================== */}

          <p
            className="
              max-w-5xl
              text-base
              leading-8
              text-ink/75
              md:text-lg
            "
          >
            Christ's Hands Skill (CHS) implements an inclusive and community-embedded Technical and Vocational Education and Training (TVET) initiative in Kasangati and surrounding communities in Uganda, designed to address unemployment, poverty, food insecurity, and social vulnerability among women, single mothers, and out-of-school youth.

The initiative aims to equip learners with market-relevant vocational skills while removing structural barriers — such as lack of childcare, nutrition, and psychosocial support — that often prevent vulnerable populations from accessing and completing skills training, contributing directly to:-
          </p>


          {/* ===================================================
              DIVIDER
              =================================================== */}

          <div className="my-9 border-t border-dashed border-ink/10" />


          {/* ===================================================
              SDG BUTTONS
              =================================================== */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >

            {sdgs.map((sdg) => (

              <div
                key={sdg.number}
                style={{ backgroundColor: sdg.color }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-lg
                "
              >

                {/* SDG Icon */}

                <span className="flex h-5 w-5 items-center justify-center text-base">
                  {sdg.icon}
                </span>


                {/* SDG Text */}

                <span>
                  SDG {sdg.number}: {sdg.name}
                </span>

              </div>

            ))}

          </div>


          {/* ===================================================
              SECOND DIVIDER
              =================================================== */}

          <div className="my-9 border-t border-dashed border-ink/10" />


          {/* ===================================================
              SECOND TEXT
              =================================================== */}

          <p
            className="
              mx-auto
              max-w-5xl
              text-center
              text-base
              leading-8
              text-ink/70
              md:text-lg
            "
          >
            Training emphasizes practical competence and employability rather than certification alone, complemented by entrepreneurship, financial literacy, and basic business skills to support employment, self-employment, and micro-enterprise development.
          </p>


          {/* ===================================================
              BOUNCING ARROW / SCROLL LINK
              =================================================== */}

          <div className="mt-10 flex justify-center">

            <a
              href="#tvet-programs"
              className="
                group
                flex
                flex-col
                items-center
                gap-3
                text-center
                text-ink
              "
            >

              <span
                className="
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  group-hover:text-terracotta
                  md:text-base
                "
              >
                Explore our TVET programs below
              </span>


              {/* Animated Arrow */}

              <div
                className="
                  animate-bounce
                  text-terracotta
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>

              </div>

            </a>

          </div>

        </div>


        {/* =====================================================
            ACTUAL TVET PROGRAMS
            ===================================================== */}

        <div
          id="tvet-programs"
          className="
            scroll-mt-24
            mt-20
          "
        >

          {/* Programs Header */}

          <div className="mb-10">

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-terracotta
              "
            >
              Our Programs
            </span>

            <h3
              className="
                mt-2
                font-display
                text-2xl
                text-ink
                md:text-3xl
              "
            >
              Building skills. Creating opportunities.
            </h3>

          </div>


          {/* ===================================================
              PROGRAM CARDS
              =================================================== */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {programs.map((program) => (

              <article
                key={program.name}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-sm

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                {/* Program Image */}

                <div className="overflow-hidden">

                  <img
                    src={program.img}
                    alt={program.name}
                    className="
                      h-64
                      w-full
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-110
                    "
                  />

                </div>


                {/* Program Information */}

                <div className="p-7">

                  <h3 className="font-display text-xl text-ink">
                    {program.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-ink/60
                    "
                  >
                    {program.desc}
                  </p>


                  {/* Statistic */}

                  <div
                    className="
                      mt-6
                      border-t
                      border-ink/10
                      pt-5
                    "
                  >

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-terracotta
                      "
                    >
                      {program.stat}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
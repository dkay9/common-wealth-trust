"use client";

import { useState } from "react";

export default function WhoWeAre() {
  const [videoOpen, setVideoOpen] = useState(false);

  /*
   * ============================================================
   * CHANGE THESE TWO VALUES
   * ============================================================
   *
   * VIDEO_ID:
   * For:
   * https://www.youtube.com/watch?v=dQw4w9WgXcQ
   *
   * use:
   * dQw4w9WgXcQ
   *
   * BACKGROUND_IMAGE:
   * Replace with your preferred image.
   */

  const VIDEO_ID = "jCZP69GAimI";

  const BACKGROUND_IMAGE =
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop";

  const videoThumbnail =
      VIDEO_ID === "YOUR_YOUTUBE_VIDEO_ID"
      ? "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop"
      : `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <>
      <section
        id="who-we-are"
        className="bg-cream py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* Section heading */}

          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Who We Are
            </span>

            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Local teams. Long-term commitments.
            </h2>
          </div>


          {/* =====================================================
              TWO CARD LAYOUT
              ===================================================== */}

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

            {/* ===================================================
                LEFT CARD — VIDEO
                =================================================== */}

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play our story video"
              className="
                group
                relative
                min-h-[520px]
                overflow-hidden
                rounded-3xl
                text-left
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                focus:outline-none
                focus:ring-4
                focus:ring-blue-500/30
              "
            >

              {/* Video Thumbnail */}

              <img
                src={videoThumbnail}
                alt="Watch the Commonwell Trust story"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />


              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-black/10
                  transition-all
                  duration-500
                  group-hover:from-black/90
                "
              />


              {/* Play Button */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-24
                  w-24
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  shadow-2xl

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:bg-white
                "
              >

                {/* Play icon */}

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    ml-1
                    h-10
                    w-10
                    text-blue-700
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

              </div>


              {/* Video card bottom text */}

              <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-10">

                <div className="mb-3 flex items-center gap-2">

                  <span className="h-px w-8 bg-white/70" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Watch Our Story
                  </span>

                </div>

                <h3 className="font-display text-3xl text-white md:text-4xl">
                  See the impact firsthand.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                  Discover how our work is helping communities build stronger,
                  more sustainable futures.
                </p>

              </div>

            </button>


            {/* ===================================================
                RIGHT CARD — IMAGE + TEXT OVERLAY
                =================================================== */}

            <article
              className="
                group
                relative
                min-h-[520px]
                overflow-hidden
                rounded-3xl
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Background image */}

              <img
                src={BACKGROUND_IMAGE}
                alt="Commonwell Trust working with the community"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />


              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/95
                  via-black/70
                  to-black/25
                "
              />


              {/* Content */}

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[520px]
                  flex-col
                  justify-end
                  p-8
                  md:p-10
                  lg:p-12
                "
              >

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Our Approach
                </span>

                <h3 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">
                  Empowering Lives Through Skilling.
                </h3>

                <p className="mt-5 max-w-xl leading-relaxed text-white/80">
                  At Christ's Hands Skills Training and Child Development Centre (CHS), we empower women and support Out-of-school youths. Inspired by Ntono Moreen and Tabula Robert, we transform lives through impactful training programs, nurturing hope and strengthening family bonds. Thank you for joining us!
                </p>


                {/* Statistics */}

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/20 pt-8">

                  <div>
                    <p className="font-display text-3xl text-white">
                      14 yrs
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Operating in the field
                    </p>
                  </div>


                  <div>
                    <p className="font-display text-3xl text-white">
                      98%
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Projects still active
                    </p>
                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          FLOATING VIDEO PLAYER
          ========================================================= */}

      {videoOpen && (

        <div
          className="
            fixed
            bottom-5
            right-5
            z-[9999]
            w-[calc(100%-40px)]
            max-w-[520px]
            overflow-hidden
            rounded-2xl
            bg-black
            shadow-2xl

            animate-in
            fade-in
            slide-in-from-bottom-5
            duration-300
          "
        >

          {/* Player Header */}

          <div
            className="
              flex
              items-center
              justify-between
              bg-neutral-900
              px-4
              py-3
            "
          >

            <div className="flex items-center gap-2">

              {/* Red status dot */}

              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-xs font-medium text-white/80">
                Our Story
              </span>

            </div>


            {/* Close button */}

            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-white/70
                transition-colors
                hover:bg-white/10
                hover:text-white
              "
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>

            </button>

          </div>


          {/* YouTube Player */}

          <div className="aspect-video w-full">

            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Commonwell Trust story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        </div>

      )}
    </>
  );
}
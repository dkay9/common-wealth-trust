import Link from "next/link";
import DonateButton from "./DonateButton";

type PartnerIntroProps = {
  paragraphs: string[];
  enquiryText: string;
  enquiryLinkText: string;
  enquiryHref: string;
  image: string;
  imageAlt: string;
};

export default function PartnerIntro({
  paragraphs,
  enquiryText,
  enquiryLinkText,
  enquiryHref,
  image,
  imageAlt,
}: PartnerIntroProps) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-ink/70 first:mt-0">
              {p}
            </p>
          ))}
          <p className="mt-4 text-ink/70">
            {enquiryText}{" "}
            <Link
              href={enquiryHref}
              className="font-semibold text-terracotta underline hover:text-terracotta-dark"
            >
              {enquiryLinkText}
            </Link>
            .
          </p>

          <DonateButton size="sm" className="mt-6" />
        </div>

        <div className="overflow-hidden border-2 border-ink">
          <img src={image} alt={imageAlt} className="h-80 w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
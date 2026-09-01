import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-dark py-16 text-cream/70">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <span className="font-display text-xl italic text-cream">
              Commonwell Trust
            </span>
            <p className="mt-4 max-w-xs text-sm">
              Building the water, education, and health infrastructure that
              lasting change depends on.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/what-we-do#programs" className="hover:text-cream">Water Access</Link></li>
              <li><Link href="/what-we-do#programs" className="hover:text-cream">School Infrastructure</Link></li>
              <li><Link href="/what-we-do#programs" className="hover:text-cream">Community Health</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream">Organization</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about#mission-vision-values" className="hover:text-cream">Who We Are</Link></li>
              <li><Link href="/about#impact-accountability" className="hover:text-cream">Impact Reports</Link></li>
              <li><Link href="/about#team" className="hover:text-cream">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream">Get Involved</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/donate" className="hover:text-cream">Donate</Link></li>
              <li><Link href="/donate" className="hover:text-cream">Monthly Giving</Link></li>
              <li><Link href="/support#partner" className="hover:text-cream">Corporate Partners</Link></li>
              <li><Link href="/support#partner" className="hover:text-cream">Volunteer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs md:flex-row md:items-center">
          <p>© 2026 Commonwell Trust. A registered nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <svg className="h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <p className="text-gray-300 text-base">
              EKLIPSE SNEAKERS: Elevating your style with every step.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/men" className="text-base text-gray-300 hover:text-primary">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link href="/women" className="text-base text-gray-300 hover:text-primary">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href="/kids" className="text-base text-gray-300 hover:text-primary">
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link href="/new-releases" className="text-base text-gray-300 hover:text-primary">
                      New Releases
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-primary">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-300 hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="text-base text-gray-300 hover:text-primary">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link href="/returns" className="text-base text-gray-300 hover:text-primary">
                      Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-300 hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-300 hover:text-primary">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-300 hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-300 hover:text-primary">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 EKLIPSE SNEAKERS, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
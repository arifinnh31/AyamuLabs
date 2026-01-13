"use client";

import Image from "next/image";

export default function AboutStory() {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-[1.02] opacity-20"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ"
              alt="Anime girl in chicken costume singing"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl relative z-10 w-full object-cover aspect-[4/3]"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white">
              Turning Chicken into <span className="text-primary">Waifus</span>
            </h2>
            <div className="prose dark:prose-invert text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m a digital artist based in the cloud (literally and figuratively). I&apos;ve been drawing since I could hold a crayon, but I upgraded to a stylus about 5 years ago and haven&apos;t looked back.
              </p>
              <p>
                My passion lies in creating vibrant character designs and bringing them to life through Live2D rigging. I believe every character has a story, and my job is to visualize it in the most colorful way possible.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
               <div className="text-center">
                  <span className="block text-3xl font-black text-primary">5+</span>
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wide">Years Exp</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-black text-primary">200+</span>
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wide">Projects</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-black text-primary">∞</span>
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wide">Chickens</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

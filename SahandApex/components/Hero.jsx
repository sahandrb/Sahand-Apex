import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, Package, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" dir="rtl">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground mb-6 backdrop-blur-sm">
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">تأمین و واردات B2B</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block">گروه</span>
              <span className="block text-accent mt-2">Sahand Apex</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              تأمین‌کننده و واردکننده محصولات <strong>B2B</strong> در حوزه ملزومات اداری و پت‌شاپ برای کسب‌وکارها
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8"
                onClick={() => {
                  const element = document.querySelector('#office-supplies');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <ShoppingBag className="ml-2 h-5 w-5" />
                مشاهده محصولات
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 backdrop-blur-sm transition-all duration-300 text-base px-8"
                onClick={() => {
                  const element = document.querySelector('#story');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                درباره ما
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-primary-foreground/80">محصولات متنوع</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">B2B</div>
                <div className="text-sm text-primary-foreground/80">همکاری با کسب‌وکارها</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-primary-foreground/80">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag, CheckCircle2, ExternalLink } from 'lucide-react';

export const PetShop = () => {
  const features = [
    'واردات محصولات با برند مشتری (در صورت سفارش عمده)',
    'همکاری B2B و ارائه محصولات به فروشگاه‌ها',
    'امکان نمایندگی محصولات برای کسب‌وکارهای علاقه‌مند',
  ];

  return (
    <section id="pet-shop" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              محصولات پت‌شاپ
            </h2>
            <p className="text-lg text-muted-foreground">محصولات حیوانات خانگی</p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Card */}
          <Card className="glass-card border-none shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Content Section - Order reversed for visual variety */}
              <div className="md:col-span-3 p-8 sm:p-12 order-2 md:order-1">
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  برای فروشگاه‌های پت‌شاپ و کسب‌وکارهایی که نیاز به <strong className="text-accent">محصولات حیوانات خانگی</strong> دارند، گروه Sahand Apex به‌عنوان واردکننده محصولات، امکان ارائه آن‌ها را با برند اختصاصی مشتری در صورت سفارش عمده فراهم می‌کند.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open('https://example.com/pet-shop', '_blank')}
                >
                  <ExternalLink className="ml-2 h-5 w-5" />
                  برای سفارش و اطلاعات بیشتر کلیک کنید
                </Button>
              </div>

              {/* Image Section */}
              <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 min-h-[300px] flex items-center justify-center order-1 md:order-2">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/50 rounded-full blur-2xl"></div>
                </div>
                <div className="relative z-10 text-center p-8">
                  <ShoppingBag className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-accent-foreground">محصولات پت‌شاپ</h3>
                  <p className="text-accent-foreground/80 mt-2">با کیفیت برتر</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

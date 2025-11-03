import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Package, CheckCircle2, ExternalLink } from 'lucide-react';

export const OfficeSupplies = () => {
  const features = [
    'تولید محصولات با برند اختصاصی مشتری',
    'سفارش عمده برای فروشگاه‌ها و مراکز اداری',
    'راهکار عملی برای تأمین محصولات با کیفیت و قیمت مناسب',
  ];

  return (
    <section id="office-supplies" className="py-20 bg-gradient-to-b from-muted/30 to-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Package className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              ملزومات اداری
            </h2>
            <p className="text-lg text-muted-foreground">زونکن و وایت برد</p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Card */}
          <Card className="glass-card border-none shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 min-h-[300px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/50 rounded-full blur-2xl"></div>
                </div>
                <div className="relative z-10 text-center p-8">
                  <Package className="w-24 h-24 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-foreground">محصولات اداری</h3>
                  <p className="text-primary-foreground/80 mt-2">با کیفیت برتر</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 sm:p-12">
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  برای فروشگاه‌ها و کسب‌وکارهایی که به دنبال <strong className="text-accent">ملزومات اداری با سفارش عمده</strong> هستند، گروه Sahand Apex امکان ارائه محصولات را با برند اختصاصی مشتری فراهم می‌کند.
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
                  onClick={() => window.open('https://example.com/office-supplies', '_blank')}
                >
                  <ExternalLink className="ml-2 h-5 w-5" />
                  برای سفارش و اطلاعات بیشتر کلیک کنید
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

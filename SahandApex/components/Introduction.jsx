import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export const Introduction = () => {
  const highlights = [
    'تجربه عملی در تولید و واردات',
    'خدمات تأمین محصول و واردات عمده',
    'تمرکز بر بازار ایران',
    'راهکارهای قابل اعتماد',
  ];

  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-background to-muted/30" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              معرفی کوتاه
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-foreground leading-relaxed">
                گروه <strong className="text-primary">Sahand Apex</strong> (<em>سهند رنجبری‌پور</em>) با تجربه عملی در تولید و واردات کالا، خدمات تأمین محصول و واردات عمده را برای کسب‌وکارها و فروشگاه‌ها ارائه می‌دهد.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                تمرکز این گروه بر ارائه راهکارهای <strong className="text-accent">قابل اعتماد و عملی برای بازار ایران</strong> است.
              </p>
            </div>

            {/* Highlights Card */}
            <Card className="glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">ویژگی‌های کلیدی</h3>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

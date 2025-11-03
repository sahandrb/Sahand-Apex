import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

export const Bio = () => {
  return (
    <section id="bio" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              معرفی خلاصه
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Bio Cards */}
          <div className="space-y-8">
            {/* Long Bio */}
            <Card className="glass-card border-none shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-4">نسخه کوتاه (Bio)</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      سهند اپکس (Sahand Apex) با مدیریت سهند رنجبری‌پور، تامین‌کننده و واردکننده محصولات B2B در حوزه ملزومات اداری و پت‌شاپ برای کسب‌وکارها.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tagline */}
            <Card className="glass-card border-none shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-10">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-4">نسخه بسیار کوتاه (Tagline)</h3>
                  <p className="text-2xl font-bold text-primary mb-2">
                    سهند اپکس
                  </p>
                  <p className="text-lg text-accent">
                    واردات و تأمین محصولات B2B با برند اختصاصی
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

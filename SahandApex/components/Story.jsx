import React from 'react';
import { Card, CardContent } from './ui/card';
import { Lightbulb, TrendingUp, Award } from 'lucide-react';

export const Story = () => {
  const milestones = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'شروع',
      description: 'شناسایی نیاز بازار به محصولات با کیفیت',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'رشد',
      description: 'توسعه فعالیت در ملزومات اداری و پت‌شاپ',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'موفقیت',
      description: 'ارائه خدمات حرفه‌ای و قابل اعتماد',
    },
  ];

  return (
    <section id="story" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              داستان شروع و تجربه
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Story */}
          <Card className="glass-card border-none shadow-xl mb-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg text-foreground leading-relaxed text-justify">
                سهند رنجبری‌پور پس از مشاهده نیاز بازار به محصولات با کیفیت و دسترس‌پذیر، فعالیت خود را در زمینه تأمین ملزومات اداری و محصولات پت‌شاپ آغاز کرد. تجربه تولید داخلی و واردات مستقیم، پایه‌ای برای ارائه خدمات حرفه‌ای و قابل اعتماد شد.
              </p>
            </CardContent>
          </Card>

          {/* Milestones */}
          <div className="grid sm:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="glass-card border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

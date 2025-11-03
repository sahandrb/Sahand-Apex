import React from 'react';
import { Card, CardContent } from './ui/card';
import { Target, Shield, Users, Zap } from 'lucide-react';

export const Philosophy = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'اعتماد',
      description: 'پایبندی به تعهدات و ارائه خدمات قابل اعتماد',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'کیفیت',
      description: 'تمرکز بر ارائه محصولات و خدمات با کیفیت برتر',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'مشتری‌محوری',
      description: 'توجه ویژه به نیازهای مشتریان و کسب‌وکارها',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'سرعت',
      description: 'اجرای سریع و مطمئن فرآیند تأمین و واردات',
    },
  ];

  return (
    <section id="philosophy" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              چشم‌انداز و فلسفه کاری
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Philosophy */}
          <Card className="glass-card border-none shadow-xl mb-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg text-foreground leading-relaxed text-justify mb-6">
                کیفیت و اعتماد نتیجه مسیر درست و پیگیری مستمر است. این اصل محور تمامی فعالیت‌های گروه <strong className="text-primary">Sahand Apex</strong> است و باعث می‌شود هر فرآیند تأمین و واردات <strong className="text-accent">B2B</strong> مطمئن و قابل اعتماد اجرا شود.
              </p>
              <p className="text-lg text-foreground leading-relaxed text-justify">
                سهند رنجبری‌پور با توجه به تجربه عملی خود، رویکردی سیستماتیک و عملی در مدیریت کسب‌وکار دارد.
              </p>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع شركة المثالي للتنظيف في جدة. اتصل بنا، واتساب، أو املأ نموذج الطلب للحصول على عرض سعر مجاني واستشارة احترافية.",
  alternates: {
    canonical: `${site.url}/contact`,
  },
};

const breadcrumbs = [{ name: "تواصل معنا", url: "/contact" }];

export default function ContactPage() {
  const schemas = [generateLocalBusinessSchema()];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تواصل معنا - نحن هنا لخدمتك"
        subtitle="تواصل معنا"
        description="لديك استفسار؟ تريد عرض سعر؟ أو تحتاج استشارة؟ تواصل معنا الآن بالطريقة التي تناسبك - هاتف، واتساب، أو املأ النموذج وسنرد عليك فوراً."
        image="best cleaning service.jpg"
        imageAlt="تواصل مع شركة المثالي - جدة"
        context={{ page: "تواصل معنا" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  معلومات الاتصال
                </h2>
                <p className="mb-8 text-lg text-gray-700">
                  نحن متاحون دائماً للإجابة على استفساراتك وتلبية احتياجاتك. اختر الطريقة الأنسب لك
                  للتواصل معنا.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">الهاتف</h3>
                      <a
                        href={`tel:${site.phone}`}
                        className="text-lg text-primary transition-colors hover:text-primary/80"
                      >
                        {formatPhoneNumber(site.phone)}
                      </a>
                      <p className="mt-1 text-sm text-gray-600">
                        متاح على مدار الساعة طوال أيام الأسبوع
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">واتساب</h3>
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-green-600 transition-colors hover:text-green-700"
                      >
                        {formatPhoneNumber(site.phone)}
                      </a>
                      <p className="mt-1 text-sm text-gray-600">
                        الطريقة الأسرع للحصول على عرض سعر
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">العنوان</h3>
                      <p className="text-gray-700">{site.address.full}</p>
                      <p className="mt-1 text-sm text-gray-600">جدة، المملكة العربية السعودية</p>
                      <a
                        href={site.mapPin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        <MapPin className="h-4 w-4" />
                        افتح الموقع على الخريطة
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">ساعات العمل</h3>
                      <p className="text-gray-700">متاحون على مدار الساعة</p>
                      <p className="mt-1 text-sm text-gray-600">
                        7 أيام في الأسبوع، بما في ذلك العطلات والأعياد
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  استجابة سريعة مضمونة
                </h3>
                <p className="text-gray-700">
                  نلتزم بالرد على جميع الاستفسارات خلال 30 دقيقة أو أقل. إذا كانت حالة طارئة، اتصل
                  بنا مباشرة للحصول على خدمة فورية.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-gray-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                أرسل لنا رسالة
              </h2>
              <p className="mb-6 text-gray-700">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن لمناقشة احتياجاتك وتقديم عرض سعر
                مخصص.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              موقعنا على الخريطة
            </h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6243719461786!2d39.1564987!3d21.5648694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0235dba7603%3A0x8e0b5f2e0b8e0b5f!2z2LTYp9ix2Lkg2LnYqNiv2KfZhNix2K3ZhdmGINin2YTYr9in2K7ZhCDYp9mE2YHYsdmD2YrYjCDYp9mE2YbZh9i22KnYjCDYrNiv2Kkg23523!5e0!3m2!1sar!2ssa!4v1696671234567!5m2!1sar!2ssa"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع شركة المثالي للتنظيف في جدة"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href={site.mapPin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary/90"
              >
                <MapPin className="h-5 w-5" />
                افتح الموقع في خرائط Google
              </a>
              <p className="mt-4 text-gray-600">
                نخدم جميع أحياء جدة - فريقنا جاهز للوصول إليك أينما كنت في المدينة
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              أسئلة شائعة حول التواصل والحجز
            </h2>
            <div className="space-y-6 text-right">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  كيف يمكنني الحصول على عرض سعر؟
                </h3>
                <p className="text-gray-700">
                  يمكنك الحصول على عرض سعر مجاني بثلاث طرق: (1) اتصل بنا مباشرة وأخبرنا بتفاصيل
                  الخدمة المطلوبة، (2) أرسل رسالة عبر واتساب، (3) املأ نموذج الطلب على الموقع. سنقدم لك
                  تقديراً للسعر بناءً على معلوماتك، أو نرتب معاينة مجانية للتقدير الدقيق.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  كم يستغرق الحصول على رد؟
                </h3>
                <p className="text-gray-700">
                  نلتزم بالرد خلال 30 دقيقة أو أقل خلال ساعات العمل العادية. إذا تواصلت خارج ساعات
                  العمل، سنرد في صباح اليوم التالي. للحالات الطارئة، نوفر خدمة رد فوري عبر الهاتف.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  هل يمكنني طلب معاينة مجانية؟
                </h3>
                <p className="text-gray-700">
                  نعم! نقدم معاينة مجانية للمشاريع الكبيرة (فلل، منشآت تجارية) لنقدم لك عرض سعر دقيق.
                  للخدمات الصغيرة، يمكننا تقديم تقدير عبر الهاتف بناءً على وصفك للمكان.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  ما هي أسرع طريقة للحجز؟
                </h3>
                <p className="text-gray-700">
                  أسرع طريقة هي الاتصال المباشر أو واتساب. يمكننا ترتيب موعد فوري إذا كان لدينا فريق
                  متاح، أو نحدد معك الوقت الأنسب خلال الأيام القادمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



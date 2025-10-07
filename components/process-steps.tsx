import { Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "المعاينة والتقييم",
    description: "نقوم بزيارة الموقع وتقييم الاحتياجات بدقة",
  },
  {
    icon: FileText,
    title: "وضع الخطة",
    description: "نضع خطة عمل مفصلة مع تحديد المواد والأدوات المطلوبة",
  },
  {
    icon: Wrench,
    title: "التنفيذ الاحترافي",
    description: "فريقنا المدرب ينفذ العمل بمهارة عالية وجودة مضمونة",
  },
  {
    icon: CheckCircle,
    title: "المتابعة والضمان",
    description: "نتابع معك ونضمن رضاك التام عن النتيجة",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          خطوات عملنا
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="absolute right-0 top-8 -z-10 hidden h-0.5 w-full bg-gray-200 lg:block lg:last:hidden" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




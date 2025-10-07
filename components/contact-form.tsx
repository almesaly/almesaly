"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  area: z.string().optional(),
  service: z.string().optional(),
  date: z.string().optional(),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">الاسم *</Label>
        <Input id="name" {...register("name")} placeholder="أدخل اسمك الكامل" />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">رقم الهاتف *</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="05xxxxxxxx"
          dir="ltr"
        />
        {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="area">الحي</Label>
          <Input id="area" {...register("area")} placeholder="مثال: الروضة" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">نوع الخدمة</Label>
          <Input id="service" {...register("service")} placeholder="مثال: تنظيف فلل" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">الموعد المفضل</Label>
        <Input id="date" type="datetime-local" {...register("date")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">رسالتك *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="أخبرنا بتفاصيل طلبك..."
          rows={5}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "جارٍ الإرسال..." : "إرسال الطلب"}
      </Button>

      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">
          تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">
          حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.
        </div>
      )}
    </form>
  );
}




import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  area: z.string().optional(),
  service: z.string().optional(),
  date: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Log the lead (in production, save to database or send to CRM)
    console.log("New lead received:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM/lead management system
    // 4. Send SMS notification
    // 5. Send WhatsApp notification

    return NextResponse.json(
      { success: true, message: "تم إرسال طلبك بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "البيانات المدخلة غير صحيحة", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء إرسال الطلب" },
      { status: 500 }
    );
  }
}




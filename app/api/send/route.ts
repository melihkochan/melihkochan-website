import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";
import * as React from "react";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📧 Contact form submission:", body);
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      console.error("❌ Validation error:", zodError);
      return Response.json({ 
        error: zodError?.issues?.[0]?.message || "Form doğrulama hatası" 
      }, { status: 400 });
    }

    if (!resend) {
      console.error("❌ RESEND_API_KEY environment variable is not set");
      return Response.json({ 
        error: "Email servisi yapılandırılmamış. Lütfen RESEND_API_KEY environment variable'ını ekleyin." 
      }, { status: 500 });
    }

    console.log("📤 Sending email to:", config.email);
    
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      replyTo: zodData.email,
      subject: `Portfolio İletişim: ${zodData.fullName}`,
      react: React.createElement(EmailTemplate, {
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("❌ Resend error:", resendError);
      return Response.json({ 
        error: resendError.message || "Email gönderilirken bir hata oluştu." 
      }, { status: 500 });
    }

    console.log("✅ Email sent successfully:", resendData);
    return Response.json(resendData);
  } catch (error: any) {
    console.error("❌ Unexpected error:", error);
    return Response.json({ 
      error: error?.message || "Beklenmeyen bir hata oluştu." 
    }, { status: 500 });
  }
}

import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
      Yeni İletişim Formu Mesajı
    </h1>
    <div style={{ marginTop: '20px' }}>
      <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
        <strong>Gönderen:</strong> {fullName}
      </p>
      <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
        <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#0070f3' }}>{email}</a>
      </p>
    </div>
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
      <h2 style={{ color: '#333', fontSize: '16px', marginBottom: '10px' }}>Mesaj:</h2>
      <p style={{ color: '#555', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '5px', fontSize: '12px', color: '#666' }}>
      Bu mesaj portfolio web sitenizdeki iletişim formundan gönderilmiştir.
    </div>
  </div>
);

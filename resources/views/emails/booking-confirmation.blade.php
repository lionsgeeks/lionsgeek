<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .logo {
            max-width: 150px;
            margin-bottom: 15px;
        }
        .content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
        }
        .event-details {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .highlight-box {
            background-color: #e7f3ff;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #007bff;
        }
        .divider {
            margin: 30px 0;
            border-top: 2px solid #e9ecef;
        }
        .rtl {
            direction: rtl;
            text-align: right;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        .social-links a {
            color: #007bff;
            text-decoration: none;
            margin: 0 6px;
            font-size: 13px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffc107;
            color: #000;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 0;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="header">
        <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEI5pl3PyS-Eg/company-logo_200_200/company-logo_200_200/0/1734088749325/lionsgeek_logo?e=2147483647&v=beta&t=2tZP_cpgMZO4IFtfyB0GNKXIrPO5I5w6a8iUlnrhntQ"
             width="90" alt="LionsGeek" class="logo">
        <h1>🎉 Your Place Is Reserved!</h1>
        <p>{{ $eventName }}</p>
    </div>

    <div class="content">

        <h2>Hello {{ $booking->name }}!</h2>

        <p>
            Great news — your place at <strong>{{ $eventName }}</strong> has been confirmed.
            We're excited to have you join us!
        </p>

        <div class="event-details">
            <h3>📅 Event Details</h3>
            <p><strong>Event:</strong> {{ $eventName }}</p>
            <p><strong>Date:</strong> {{ \Carbon\Carbon::parse($eventDate)->format('l, F j, Y \a\t g:i A') }}</p>
            <p><strong>Description:</strong> {{ $eventDescription }}</p>
            <p><strong>Location:</strong> LionsGeek, 4th Floor, Ain Sebaa Center, Route de Rabat, Casablanca 20060, Morocco</p>
        </div>

        <div class="highlight-box">
            <h3>📎 Your QR Code is Attached</h3>
            <p>
                We've attached a <strong>PDF document</strong> to this email containing your personal QR code.
                Please bring a copy — printed or digital — on the day of the event. It will be scanned at the entrance for check-in.
            </p>
        </div>

        <p><strong>Important Notes:</strong></p>
        <ul>
            <li>Arrive on time — the event starts promptly</li>
            <li>Bring your QR code (the attached PDF) on your phone or printed</li>
            <li>Feel free to bring any questions you have about the event</li>
        </ul>

        <p>
            If you have any questions before the event, reach us at
            <a href="mailto:contact@lionsgeek.ma">contact@lionsgeek.ma</a> or call +212 522 662 660.
        </p>

        <p>We can't wait to see you there!</p>

        <p>Warm regards,<br><strong>The LionsGeek Team</strong></p>

        <p><a href="{{ config('app.url') }}" class="btn">Visit Our Website</a></p>

        <div class="divider"></div>

        <div class="rtl">
            <h2>مرحبًا {{ $booking->name }}!</h2>

            <p>
                أخبار رائعة — لقد تم تأكيد مكانك في فعالية <strong>{{ $eventName }}</strong>.
                يسعدنا انضمامك إلينا!
            </p>

            <div class="event-details">
                <h3>📅 تفاصيل الفعالية</h3>
                <p><strong>الفعالية:</strong> {{ $eventName }}</p>
                <p><strong>التاريخ:</strong> {{ \Carbon\Carbon::parse($eventDate)->format('l, F j, Y \a\t g:i A') }}</p>
                <p><strong>الوصف:</strong> {{ $eventDescription }}</p>
                <p><strong>الموقع:</strong> LionsGeek، الطابق الرابع، مركز عين السبع، طريق الرباط، الدار البيضاء 20060، المغرب</p>
            </div>

            <div class="highlight-box">
                <h3>📎 رمز QR الخاص بك مرفق</h3>
                <p>
                    لقد أرفقنا <strong>ملف PDF</strong> يحتوي على رمز QR الشخصي الخاص بك.
                    يرجى إحضار نسخة — مطبوعة أو رقمية — يوم الفعالية. سيتم مسحه عند المدخل لتسجيل الحضور.
                </p>
            </div>

            <p>إذا كان لديك أي استفسار قبل الفعالية، تواصل معنا على
                <a href="mailto:contact@lionsgeek.ma">contact@lionsgeek.ma</a>
                أو اتصل بنا على +212 522 662 660.
            </p>

            <p>مع أطيب التحيات،<br><strong>فريق LionsGeek</strong></p>
        </div>

    </div>

    <div class="footer">
        <div class="social-links" style="margin-bottom: 10px;">
            <a href="https://www.instagram.com/lions_geek">Instagram</a> ·
            <a href="https://www.facebook.com/LionsGeek">Facebook</a> ·
            <a href="https://x.com/LionsGeek">X (Twitter)</a> ·
            <a href="https://www.tiktok.com/@lions_geek">TikTok</a>
        </div>
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>If you have any questions, contact us at <a href="mailto:contact@lionsgeek.ma">contact@lionsgeek.ma</a></p>
        <p>&copy; {{ date('Y') }} LionsGeek. All rights reserved.</p>
    </div>

</body>
</html>

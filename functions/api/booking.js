const recipient = 'info@mail.tmc.io.vn';
const sender = 'hoangthaiminhkg@gmail.com';

function clean(value, maxLength = 500) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();
    const booking = {
      name: clean(data.get('ho-ten'), 120),
      phone: clean(data.get('so-dien-thoai'), 30),
      vehicle: clean(data.get('loai-xe'), 120),
      pickup: clean(data.get('diem-don'), 250),
      dropoff: clean(data.get('diem-den'), 250),
      note: clean(data.get('ghi-chu'), 500)
    };

    if (!booking.name || !booking.phone || !booking.vehicle || !booking.pickup || !booking.dropoff) {
      return Response.json({ ok: false, message: 'Vui lòng điền đủ thông tin bắt buộc.' }, { status: 400 });
    }

    const subject = `Yêu cầu đặt xe mới từ ${booking.name}`;
    const rows = Object.entries({
      'Họ và tên': booking.name,
      'Số điện thoại': booking.phone,
      'Loại xe': booking.vehicle,
      'Điểm đón': booking.pickup,
      'Điểm đến': booking.dropoff,
      'Ghi chú': booking.note || 'Không có'
    }).map(([label, value]) => `<tr><th style="text-align:left;padding:8px 12px;border-bottom:1px solid #ddd">${label}</th><td style="padding:8px 12px;border-bottom:1px solid #ddd">${escapeHtml(value)}</td></tr>`).join('');

    await context.env.EMAIL.send({
      to: recipient,
      from: { email: sender, name: 'TmC GradCar Rạch Giá' },
      replyTo: sender,
      subject,
      text: Object.entries(booking).map(([key, value]) => `${key}: ${value || 'Không có'}`).join('\n'),
      html: `<h2>${escapeHtml(subject)}</h2><table style="border-collapse:collapse">${rows}</table>`
    });

    return Response.json({ ok: true, message: 'Đã gửi yêu cầu. TmC sẽ liên hệ lại sớm.' });
  } catch (error) {
    console.error('Booking email failed', error);
    return Response.json({ ok: false, message: 'Chưa gửi được yêu cầu. Vui lòng gọi 0775 856 456.' }, { status: 500 });
  }
}

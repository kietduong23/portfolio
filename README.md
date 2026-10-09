# Duong Anh Kiet — Portfolio

Next.js (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide + React Icons

## Chạy local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # kiểm tra build production
```

## Cần chỉnh trước khi deploy


1. Đặt file CV vào `public/Duong-Anh-Kiet-CV.pdf` (nút Resume sẽ tải file này).
2. `public/avatar.png` là ảnh đại diện — thay bằng ảnh khác nếu muốn.

- Văn bản hiển thị (tiếng Anh + tiếng Việt, gồm tiêu đề hero, giới thiệu, kinh nghiệm, dự án): `lib/content.ts`
- Dữ liệu không phụ thuộc ngôn ngữ (công ty, tech stack, số liệu, email/điện thoại): `lib/data.ts`
- Icon công nghệ: `lib/tech.tsx`

Nút **EN | VI** trên thanh điều hướng đổi ngôn ngữ; lựa chọn được lưu trong trình duyệt.

## Deploy lên Vercel

Đẩy repo lên GitHub → Vercel → **Add New Project** → chọn repo → Deploy (không cần cấu hình thêm).

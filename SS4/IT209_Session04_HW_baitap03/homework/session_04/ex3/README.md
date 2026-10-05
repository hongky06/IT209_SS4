# Bài 3: Cấu hình xác thực SSH và Đẩy dự án lên GitHub

## 1. Khởi tạo cặp khóa SSH (Ed25519)

### Lệnh tạo khóa:
```bash
ssh-keygen -t ed25519 -C "quyendk.b24dtcn380@stu.ptit.edu.vn"
```

- Khóa riêng tư (Private key): `~/.ssh/id_ed25519` (Bảo mật, không tải lên kho lưu trữ).
- Khóa công khai (Public key): `~/.ssh/id_ed25519.pub`.

### Nội dung khóa công khai (Public key) dùng để thêm vào GitHub:
```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDtXKN1q16n4EuXsa4SQQiu8FAaWboh7Rrau1qD7/BZU quyendk.b24dtcn380@stu.ptit.edu.vn
```

### Thao tác trên GitHub:
1. Truy cập: `GitHub` -> `Settings` -> `SSH and GPG keys`.
2. Chọn `New SSH key`, nhập Title và dán nội dung khóa công khai ở trên vào ô Key, sau đó nhấn `Add SSH key`.

---

## 2. Kiểm tra kết nối SSH tới GitHub

### Lệnh kiểm tra:
```bash
ssh -T git@github.com
```

### Kết quả mong đợi:
```text
Hi DoKhacQuyen94! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 3. Cấu hình liên kết Remote Repository bằng giao thức SSH

### Lệnh liên kết remote:
```bash
git remote add origin git@github.com:DoKhacQuyen94/IT209_Session04_HW_baitap03.git
```

### Lệnh kiểm tra remote:
```bash
git remote -v
```

### Kết quả mong đợi:
```text
origin  git@github.com:DoKhacQuyen94/IT209_Session04_HW_baitap03.git (fetch)
origin  git@github.com:DoKhacQuyen94/IT209_Session04_HW_baitap03.git (push)
```

---

## 4. Đẩy (push) mã nguồn lên GitHub

### Lệnh thực hiện:
```bash
git push -u origin main
```

---

## 5. Thông tin kho lưu trữ GitHub
- Đường dẫn SSH: `git@github.com:DoKhacQuyen94/IT209_Session04_HW_baitap03.git`
- Đường dẫn Web: `https://github.com/DoKhacQuyen94/IT209_Session04_HW_baitap03`

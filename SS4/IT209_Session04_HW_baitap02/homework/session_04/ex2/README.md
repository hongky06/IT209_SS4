# Bài 2: Quản lý nhánh và Giải quyết xung đột (Merge Conflict)

## Quản lý dự án
Nội dung được kết hợp sau khi giải quyết xung đột giữa nhánh main và feature-update.

---

## Báo cáo ngắn các bước giải quyết xung đột thủ công

### 1. Các bước thực hiện
1. **Khởi tạo và commit ban đầu trên nhánh main**:
   - Tạo tệp `homework/session_04/ex2/README.md`.
   - Thực hiện commit: `git commit -m "Initial commit on main"`.

2. **Tạo nhánh phụ `feature-update` và chỉnh sửa**:
   - Tạo và chuyển sang nhánh mới: `git checkout -b feature-update`.
   - Chỉnh sửa dòng 4 trong tệp `README.md` thành: `Nội dung được cập nhật từ nhánh feature-update.`
   - Thực hiện commit: `git commit -m "Update README on feature-update"`.

3. **Chuyển về nhánh `main` và chỉnh sửa cùng dòng**:
   - Chuyển về nhánh chính: `git checkout main`.
   - Chỉnh sửa cùng dòng 4 trong tệp `README.md` thành: `Nội dung được cập nhật từ nhánh main.`
   - Thực hiện commit: `git commit -m "Update README on main"`.

4. **Gộp nhánh và kích hoạt xung đột (Merge Conflict)**:
   - Thực hiện lệnh: `git merge feature-update`.
   - Git phát hiện xung đột nội dung trên tệp `README.md` và dừng quá trình gộp tự động.

5. **Xử lý xung đột thủ công**:
   - Mở tệp `README.md` và nhận diện các ký hiệu xung đột:
     - `<<<<<<< HEAD`: Bắt đầu phần thay đổi trên nhánh hiện tại (`main`).
     - `=======`: Ranh giới ngăn cách giữa hai thay đổi.
     - `>>>>>>> feature-update`: Kết thúc phần thay đổi đến từ nhánh gộp (`feature-update`).
   - Xóa bỏ thủ công toàn bộ các dòng chứa ký hiệu `<<<<<<< HEAD`, `=======`, `>>>>>>> feature-update`.
   - Giữ lại và hợp nhất nội dung mong muốn.

6. **Hoàn tất commit gộp nhánh**:
   - Đưa tệp đã giải quyết vào khu vực chờ: `git add homework/session_04/ex2/README.md`.
   - Thực hiện commit hoàn tất gộp nhánh: `git commit -m "Merge branch 'feature-update' into main"`.

---

### 2. Kiểm tra lịch sử commit dạng đồ thị nhánh (`git log --graph --oneline`)
```text
*   487f75d (HEAD -> main) Merge branch 'feature-update' into main
|\  
| * 0055706 (feature-update) Update README on feature-update
* | 9558556 Update README on main
|/  
* c302122 Initial commit on main
```

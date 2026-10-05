# Bài 1: Khôi phục commit đã mất bằng Git Reflog

## 1. Bối cảnh và Mô tả lỗi
- Khởi tạo tệp tin `feature.txt` với nội dung `Day la tinh nang quan trong`.
- Thực hiện thêm và commit thay đổi:
  ```bash
  git add homework/session_05/ex1/feature.txt
  git commit -m "Them tinh nang quan trong"
  ```
  *(Mã commit được tạo: `947466d`)*
- Vô tình thực thi lệnh xóa lùi commit và xóa sạch thư mục làm việc:
  ```bash
  git reset --hard HEAD~1
  ```
- Hậu quả: Commit quan trọng bị biến mất khỏi nhánh làm việc và tệp `feature.txt` bị xóa khỏi đĩa cứng.

---

## 2. Kiểm tra xác nhận mất commit (`git log --oneline`)
```bash
git log --oneline
```
**Kết quả hiển thị:**
```text
836d9c1 Initial setup for ex4 with .gitignore
1a8a3ad docs: Hoan thanh bai 3 - Cau hinh xac thuc SSH
5fb6e29 Merge branch 'feature-update' into main
```
*(Commit `Them tinh nang quan trong` không còn xuất hiện trong lịch sử git log).*

---

## 3. Truy vết commit bị mất bằng Git Reflog (`git reflog`)
Git Reflog ghi lại toàn bộ lịch sử di chuyển của con trỏ `HEAD` trên repository cục bộ:
```bash
git reflog
```
**Kết quả hiển thị:**
```text
836d9c1 HEAD@{0}: reset: moving to HEAD~1
947466d HEAD@{1}: commit: Them tinh nang quan trong
836d9c1 HEAD@{2}: commit (amend): Initial setup for ex4 with .gitignore
```
*(Xác định được mã hash của commit vừa bị mất là `947466d` tại vị trí `HEAD@{1}`).*

---

## 4. Khôi phục commit về nhánh hiện tại (`git reset --hard`)
Sử dụng mã hash tìm được trong Reflog để khôi phục:
```bash
git reset --hard 947466d
```
*(Hoặc dùng lệnh: `git reset --hard HEAD@{1}`)*

---

## 5. Kết quả kiểm tra sau khi khôi phục

### Kiểm tra lịch sử commit (`git log --oneline`):
```bash
git log --oneline -n 3
```
**Kết quả hiển thị:**
```text
947466d Them tinh nang quan trong
836d9c1 Initial setup for ex4 with .gitignore
1a8a3ad docs: Hoan thanh bai 3 - Cau hinh xac thuc SSH
```
*(Commit `Them tinh nang quan trong` đã được khôi phục thành công về đầu nhánh).*

### Kiểm tra tệp tin trên thư mục làm việc:
Tệp tin `homework/session_05/ex1/feature.txt` đã được phục hồi nguyên vẹn với nội dung:
```text
Day la tinh nang quan trong
```

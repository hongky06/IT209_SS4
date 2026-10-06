# Bài 4: Quản lý tệp tin bỏ qua (.gitignore) và Sửa lịch sử (Amend)

## 1. Giải thích cách gỡ bỏ file khỏi cache bằng lệnh `git rm --cached`
- **Mục đích**: Gỡ bỏ tệp tin nhạy cảm `credentials.txt` ra khỏi vùng theo dõi (Index/Staging Area) của Git mà không làm mất tệp tin vật lý trên đĩa cứng.
- **Phân biệt**:
  - `git rm <file>`: Xóa tệp tin khỏi cả Git theo dõi và xóa vật lý trên ổ đĩa.
  - `git rm --cached <file>`: Chỉ xóa tệp tin khỏi bộ nhớ đệm (Index) của Git, giữ nguyên trạng thái tệp tin trên thư mục làm việc cục bộ (Working Directory).
- **Lệnh thực hiện**:
  ```bash
  git rm --cached homework/session_04/ex4/credentials.txt
  ```

---

## 2. Cấu hình tệp `.gitignore`
- Tạo tệp `.gitignore` cùng thư mục với nội dung:
  ```text
  credentials.txt
  ```
- Thao tác này giúp Git tự động bỏ qua, không theo dõi tệp `credentials.txt` trong các lần commit tiếp theo.

---

## 3. Sửa đổi commit gần nhất bằng tùy chọn `--amend`
- **Mục đích**: Gộp việc loại bỏ `credentials.txt` và thêm tệp `.gitignore` vào commit trước đó, đồng thời thay đổi thông điệp commit để loại bỏ vết commit nhầm.
- **Lệnh thực hiện**:
  ```bash
  git add homework/session_04/ex4/.gitignore
  git commit --amend -m "Initial setup for ex4 with .gitignore"
  ```

---

## 4. Kết quả kiểm tra

### Kiểm tra trạng thái tệp tin (`git status`)
```bash
git status
```
**Kết quả hiển thị:**
```text
On branch main
nothing to commit, working tree clean
```
*(Tệp `credentials.txt` vẫn tồn tại trên ổ đĩa nhưng không còn xuất hiện trong danh sách theo dõi của Git).*

---

### Kiểm tra lịch sử commit gần nhất (`git log -n 1`)
```bash
git log -n 1
```
**Kết quả hiển thị:**
```text
commit 91860f92540f18b73930e660aaa565188cc3c706
Author: dohongky <dohongky.b24dtcn380@stu.ptit.edu.vn>
Date:   Mon Oct 5 22:28:51 2026 +0700

    Initial setup for ex4 with .gitignore
```
*(Thông điệp commit đã được cập nhật lại thành công bằng `--amend`).*

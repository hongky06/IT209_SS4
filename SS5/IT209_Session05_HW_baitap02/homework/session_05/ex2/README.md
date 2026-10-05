# Bài 2: Tái cấu trúc lịch sử commit bằng Interactive Rebase

## 1. Bối cảnh
Trước khi tái cấu trúc, nhánh làm việc chứa 4 commit nhỏ lẻ và chứa tệp tin rác:
- `11190a4 feat: khoi tao module auth`
- `e9ee3d5 fix typo`
- `fee2bcb adds utility functions`
- `edffd14 add temp file for debug`

---

## 2. Lệnh thực hiện Interactive Rebase
Chạy lệnh lùi về 4 commit trước:
```bash
git rebase -i HEAD~4
```

---

## 3. Giao diện soạn thảo cấu hình Interactive Rebase
Trong trình soạn thảo mở ra, cấu hình các thao tác `pick`, `squash`, `drop`:
```text
pick 11190a4 feat: khoi tao module auth
squash e9ee3d5 fix typo
squash fee2bcb adds utility functions
drop edffd14 add temp file for debug

# Rebase 1fd11c6..edffd14 onto 1fd11c6 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous commit's log message
# d, drop <commit> = remove commit
```

- **pick**: Giữ lại commit đầu tiên làm commit nền tảng.
- **squash**: Gộp các commit `fix typo` và `adds utility functions` vào commit trước đó.
- **drop**: Xóa bỏ hoàn toàn commit chứa tệp rác `temp.txt`.

---

## 4. Soạn thảo thông điệp commit sau khi gộp
Tại màn hình soạn thảo thông điệp của Git, cập nhật thông điệp mới:
```text
feat: hoan thien module authentication
```

---

## 5. Kết quả kiểm tra lịch sử commit sau khi hoàn tất (`git log --oneline`)
```bash
git log --oneline -n 4
```

**Kết quả hiển thị:**
```text
c7ffc3d feat: hoan thien module authentication
1fd11c6 docs: Hoan thanh bao cao bai 1 session 5
947466d Them tinh nang quan trong
836d9c1 Initial setup for ex4 with .gitignore
```

*(Lịch sử commit hiển thị duy nhất một commit sạch sẽ đại diện cho tính năng, tệp `temp.txt` và các commit rác đã được loại bỏ hoàn toàn).*

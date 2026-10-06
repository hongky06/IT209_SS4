// Authentication module
// Module xác thực người dùng
// Có nhiệm vụ xử lý các chức năng liên quan đến đăng nhập và đăng xuất.


// Hàm login dùng để xử lý việc đăng nhập
// username: tên tài khoản người dùng nhập vào
// password: mật khẩu người dùng nhập vào
function login(username, password) {

    // Kiểm tra username và password có tồn tại hay không
    //
    // username:
    // - Nếu có giá trị -> true
    // - Nếu rỗng, null, undefined -> false
    //
    // password:
    // - Nếu có giá trị -> true
    // - Nếu rỗng, null, undefined -> false
    //
    // Toán tử && yêu cầu CẢ username và password đều phải có giá trị.
    //
    // Ví dụ:
    // username = "admin"
    // password = "123456"
    // => username && password
    // => "123456"
    //
    // Boolean(...) chuyển kết quả thành true hoặc false.
    //
    // Vì vậy:
    // - Có username + password -> true
    // - Thiếu username hoặc password -> false

    return Boolean(username && password);
}


// Hàm logout dùng để xử lý việc đăng xuất
function logout() {

    // Trả về true để biểu thị thao tác đăng xuất thành công.
    //
    // Trong ví dụ đơn giản này, logout chưa thực sự:
    // - Xóa session
    // - Xóa token
    // - Xóa cookie
    // - Kiểm tra người dùng đã đăng nhập hay chưa
    //
    // Nó chỉ đơn giản trả về true.

    return true;
}
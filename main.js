// Lession 1
/**
 * Đầu vào:
 * Tạo ra 3 biến cho người dùng nhập vào
 *  Tạo một biết tạm để đổi chỗ 3 số 
 * Xử lý:
 * Trường hợp 1:
 * Nếu số 1 lớn hơn số 2 thì đổi chỗ 
 * Trường hợp 2:
 * nếu số 1 lớn hơn số 3 thì đổi chỗ
 * Trường hợp 3:
 * Nếu số 2 lớn hơn số 3 thì đổi chỗ
 * 
 * Đầu ra:
 * Xuất ra 3 số người dùng nhập vào theo thứ tự
 * từ bé đến lớn
 */

 document.getElementById("btn__Sort").onclick = function() {
    // Đầu vào
    var numBer1 = document.getElementById("txtNumber1").value * 1;
    var numBer2 = document.getElementById("txtNumber2").value * 1;
    var numBer3 = document.getElementById("txtNumber3").value * 1;
    // Xử lý
    if (numBer1 > numBer2) {
        var temp = numBer1;
        numBer1 = numBer2;
        numBer2 = temp;
    }

    if (numBer1 > numBer3) {
        temp = numBer1;
        numBer1 = numBer3;
        numBer3 = temp;
    }
    if (numBer2 > numBer3) {
        temp = numBer2;
        numBer2 = numBer3;
        numBer3 = temp;
    }
    // Đầu ra
    var result = " Order of numbers after sorting : " + numBer1 + " " + numBer2 + " " + numBer3;
    document.getElementById("footer__Sort").innerHTML = result;
};
// lession 2
/**
 * Đầu vào:
 * Cho người dùng nhập vào mình là ai
 * rồi sau đó cho máy tính chào
 * Xử lý:
 * Nếu người dùng nhập B thì chào bố
 * Nếu người dùng nhập M thì chào mẹ
 * Nếu người dùng nhập A thì chào anh
 * Nếu người dùng nhập E thì chào em
 * Đẩu ra:
 * Xuất ra câu chào hỏi người đang dùng máy tính
 */
document.getElementById("btn__Member").onclick = function() {
        var memBer = document.getElementById("txtMember").value;
        if (memBer == "B") {
            var result = "hello dad ";
        } else if (memBer == "M") {
            result = "hello mom ";
        } else if (memBer == "A") {
            result = "hello Brother ";
        } else if (memBer == "E") {
            result = "hello sister ";
        } else {
            result = "You are not a family member or you entered it wrong"
        }
        document.getElementById("footer__Member").innerHTML = result;
    }
    //lession 3
    /**
     * Đầu vào:
     * tạo 2 biến:
     * evenNumber=0
     * oddNumber=0
     * Tạo thêm 3 biến cho người dùng nhập vào
     * Xử lý:
     * Nếu số 1 chia hết cho 2 thì evenNumber +1
     * Ngược lại thì oddNumber +1
     * Tương tự với 2 số còn lại
     * Đầu ra:
     * Đưa ra kết quả có bao nhiêu số chẵn bao nhiêu số lẻ
     */
document.getElementById("btn__Count").onclick = function() {
    var numBer1 = document.getElementById("txtNumber5").value * 1;
    var numBer2 = document.getElementById("txtNumber6").value * 1;
    var numBer3 = document.getElementById("txtNumber7").value * 1;
    var countEvenNumber = 0;
    var countOddNumBer = 0;
    if (numBer1 % 2 == 0) {
        countEvenNumber++;
    } else {
        countOddNumBer++;
    }
    if (numBer2 % 2 == 0) {
        countEvenNumber++;
    } else {
        countOddNumBer++;
    }
    if (numBer3 % 2 == 0) {
        countEvenNumber++;
    } else {
        countOddNumBer++;
    }
    var result = " have " + countEvenNumber + " even number " + "<br>" + " have " + countOddNumBer + " odd number";
    document.getElementById("footer__Count").innerHTML = result;
};
// Lession 4

/**
 * Đầu vào:
 * Tạo ra 3 biến
 * Edge 1
 * Edge 2
 * Edge 3
 * Cho người dùng nhập vào 3 cạnh tam giác
 * Xử lý:
 * Tam giác vuông là tam giác bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại
 * Công thức:
 * Edge1 * Edge1 + Edge2 * Edge2 == Edge 3 * Edge 3 || 
 * Edge1 * Edge 3 + Edge 3 * Edge 3 == Edge2 * Edge2 || Edge2 * Edge2 + 
 * Edge 3 * Edge 3 == Edge1 * Edge 3
 * Tam giác đều là tam giác có ba cạnh bằng nhau. Ta chỉ cần 
 * kiểm tra điều kiện a==b && b==c nếu đúng thì đó là tam giác đều.
 * Tam giác cân là tam giác có hai cạnh bằng nhau. 
 * Để kiểm tra xem có phải là tam giác cân hay không ta chỉ cần 
 * kiểm tra điều kiện sau:Edge1 ==Edge2 || Edge1==Edge3 || Edge2==Edge3.
 * Đầu ra :
 * In ra kết quả trả lời đây là tam giác gì
 */

document.getElementById("btn__triangle").onclick = function() {
    //Đầu vào 
    var Edge1 = document.getElementById("txtedge1").value * 1;
    var Edge2 = document.getElementById("txtedge2").value * 1;
    var Edge3 = document.getElementById("txtedge3").value * 1;
    //Xử lý
    if (Edge1 * Edge1 + Edge2 * Edge2 == Edge3 * Edge3 ||
        Edge1 * Edge3 + Edge3 * Edge3 == Edge2 * Edge2 ||
        Edge2 * Edge2 + Edge3 * Edge3 == Edge1 * Edge3) {
        var result = "This is right triangle";
    } else if (Edge1 == Edge2 && Edge2 == Edge3) {
        result = "This is equilateral triangle";
    } else if (Edge1 == Edge2 || Edge1 == Edge3 || Edge2 == Edge3) {
        result = "This is isosceles triangle";
    } else {
        result = "this isn't triangle, Are you enter what is that ?????";
    }
    document.getElementById("footer__triangle").innerHTML = result;

}
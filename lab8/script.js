function scrollToElement(elementSelector, instance = 0){
    // Chọn các phần tử khớp với bộ chọn đã cho
    const elements = document.querySelectorAll(elementSelector);
    // Kiểm tra xem có phần tử nào khớp với bộ chọn không và phiên bản được yêu cầu có thoát không
    if(elements.length > instance){
        // Cuộn đến phiên bản được chỉ định của phần tử
        elements[instance].scrollIntoView({behavior: 'smooth'});

    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click' , () =>{
    scrollToElement('.header');
});

link2.addEventListener('click' , () =>{
    // Di chuyển đến phần tử thứ hai với lớp "header"
    scrollToElement('.header',1);
});

link3.addEventListener('click' , () =>{
    scrollToElement('.column');
});
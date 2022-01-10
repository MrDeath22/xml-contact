let xml = new XMLHttpRequest;
let url = 'https://reqres.in/api/users';

let cont = document.querySelector('.container');
let temp = document.querySelector('#temp').content;
let tempImg = document.querySelector('#img-temp').content;


xml.open('get', url);

xml.onload = () => {
   let obj = JSON.parse(xml.responseText).data;

   function getTemp() {
      for (let i of obj) {
         let elTemp = temp.cloneNode(true);
         let img = elTemp.querySelector('.img').src = i.avatar;
         elTemp.querySelector('.name').textContent = i.first_name;
         elTemp.querySelector('.surname').textContent = i.last_name;
         elTemp.querySelector('.email').textContent = i.email;
         let box = elTemp.querySelectorAll('.box');
         let btn = elTemp.querySelector('.del');

         box.forEach(item => {
            item.addEventListener('click', () => {
               let elTemp1 = tempImg.cloneNode(true);
               let imgg = elTemp1.querySelector('.imgg')
               imgg.src = img;
               elTemp1.querySelector('.bg').addEventListener('click', (e) => {
                  e.target.style.display = 'none';
                  imgg.style.display = 'none';
               })
               
               cont.append(elTemp1);
            })
         });
         
         btn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.className = 'delete';
         })

         cont.append(elTemp);
      }
   }

   getTemp();
}

xml.send();


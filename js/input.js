//let age = document.getElementById('age');
//function showUser(surname, name) {
//   alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
//}
//showUser.apply(age, ['Klen', 'Illia']);

class Option {
   constructor(height = 300, width = 300, bg = 'red', fontSize = 24, textAlign = 'left', color = '#fff') {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
      this.color = color;
   }
   createDiv() {
      let createDivBox = document.createElement('div');
      createDivBox.innerHTML = '<p>Привет Мир! Это было великолептно</p>';
      document.body.appendChild(createDivBox);
      let styleDivBox = `
            height:${this.height}px;
            width:${this.width}px;
            background-color:${this.bg};
            font-size:${this.fontSize}px;
            text-align:${this.textAlign}; 
            color: ${this.color};
     `;
      createDivBox.style.cssText = styleDivBox;
   }
}

const box = new Option(300, 300, "red", 24, "center");

box.createDiv();


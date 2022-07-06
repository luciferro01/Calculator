import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


subText = '';
value = '';
mainText = '';

backSpace(){
   this.value = this.value.slice(0,-1);
   this.mainText = this.value;
}
answer(){
  this.subText = this.mainText;
  this.mainText = eval(this.value);
  this.value = this.mainText;
}
pressKey(data:any){
  this.value = this.value + data;
  this.mainText = this.value;
  console.log(data);
}

allClear(){
  this.mainText = '';
  this.value = '';
  this.subText = '';
}
solve(enter:any){
  this.mainText = eval(enter);
}

}

//Can be checked by one more time


  // subText:any;
  // // mainText:any;
  // operand1!: number;
  // operand2!: number;
  // operator:string = '';
  // operatorSet = false;
  // calculationString:any;
  // answered:boolean = false;



  // pressKey(data : any){
  //   if(data === '/' || data === 'x' || data === '-' || data === '+'){

  //   }
  //   console.log(data);
  // }


//  pressKey(key:any){
//   if(key === '/' || key === 'x' || key === '-' || key === '+'){
//     this.operator = key;
//   }
//   this.mainText = key;
//   console.log(this.mainText);
//   this.operand1 = parseFloat(this.mainText);
  // this.operatorSet = true;
  // if(this.mainText.lenght === 10){
  //   return;
  // };
  // this.mainText +=key;
//  }


// pressKey(key: string) {
//   if (key === '/' || key === 'x' || key === '-' || key === '+') {
//      const lastKey = this.mainText[this.mainText.length - 1];
//      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
//        this.operatorSet = true;
//      }
//      if ((this.operatorSet) || (this.mainText === '')) {
//        return;
//      }
//      this.operand1 = parseFloat(this.mainText);
//      this.operator = key;
//      this.operatorSet = true;
//   }
//   if (this.mainText.length === 10) {
//     return;
//   }
//   this.mainText += key;
// }

//  allClear(){
//   this.mainText = '';
//   this.subText = '';
//   this.operatorSet = false;
//  }
//  answer(){
//   this.calculationString = this.mainText;
//     this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
//     if (this.operator === '/') {
//       this.subText = this.mainText;
//       this.mainText = (this.operand1 / this.operand2).toString();
//       this.subText = this.calculationString;
//       if (this.mainText.length > 9) {
//         this.mainText = this.mainText.substr(0, 9);
//       }
//     } else if (this.operator === 'x') {
//       this.subText = this.mainText;
//       this.mainText = (this.operand1 * this.operand2).toString();
//       this.subText = this.calculationString;
//       if (this.mainText.length > 9) {
//         this.mainText = 'ERROR';
//         this.subText = 'Range Exceeded';
//       }
//     } else if (this.operator === '-') {
//       this.subText = this.mainText;
//       this.mainText = (this.operand1 - this.operand2).toString();
//       this.subText = this.calculationString;
//     } 
//     else if (this.operator === '+') {
//       this.subText = this.mainText;
//       this.mainText = (this.operand1 + this.operand2).toString();
//       this.subText = this.calculationString;
//       if (this.mainText.length > 9) {
//         this.mainText = 'ERROR';
//         this.subText = 'Range Exceeded';
//       }
//     } else {
//       this.subText = 'ERROR: Invalid Operation';
//     }
//     this.answered = true;
//  }
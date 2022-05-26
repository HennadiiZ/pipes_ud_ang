import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;
  
  onNameChange(value: any){
      this.name = value.value;
  }

  onDateChange(value: any){
    this.date = value.value;
  }

  onAmountChange(value: any){
    this.amount = parseFloat(value.value);
  }

  onHeightChange(value: any){
    this.height = parseFloat(value.value);
  }

  onMilesChange(value: any){
    this.miles = parseFloat(value.value);
  }
}

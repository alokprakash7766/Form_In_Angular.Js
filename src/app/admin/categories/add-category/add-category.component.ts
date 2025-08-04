import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {



  category = {
    name: "",
    description: ""
  }



  submit() {

    console.log(this.category);
    

    // let name = this.category.name
    // let description = this.category.description

    // console.log(`name ${name} , Description ${description}`);


  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado</p>",
  
   styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
 
  apellido="Perez";
 
  edad=28;
 
  //empresa="Google";
 
 /*getEdad(){
    return this.edad;
 } 
 */

/*callco(value:string){
}
*/


  constructor() { }

  ngOnInit(): void {
  
  }

}


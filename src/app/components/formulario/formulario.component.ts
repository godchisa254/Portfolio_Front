import { Component, OnInit } from '@angular/core'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  email: string = '';
  message: string = '';
  isSubmitting: boolean = false;

  onSubmit() {
    if (!this.email || !this.message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.isSubmitting = true;
 
    setTimeout(() => {
      this.isSubmitting = false;
      alert('¡Formulario enviado correctamente!');
      this.resetForm();
    }, 2000);
  }

  resetForm() {
    this.email = '';
    this.message = '';
  }

}

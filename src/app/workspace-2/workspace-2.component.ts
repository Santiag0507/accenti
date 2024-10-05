import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

interface Task {
  id: number;
  assignee: string;
  avatar: string;
  title: string;
  description: string;
  time: string;
  status: string;
}

interface Message {
  sender: string;
  avatar: string;
  content: string;
  time: string;
}

@Component({
  selector: 'app-workspace-2',
  standalone: true, // Agrega esta línea para usar el componente como standalone
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './workspace-2.component.html',
  styleUrls: ['./workspace-2.component.css']
})
export class Workspace2Component implements OnInit {
  tasks: Task[] = [
    { id: 1, assignee: 'Javier', avatar: 'https://i.imgur.com/HJ5XnN9.png', title: 'Creación de Prototipos', description: 'actualización de progreso', time: '30m ago', status: 'Revisar' },
    { id: 2, assignee: 'Valentin', avatar: 'https://i.imgur.com/HJ5XnN9.png', title: 'Validación de Requisitos', description: 'actualización de progreso', time: '1h ago', status: 'Revisar' },
    { id: 3, assignee: '    ', avatar: 'https://i.imgur.com/HJ5XnN9.png', title: 'Captura de Requisitos', description: 'actualización de progreso', time: '2h ago', status: 'Revisar' },
    { id: 4, assignee: 'Clotilde', avatar: 'https://i.imgur.com/HJ5XnN9.png', title: 'Estimar Recursos para el Proyecto', description: 'actualización de progreso', time: 'Lorem ipsum', status: 'Revisar' },
    { id: 5, assignee: 'Maria', avatar: 'https://i.imgur.com/HJ5XnN9.png', title: 'Definir los Objetivos del Proyecto', description: 'actualización de progreso', time: '1d ago', status: 'Leído' }
  ];

  messages: Message[] = [
    { sender: 'Juan (recolector de requisitos)', avatar: 'https://i.imgur.com/HJ5XnN9.png', content: 'Hola ¿cómo estás? Quería hacer un seguimiento sobre los requisitos que discutimos en nuestra última reunión.', time: '' },
    { sender: 'Popis', avatar: 'https://i.imgur.com/HJ5XnN9.png', content: 'Estoy bien, gracias. Sí, he estado revisando los requisitos y tengo algunas preguntas.', time: '' },
    { sender: 'Juan (recolector de requisitos)', avatar: 'https://i.imgur.com/HJ5XnN9.png', content: 'Perfecto, estoy aquí para ayudarte. ¿Cuáles son tus preguntas?', time: '' },
    { sender: 'Federico', avatar: 'https://i.imgur.com/HJ5XnN9.png', content: 'Primero, en la historia de usuario sobre la gestión de usuarios, mencionamos que los administradores deben poder crear y eliminar cuentas. ¿Podrías aclarar si también necesitamos una funcionalidad para editar cuentas existentes?', time: '' },
    { sender: 'Juan (recolector de requisitos)', avatar: 'https://i.imgur.com/HJ5XnN9.png', content: 'Buena observación. Sí, sería lógico incluir la opción de editar cuentas. Voy a actualizar la historia de usuario para reflejar eso. ¿Hay algo más que te gustaría agregar?', time: '' }
  ];

  completedTasks = 3;
  totalTasks = 10;

  constructor() { }

  ngOnInit(): void {
  }

  markAllAsDone(): void {
    // Implement logic to mark all tasks as done
  }

  generateReport(): void {
    // Implement logic to generate report
  }

  categorizeProgress(): void {
    // Implement logic to categorize progress
  }
}

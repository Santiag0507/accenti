import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  date: number | null;
  events: string[];
}

interface Meeting {
  title: string;
  date: string;
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CalendarioComponent implements OnInit {
  calendarDays: CalendarDay[] = [];
  meetings: Meeting[] = [];

  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    this.generateCalendar(); // Generar calendario en ngOnInit
    this.generateMeetings(); // Generar reuniones
  }


  generateCalendar() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // Días en el mes actual
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay(); // Día de la semana del primer día del mes

    this.calendarDays = [];

    // Agregar días en blanco antes del primer día del mes  
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.calendarDays.push({ date: null, events: [] }); // Días en blanco
    }

    // Agregar días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      let events = this.loadEventsForDay(day);
      this.calendarDays.push({ date: day, events: events });
    }
  }

  // Función para cargar eventos (puede ser llamada desde una API, base de datos, etc.)
  loadEventsForDay(day: number): string[] {

    // Generar eventos para los días del 1 al 10 de octubre
    const sampleEvents: { [key: number]: string[] } = Object.fromEntries(
      Array.from({ length: 3 }, (_, i) => [
        i + 1, ['Realizar sprint3'] // No hay eventos individuales para estos días
      ])
    );

    // Agregar eventos para los días del 20 al 24 de octubre
    for (let i = 20; i <= 22; i++) {
      sampleEvents[i] = [`Realizar sprint2`]; // Eventos del 20 al 24
    }
    return sampleEvents[day] || [];
  }

  // Generar reuniones de ejemplo
  generateMeetings() {
    this.meetings = [
      { title: 'Obtención de requisitos', date: '5 de octubre' },
      { title: 'Validación de requisitos', date: '10 de octubre' },
      { title: 'Mockups', date: '20 de octubre' },
      { title: 'Desarrollo 1er sprint', date: '31 de octubre' },
    ];
  }

  // Función para agregar eventos dinámicamente
  addEvent(day: number, event: string) {
    const dayObj = this.calendarDays.find(d => d.date === day);
    if (dayObj) {
      dayObj.events.push(event);
    }
  }
}

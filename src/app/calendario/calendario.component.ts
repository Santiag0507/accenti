import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  date: number;
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

  ngOnInit() {
    this.generateCalendar();
    this.generateMeetings();
  }

  generateCalendar() {
    // Simplificado para el ejemplo. En una aplicación real, esto sería más dinámico.
    this.calendarDays = [
      { date: 27, events: [] },
      { date: 28, events: [] },
      { date: 29, events: ['Obtención de requisitos'] },
      { date: 30, events: ['Obtención de requisitos'] },
      { date: 31, events: ['Obtención de requisitos'] },
      { date: 1, events: ['Obtención de requisitos'] },
      { date: 2, events: ['Obtención de requisitos'] },
      // ... más días
    ];
  }

  generateMeetings() {
    this.meetings = [
      { title: 'Obtención de requisitos', date: '29 de agosto' },
      { title: 'Validación de requisitos', date: '04 de septiembre' },
      { title: 'Mockups', date: '05 de septiembre' },
      { title: 'Desarrollo 1er sprint', date: '13 de septiembre' },
    ];
  }
}
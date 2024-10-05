import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Workspace2Component } from './workspace-2.component';

describe('Workspace2Component', () => {
  let component: Workspace2Component;
  let fixture: ComponentFixture<Workspace2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workspace2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workspace2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 tasks', () => {
    expect(component.tasks.length).toBe(5);
  });

  it('should have 5 messages', () => {
    expect(component.messages.length).toBe(5);
  });

  it('should have 3 completed tasks out of 10', () => {
    expect(component.completedTasks).toBe(3);
    expect(component.totalTasks).toBe(10);
  });

  it('should call markAllAsDone method', () => {
    spyOn(component, 'markAllAsDone');
    component.markAllAsDone();
    expect(component.markAllAsDone).toHaveBeenCalled();
  });

  it('should call generateReport method', () => {
    spyOn(component, 'generateReport');
    component.generateReport();
    expect(component.generateReport).toHaveBeenCalled();
  });

  it('should call categorizeProgress method', () => {
    spyOn(component, 'categorizeProgress');
    component.categorizeProgress();
    expect(component.categorizeProgress).toHaveBeenCalled();
  });
});
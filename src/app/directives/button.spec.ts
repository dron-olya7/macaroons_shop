import { Button } from './button';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core'; // <-- Добавлен ElementRef
import { By } from '@angular/platform-browser';

@Component({
  template: `<button appButton>Test Button</button>`,
  standalone: true,
  imports: [Button]
})
class TestComponent {}

describe('ButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new Button(new ElementRef(button)); // Теперь ElementRef доступен
    expect(directive).toBeTruthy();
  });

  it('should apply default background', () => {
    expect(button.style.background).toContain('rgb(113,8,30)');
  });

  it('should change background on mouseenter', () => {
    button.dispatchEvent(new Event('mouseenter'));
    expect(button.style.background).toContain('rgb(90,6,24)');
  });

  it('should revert background on mouseleave', () => {
    button.dispatchEvent(new Event('mouseenter'));
    button.dispatchEvent(new Event('mouseleave'));
    expect(button.style.background).toContain('rgb(113,8,30)');
  });
});

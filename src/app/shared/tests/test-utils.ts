/** angular */
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
/** end angular */

export class TestUtils<T> {
  constructor(private fixture: ComponentFixture<T>) {
  }

  getElement(selector: string): DebugElement {
    return this.fixture.nativeElement.querySelector(selector);
  }

  getElementAll(selector: string): DebugElement[] {
    return this.fixture.nativeElement.querySelectorAll(selector);
  }
}

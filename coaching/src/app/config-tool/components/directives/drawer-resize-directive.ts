import { Directive, HostListener, input, output, }                from '@angular/core';
import { DRAWER_START_WIDTH, MAX_DRAWER_WIDTH, MIN_DRAWER_WIDTH } from '../../utilities/const/drawer.const';

@Directive({
  selector: '[appDrawerResize]',
  standalone: true,
})
export class DrawerResizeDirective {
  startWidth = input<number>(DRAWER_START_WIDTH);

  widthChange = output<number>();

  private resizing = false;
  private startX = 0;
  private startWidthSnapshot = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    event.preventDefault();

    this.resizing = true;
    this.startX = event.clientX;
    this.startWidthSnapshot = this.startWidth();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.resizing) {
      return;
    }

    const delta = event.clientX - this.startX;
    let newWidth = this.startWidthSnapshot + delta;

    if (newWidth < MIN_DRAWER_WIDTH) newWidth = MIN_DRAWER_WIDTH;
    if (newWidth > MAX_DRAWER_WIDTH) newWidth = MAX_DRAWER_WIDTH;

    this.widthChange.emit(newWidth);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.resizing = false;
  }
}

import { Component, inject } from '@angular/core';
import { MatButton }         from '@angular/material/button';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  imports: [
    MatButton
  ]
})
export class Main {

  private readonly router = inject(Router);

  redirectToConfigTool(): void {
    this.router.navigate(['/config-tool']);
  }
}

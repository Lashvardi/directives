import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permissions.service';

@Directive({
  selector: '[appHasPermission]',
})
export class AppHasPermissionDirective implements OnInit {
  @Input('appHasPermission') permission!: string;

  constructor(
    private el: ElementRef,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    if (!this.permissionService.hasPermission(this.permission)) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}

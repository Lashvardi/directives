import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permissions.service';

@Directive({
  selector: '[UserHasPermission]',
})
export class AppHasPermissionDirective implements OnInit {
  @Input('UserHasPermission') permission!: string;

  constructor(
    private el: ElementRef,
    private _permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    if (!this._permissionService.hasPermission(this.permission)) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}

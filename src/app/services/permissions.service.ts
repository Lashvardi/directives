import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private permissions: string[] = ['read', 'write', 'delete'];

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission); // აბრუნებს true ან false
  }
}

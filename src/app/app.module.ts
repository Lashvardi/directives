import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './directives/component-directives/user-list.component';
import { UserDetailComponent } from './directives/component-directives/user-detail.component';
import { HighlightDirective } from './directives/attribute-directives/higlight.directive';
import { AppHasPermissionDirective } from './directives/attribute-directives/has-permissions.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    HighlightDirective,
    AppHasPermissionDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

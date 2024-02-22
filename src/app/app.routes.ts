import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {TestComponent} from "./pages/test/test.component";
import {LayoutComponent} from "./layout/layout.component";
import {AdminComponent} from "./pages/admin/admin.component";

export const routes: Routes = [
  {path: '', redirectTo: 'layout/admin', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {
    path: 'layout', component: LayoutComponent,
    children: [
      {path: 'admin', component: AdminComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent as TeachersAddComponent } from './teachers/add/add.component';
import { ListComponent as TeachersListComponent} from './teachers/list/list.component';
import { IndexComponent as TeachersIndexComponent} from './teachers/index/index.component';
import { AddComponent as ProjectsAddComponent } from './projects/add/add.component';
import { ListComponent as ProjectsListComponent} from './projects/list/list.component';
import { IndexComponent as ProjectsIndexComponent} from './projects/index/index.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

const appRoutes: Routes=[{path: 'projects/index', component: ProjectsIndexComponent},
{path: 'projects/list', component: ProjectsListComponent}];

@NgModule({
  declarations: [
    AppComponent,
    TeachersAddComponent,
    TeachersListComponent,
    TeachersIndexComponent,
    ProjectsAddComponent,
    ProjectsListComponent,
    ProjectsIndexComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

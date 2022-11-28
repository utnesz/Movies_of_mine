import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './common/home/home.component';
import { MoivesListComponent } from './common/moives-list/moives-list.component';
import { MoivesEditorComponent } from './common/moives-editor/moives-editor.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './common/movie-card/movie-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MoivesListComponent,
    MoivesEditorComponent,
    MovieCardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { ItemComponent } from './shared/item/item.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
	imports: [
		BrowserModule, HttpClientModule, FormsModule,
	],
	declarations: [
		AppComponent,
    HomeComponent,
    SideBarComponent,
    ContainerComponent,
    ItemComponent,
    PathComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}


import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { NavigatorComponent } from "./navigator/navigator.component";

import { MapService } from "./map.service";
import { GeocodingService } from "./geocoding.service";

import "leaflet";
import "leaflet.vectorgrid";

@NgModule({
  declarations: [
    NavigatorComponent,
    MapComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [MapService, GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
